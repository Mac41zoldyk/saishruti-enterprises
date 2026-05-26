import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const projectTypes = [
  "Interior Design",
  "AutoCAD Drafting",
  "3DS Max Render",
  "Maya Modeling",
  "Civil Contracting",
  "Other",
];

const cities = [
  { name: "Mumbai", phone: "+91 98XXX 12345" },
  { name: "Surat", phone: "+91 98XXX 67890" },
  { name: "Guwahati", phone: "+91 98XXX 24680" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e?.target?.value ?? e }));

  const submit = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.project_type ||
      !form.message
    ) {
      toast.error("Please complete all fields before sending.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks — we'll be in touch within 48 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        message: "",
      });
    } catch (err) {
      const detail =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-y-14 gap-x-6">
        {/* Left column */}
        <div className="col-span-12 lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            (Contact) — №05
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif mt-6 text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            Let&apos;s build
            <br />
            <span className="italic text-[#9B6A4A]">something.</span>
          </motion.h2>

          <p className="mt-8 max-w-md text-foreground/70 leading-relaxed">
            Tell us about the space, the brief, or the build. We&apos;ll come
            back with first thoughts and a project plan within two working
            days.
          </p>

          <div className="mt-12 space-y-8">
            {cities.map((c) => (
              <div
                key={c.name}
                className="border-t border-foreground/15 pt-4"
                data-testid={`contact-city-${c.name.toLowerCase()}`}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">
                  {c.name}
                </div>
                <div className="font-serif text-2xl md:text-3xl mt-2">
                  {c.phone}
                </div>
              </div>
            ))}
            <div className="border-t border-foreground/15 pt-4">
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">
                Email
              </div>
              <div className="font-serif text-2xl md:text-3xl mt-2">
                hello@saishruti.studio
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="col-span-12 lg:col-span-7 lg:pl-10 grid grid-cols-2 gap-x-6 gap-y-8"
        >
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              Name
            </label>
            <Input
              data-testid="contact-input-name"
              value={form.name}
              onChange={update("name")}
              placeholder="Your full name"
              className="flush-input mt-2"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              Email
            </label>
            <Input
              data-testid="contact-input-email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className="flush-input mt-2"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              Phone
            </label>
            <Input
              data-testid="contact-input-phone"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+91 ..."
              className="flush-input mt-2"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              Project type
            </label>
            <Select
              value={form.project_type}
              onValueChange={(v) => setForm((f) => ({ ...f, project_type: v }))}
            >
              <SelectTrigger
                data-testid="contact-input-project-type"
                className="mt-2 border-0 border-b border-foreground/20 rounded-none bg-transparent px-0 focus:ring-0 focus-visible:ring-0 h-11 hover:bg-transparent"
              >
                <SelectValue placeholder="Select a discipline" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((p) => (
                  <SelectItem
                    key={p}
                    value={p}
                    data-testid={`contact-option-${p
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <label className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              Tell us about the project
            </label>
            <Textarea
              data-testid="contact-input-message"
              value={form.message}
              onChange={update("message")}
              rows={5}
              placeholder="A short brief, square footage, timeline — anything helps."
              className="flush-input mt-2 resize-none"
            />
          </div>
          <div className="col-span-2 flex items-center justify-between mt-2">
            <span className="text-xs text-foreground/55">
              We typically reply within 48 hours.
            </span>
            <button
              type="submit"
              disabled={submitting}
              data-testid="contact-submit-btn"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-[#9B6A4A] transition-colors disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
