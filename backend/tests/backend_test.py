"""Backend tests for Saishruti Enterprises API"""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fallback: read from frontend .env
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break
    except Exception:
        pass

BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


# ===== Root endpoint =====
class TestRoot:
    def test_root_returns_ok(self):
        r = requests.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "Saishruti" in data.get("message", "")


# ===== POST /api/contact =====
class TestContactCreate:
    def test_create_contact_success(self):
        payload = {
            "name": "TEST_John Doe",
            "email": "test_john@example.com",
            "phone": "+91-9876543210",
            "project_type": "Interior Design",
            "message": "I need a 3BHK interior design for my new apartment.",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, f"Expected 200 got {r.status_code}: {r.text}"
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["project_type"] == payload["project_type"]
        assert data["message"] == payload["message"]
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "created_at" in data

        # Verify persistence via GET
        r2 = requests.get(f"{API}/contact", timeout=15)
        assert r2.status_code == 200
        ids = [item["id"] for item in r2.json()]
        assert data["id"] in ids, "Created inquiry not found in list"

    def test_create_contact_invalid_email(self):
        payload = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "phone": "1234567",
            "project_type": "AutoCAD",
            "message": "Invalid email test",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_missing_fields(self):
        payload = {
            "name": "TEST_Missing",
            "email": "missing@example.com",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_empty_name(self):
        payload = {
            "name": "",
            "email": "empty@example.com",
            "phone": "1234567",
            "project_type": "Maya",
            "message": "Empty name test",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422


# ===== GET /api/contact =====
class TestContactList:
    def test_list_contacts_returns_array(self):
        r = requests.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)

    def test_list_contacts_sorted_desc_by_created_at(self):
        # Seed two records with a delay
        p1 = {
            "name": "TEST_Sort1",
            "email": "sort1@example.com",
            "phone": "1234567",
            "phone": "1234567",
            "project_type": "3DS Max",
            "message": "First inquiry for sort test",
        }
        p2 = {
            "name": "TEST_Sort2",
            "email": "sort2@example.com",
            "phone": "1234567",
            "project_type": "Civil Contractor",
            "message": "Second inquiry for sort test",
        }
        r1 = requests.post(f"{API}/contact", json=p1, timeout=15)
        assert r1.status_code == 200
        time.sleep(1.2)
        r2 = requests.post(f"{API}/contact", json=p2, timeout=15)
        assert r2.status_code == 200

        rl = requests.get(f"{API}/contact", timeout=15)
        assert rl.status_code == 200
        items = rl.json()
        assert len(items) >= 2
        # Check sorted desc
        timestamps = [item["created_at"] for item in items]
        assert timestamps == sorted(timestamps, reverse=True), "Not sorted desc by created_at"

        # Most recent should be Sort2
        idx1 = next((i for i, it in enumerate(items) if it["name"] == "TEST_Sort1"), -1)
        idx2 = next((i for i, it in enumerate(items) if it["name"] == "TEST_Sort2"), -1)
        assert idx1 != -1 and idx2 != -1
        assert idx2 < idx1, "Sort2 (newer) should come before Sort1"
