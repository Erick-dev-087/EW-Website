"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHATSAPP_URL_WITH_MESSAGE, CONTACT_INFO } from "@/lib/constants";

const projectTypes = [
  "Web Application",
  "Mobile Application",
  "Custom Software",
  "Automation & AI",
  "UI/UX Design",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const timelines = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible",
];

export default function StartAProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const message = `Hello E&W! I'd like to discuss a project.

*Name:* ${formData.name}
*Email:* ${formData.email}
${formData.company ? `*Company:* ${formData.company}\n` : ""}*Project Type:* ${formData.projectType}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}

*Project Description:*
${formData.description}`;

    const whatsappUrl = `https://wa.me/254113141243?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const inputStyles = `w-full bg-bg-surface border border-border rounded-lg px-4 py-3.5 text-sm text-text-primary
                       placeholder:text-text-dim
                       transition-all duration-300
                       focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                       hover:border-border-hover`;

  const selectStyles = `${inputStyles} appearance-none cursor-pointer`;

  const labelStyles = `block text-sm font-medium text-text-muted mb-2.5`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              Start a Project
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.05] mb-4">
              What are you looking
              <br />
              to build?
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-text-muted text-base md:text-lg max-w-lg leading-relaxed">
              Tell us about your project. We&apos;ll get back to you within 24
              hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal>
              {submitted ? (
                <div className="bg-bg-surface border border-accent/30 rounded-xl p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-text-primary mb-3">
                    Message sent!
                  </h2>
                  <p className="text-text-muted text-sm mb-6">
                    Your project details have been sent via WhatsApp. We&apos;ll
                    review and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-accent hover:text-accent-hover transition-colors duration-300"
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelStyles}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelStyles}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className={labelStyles}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className={inputStyles}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className={labelStyles}>
                      Project Type *
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className={selectStyles}
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className={labelStyles}>
                        Budget Range *
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className={selectStyles}
                        >
                          <option value="" disabled>
                            Select range
                          </option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelStyles}>
                        Timeline *
                      </label>
                      <div className="relative">
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className={selectStyles}
                        >
                          <option value="" disabled>
                            Select timeline
                          </option>
                          {timelines.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className={labelStyles}>
                      Tell us about the project *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className={`${inputStyles} resize-y min-h-[120px]`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 font-medium text-sm tracking-wide
                               border border-accent text-accent rounded-lg px-8 py-3.5
                               transition-all duration-300
                               hover:bg-accent hover:text-bg-primary
                               hover:shadow-[0_0_30px_rgba(214,83,22,0.2)]
                               focus-visible:outline-2 focus-visible:outline-accent
                               group"
                  >
                    Send Project Inquiry
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Direct WhatsApp */}
                <div className="bg-bg-surface border border-border rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-3">
                    Prefer to chat directly?
                  </h3>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    Skip the form and send us a message on WhatsApp. We usually
                    respond within a few hours.
                  </p>
                  <a
                    href={WHATSAPP_URL_WITH_MESSAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-accent
                               hover:text-accent-hover transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="bg-bg-surface border border-border rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-3">
                    Contact Info
                  </h3>
                  <ul className="space-y-3 text-sm text-text-muted">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-accent shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      {CONTACT_INFO.phone}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-accent shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                        />
                      </svg>
                      {CONTACT_INFO.location}
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
