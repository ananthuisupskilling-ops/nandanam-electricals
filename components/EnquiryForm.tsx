"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { enquiryMessage, whatsappUrl } from "@/lib/utils";

const serviceOptions = [
  "Solar panel installation",
  "On-grid solar system",
  "Hybrid solar system",
  "Solar subsidy support",
  "Solar maintenance",
  "Solar repair or service",
  "All electrical works",
  "Electrical wiring",
  "Electrical maintenance",
  "Residential electrical works",
  "Commercial electrical works",
  "Industrial electrical works",
  "Project consultation"
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  capacity: "",
  message: ""
};

export function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const whatsAppLink = useMemo(() => whatsappUrl(enquiryMessage(form)), [form]);

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit enquiry.");
      }

      setStatus("sent");
      window.open(whatsAppLink, "_blank", "noopener,noreferrer");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try WhatsApp or phone."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg bg-white p-5 shadow-soft md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Full Name
          <input
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone Number
          <input
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
            placeholder="+91"
            inputMode="tel"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
            placeholder="name@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Address / Location
          <input
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
            placeholder="Town, district"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Service Required
          <select
            required
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="rounded-md border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Solar Capacity Required
          <input
            value={form.capacity}
            onChange={(event) => updateField("capacity", event.target.value)}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
            placeholder="Example: 3 kW, 5 kW, not sure"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 rounded-md border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/10"
          placeholder="Tell us about your requirement"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-leaf px-5 py-3 font-bold text-white transition hover:bg-leaf/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-5 w-5" />
        {status === "sending" ? "Submitting..." : "Submit Enquiry"}
      </button>

      {status === "sent" ? (
        <p className="rounded-md bg-leaf/10 px-4 py-3 text-sm font-medium text-leaf">
          Enquiry submitted. WhatsApp has opened with your message for quick confirmation.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  );
}
