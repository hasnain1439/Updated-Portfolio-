import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheck, FiCopy, FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionTitle from "../common/SectionTitle";
import { EMAIL, gmailComposeUrl } from "../../utils/email";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" }); // 'success', 'error', 'info', ''
  const [submitting, setSubmitting] = useState(false);

  const emailAddress = EMAIL;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  // Prefilled Gmail draft, offered as a manual fallback if sending fails.
  const gmailFallbackUrl = () =>
    gmailComposeUrl({
      subject: formData.subject || "Portfolio Inquiry from " + formData.name,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: real users never see or fill this field; bots usually do.
    if (e.target.elements.botcheck?.checked) return;

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      // 1. Try EmailJS if configured
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            name: formData.name,
            from_name: formData.name,
            user_name: formData.name,
            email: formData.email,
            from_email: formData.email,
            user_email: formData.email,
            title: formData.subject || "Portfolio Inquiry",
            subject: formData.subject || "New Portfolio Inquiry",
            message: formData.message,
            time: new Date().toLocaleString(),
            to_name: "Hasnain Iqbal",
            reply_to: formData.email,
          },
          emailjsPublicKey
        );

        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent directly to Hasnain's inbox.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitting(false);
        return;
      }

      // 2. Try Web3Forms if configured
      if (web3formsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New Portfolio Message from ${formData.name}`,
            message: formData.message,
            from_name: "Portfolio Contact Form",
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus({
            type: "success",
            message: "Thank you! Your message has been received and sent to Hasnain's inbox.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSubmitting(false);
          return;
        } else {
          throw new Error(data.message || "Failed to send email");
        }
      }

      // 3. Default: FormSubmit (no API key needed). Delivers straight to the inbox.
      //    The very first submission triggers a one-time "Activate Form" email.
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "(no subject)",
          message: formData.message,
          _subject: `Portfolio: ${formData.subject || "New message from " + formData.name}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok && String(data.success) === "true") {
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent — I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitting(false);
        return;
      }
      throw new Error(data.message || `Form service responded with ${response.status}`);
    } catch (err) {
      console.error("Email send error:", err);
      setStatus({
        type: "error",
        message: "Sorry, the message couldn't be sent right now.",
        fallback: gmailFallbackUrl(),
      });
      setSubmitting(false);
    }
  };

  const contactRows = [
    {
      icon: FiMail,
      label: "Email",
      value: emailAddress,
      href: gmailComposeUrl(),
      copy: true,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+92 320 4698158",
      href: "https://wa.me/923204698158",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: "in/hasnain-iqbal",
      href: "https://www.linkedin.com/in/hasnain-iqbal-73043326a",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Lahore, Pakistan · UTC+5",
    },
  ];

  const inputClass =
    "w-full px-3.5 py-3 rounded-lg bg-white dark:bg-neutral-950 border border-slate-300 dark:border-neutral-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 text-sm focus:outline-none focus:border-slate-900 dark:focus:border-neutral-400 focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 transition";
  const labelClass = "block text-sm font-medium text-slate-700 dark:text-neutral-300 mb-1.5";

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#111111] transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal()}>
          <SectionTitle
            subtitle="Contact"
            title="Let's build something together."
            description="Hiring for a full-stack role, need a web or mobile app built, or want a second pair of hands on your product? Send a message and I will get back to you."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch">
          {/* Left: availability + direct channels */}
          <motion.div {...reveal(0.05)} className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-xl border border-slate-200 dark:border-neutral-800 p-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
                  Available for new work
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-neutral-400">
                Open to full-time roles, freelance projects and collaborations — remote or on-site.
              </p>
            </div>

            <ul className="flex-1 flex flex-col rounded-xl border border-slate-200 dark:border-neutral-800 divide-y divide-slate-200 dark:divide-neutral-800 overflow-hidden">
              {contactRows.map((row) => {
                const external = row.href && !row.href.startsWith("mailto:");
                const content = (
                  <>
                    <row.icon className="shrink-0 text-lg text-slate-500 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-500">
                        {row.label}
                      </p>
                      <p className="mt-0.5 text-[15px] font-medium text-slate-900 dark:text-white truncate">{row.value}</p>
                    </div>
                    {external && (
                      <FiArrowUpRight className="shrink-0 text-slate-400 dark:text-neutral-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                    )}
                  </>
                );
                return (
                  <li key={row.label} className="flex flex-1 items-stretch">
                    {row.href ? (
                      <a
                        href={row.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex flex-1 items-center gap-4 px-5 py-4 min-w-0 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex flex-1 items-center gap-4 px-5 py-4 min-w-0">{content}</div>
                    )}
                    {row.copy && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="shrink-0 self-center mr-4 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-neutral-700 font-mono text-xs uppercase tracking-[0.1em] text-slate-600 dark:text-neutral-300 hover:border-slate-900 dark:hover:border-neutral-400 transition-colors cursor-pointer"
                        aria-label="Copy email address"
                      >
                        {copied ? <FiCheck className="text-emerald-500" size={12} /> : <FiCopy size={12} />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div {...reveal(0.12)} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/40 p-6 sm:p-8 space-y-5"
            >
              {/* Honeypot (hidden from people and screen readers) */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Send a message</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-neutral-400">
                  Tell me about the role, project or idea.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClass}>
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full stack role, freelance project…"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message <span className="text-slate-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A few lines about what you're building, timeline and budget."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-neutral-500">
                  * Required
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-700 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-900 text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <FiSend size={15} />
                    </>
                  )}
                </button>
              </div>

              {/* Status feedback */}
              <AnimatePresence>
                {status.type && (
                  <motion.div
                    role="status"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`p-3.5 rounded-lg border text-sm flex items-start gap-2.5 ${
                      status.type === "success"
                        ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                        : status.type === "error"
                        ? "border-red-500/30 bg-red-500/5 text-red-700 dark:text-red-400"
                        : "border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <FiCheck className="shrink-0 mt-0.5" size={16} />
                    ) : (
                      <FiAlertCircle className="shrink-0 mt-0.5" size={16} />
                    )}
                    <span>
                      {status.message}
                      {status.fallback && (
                        <>
                          {" "}
                          <a
                            href={status.fallback}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold underline underline-offset-4"
                          >
                            Send via Gmail instead ↗
                          </a>
                        </>
                      )}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
