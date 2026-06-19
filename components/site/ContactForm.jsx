"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("ok");
      setMsg(json.message || "Thank you — we'll be in touch shortly.");
      e.target.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required />
        <Field name="company" label="Company" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" />
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Product of interest
        </label>
        <select
          name="product"
          defaultValue=""
          className="w-full rounded-xl border border-line bg-bg-2 px-4 py-3 text-ink outline-none transition-colors focus:border-blue focus:bg-white"
        >
          <option value="" disabled>Select a product…</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-xl border border-line bg-bg-2 px-4 py-3 text-ink outline-none transition-colors focus:border-blue focus:bg-white"
        />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-blue mt-7 w-full justify-center disabled:opacity-60">
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
      {status === "ok" && <p className="mt-4 text-sm font-medium text-blue">{msg}</p>}
      {status === "error" && <p className="mt-4 text-sm font-medium text-red-500">{msg}</p>}
    </form>
  );
}

function Field({ name, label, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-bg-2 px-4 py-3 text-ink outline-none transition-colors focus:border-blue focus:bg-white"
      />
    </div>
  );
}
