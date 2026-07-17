"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contactInquiryOptions } from "@/content/contact";
import type { ContactInquiryType } from "@/types/content";

export function ContactForm({
  initialType = "product-or-website",
}: {
  initialType?: ContactInquiryType;
}) {
  const [inquiryType, setInquiryType] =
    useState<ContactInquiryType>(initialType);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const inquiry = contactInquiryOptions.find(
      (option) => option.value === inquiryType,
    );
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = `Jamezzi inquiry — ${inquiry?.label ?? "General"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : null,
      `Inquiry: ${inquiry?.label ?? inquiryType}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:info@jamezzi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Field label="What would you like to discuss?" htmlFor="inquiry-type">
        <select
          id="inquiry-type"
          name="inquiry-type"
          value={inquiryType}
          onChange={(event) =>
            setInquiryType(event.target.value as ContactInquiryType)
          }
          className="border-border text-body text-ink focus:border-indigo min-h-12 w-full rounded-[10px] border bg-white px-4 outline-none"
        >
          {contactInquiryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="border-border text-body text-ink focus:border-indigo min-h-12 w-full rounded-[10px] border bg-white px-4 outline-none"
          />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border-border text-body text-ink focus:border-indigo min-h-12 w-full rounded-[10px] border bg-white px-4 outline-none"
          />
        </Field>
      </div>

      <Field label="Organization or project (optional)" htmlFor="organization">
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="border-border text-body text-ink focus:border-indigo min-h-12 w-full rounded-[10px] border bg-white px-4 outline-none"
        />
      </Field>

      <Field label="Tell me what you have in mind" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="A useful first message includes the problem, what already exists, your goal, and any important timeline."
          className="border-border text-body text-ink placeholder:text-muted/65 focus:border-indigo w-full resize-y rounded-[10px] border bg-white p-4 outline-none"
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-metadata text-muted max-w-sm">
          This opens your email application with the message prepared for you.
        </p>
        <button
          type="submit"
          className="bg-indigo hover:bg-indigo-dark text-button min-h-12 rounded-[10px] px-7 text-white transition-colors"
        >
          Prepare Email
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-supporting text-ink mb-2 block font-medium"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
