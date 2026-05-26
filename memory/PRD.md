# Saishruti Enterprises — Website PRD

## Original Problem Statement
Build me an animated and stylish personal website for an interior designing business for Saishruti Enterprises.

## User Choices
- **Sections:** Hero + About + Services + Portfolio + Testimonials + Contact
- **Visual style:** Luxury + modern minimal + bold editorial (fusion)
- **Contact form:** Save submissions to MongoDB (no email integration)
- **Services:** Interior Design, AutoCAD, 3DS Max, Maya, Civil Contractor
- **Cities:** Mumbai, Surat, Guwahati
- **Years in business:** 5
- **Gallery:** Curated stock interior images

## Architecture
- **Frontend:** React 19 + Tailwind + shadcn/ui + framer-motion + Lenis smooth scroll
- **Backend:** FastAPI + Motor (MongoDB) — `/api/contact` POST + GET
- **Design system:** Cormorant Garamond (serif) + Outfit (sans) on alabaster #F7F5F0 / obsidian #1A1A1A / terracotta #9B6A4A

## What's Implemented (Dec 2025)
- Sticky glassmorphic navigation with smooth scroll anchors and mobile menu
- Hero with staggered word reveal, parallax image, animated stats (05/120+/03)
- Editorial italic marquee strip across services
- About section with side image card and stat triplet
- Services list with hover floating image (5 services, dark section)
- Portfolio masonry grid with 7 projects, scroll-triggered reveals
- Testimonials carousel (3 quotes, auto-rotate + prev/next)
- Contact form (Name/Email/Phone/ProjectType/Message) → POST /api/contact
- Footer with cities + contact info
- Sonner toasts for form feedback

## Backend API
- `GET /api/` — health
- `POST /api/contact` — create inquiry (validates email, required fields)
- `GET /api/contact` — list inquiries (sorted desc by created_at)

## Testing Status
Backend 100% (pytest passes for create, validation, list, sort).
Frontend 100% (all sections render, nav scrolls, forms submit, no console errors).

## Next Action Items (Backlog)
- P1: Add an `/admin` page to view contact inquiries from the browser
- P1: Replace stock images with real client project photography
- P2: Add Resend/SendGrid email forwarding for inquiries
- P2: Add Hindi/Gujarati language toggle for regional clients
- P2: Add CMS-driven portfolio so user can add projects without code
- P3: SEO meta + Open Graph image, sitemap, robots.txt
- P3: Phone numbers + email — replace placeholders with real ones
