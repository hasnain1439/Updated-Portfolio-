import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiCopy, FiAlertCircle } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionTitle from "../common/SectionTitle";

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

  const emailAddress = "hasnainiqbal7860a@gmail.com";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      // 3. Fallback: If no API keys set in .env yet, trigger mailto client & inform user
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setStatus({
        type: "info",
        message: "Opening your default email app to send the message. (Tip: Configure EmailJS or Web3Forms keys in .env for background delivery).",
      });
      setSubmitting(false);

    } catch (err) {
      console.error("Email send error:", err);
      // Fallback on error
      setStatus({
        type: "error",
        message: "Unable to send automated email right now. Opening your email app as fallback...",
      });

      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: FiMail,
      title: "Email Address",
      value: emailAddress,
      action: "copy",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+92 320 4698158",
      link: "https://wa.me/923204698158",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: FaLinkedinIn,
      title: "LinkedIn",
      value: "Hasnain Iqbal",
      link: "https://www.linkedin.com/in/hasnain-iqbal-73043326a",
      iconColor: "text-sky-600",
      iconBg: "bg-sky-600/10",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Lahore, Pakistan (Remote Available)",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0E1322] transition-colors relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle subtitle="Contact" title="Let's Build Something Exceptional" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                Have a project or opportunity?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                Whether you need a full-stack web application, frontend development, API architecture, or a dedicated team member—I'm ready to bring your ideas to life.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-4 pt-2">
              {contactCards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 text-xl`}>
                      <item.icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  {item.action === "copy" ? (
                    <button
                      onClick={handleCopyEmail}
                      className="shrink-0 p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-primary dark:hover:text-primary-light hover:border-primary transition-all cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? <FiCheck className="text-emerald-500" size={16} /> : <FiCopy size={16} />}
                    </button>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 text-xs font-semibold text-primary dark:text-primary-light border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white transition-all"
                    >
                      Connect
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold text-center"
              >
                ✓ Email address copied to clipboard!
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-lg">
              <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                Send a Message
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Collaboration / Full Stack Role"
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or query..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-sm transition-all cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending Direct Message...
                    </span>
                  ) : (
                    <>
                      <FiSend size={16} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Feedback Alerts */}
                <AnimatePresence>
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl text-sm flex items-start gap-3 ${
                        status.type === "success"
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                          : status.type === "error"
                          ? "bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400"
                          : "bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {status.type === "success" ? (
                        <FiCheck className="shrink-0 mt-0.5" size={18} />
                      ) : (
                        <FiAlertCircle className="shrink-0 mt-0.5" size={18} />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
