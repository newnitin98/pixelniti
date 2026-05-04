"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.projectType) errors.projectType = "Please select a project type.";
  if (!form.message.trim()) {
    errors.message = "Project details are required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Please describe your project in at least 20 characters.";
  }
  return errors;
}

export function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      // ─── INTEGRATION POINT ──────────────────────────────────────────────────
      //
      // Option A — Formspree (simplest, no backend needed):
      //   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formState),
      //   });
      //   if (!res.ok) throw new Error("Submission failed");
      //
      // Option B — Resend via Next.js API route (create src/app/api/contact/route.ts):
      //   const res = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formState),
      //   });
      //
      // Option C — Google Sheets via Apps Script webhook:
      //   const res = await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      //     method: "POST",
      //     body: new URLSearchParams(formState as Record<string, string>),
      //   });
      //
      // Option D — WhatsApp deep link (client-side, no backend):
      //   const msg = encodeURIComponent(
      //     `New inquiry\nName: ${formState.name}\nEmail: ${formState.email}\n` +
      //     `Project: ${formState.projectType}\nBudget: ${formState.budget}\n\n${formState.message}`
      //   );
      //   window.open(`https://wa.me/919893079221?text=${msg}`, "_blank");
      //
      // Option E — EmailJS (client-side, no backend):
      //   import emailjs from "@emailjs/browser";
      //   await emailjs.send(SERVICE_ID, TEMPLATE_ID, formState as Record<string, string>, PUBLIC_KEY);
      //
      // Option F — CRM (HubSpot, Zoho, Salesforce, etc.):
      //   Post formState to your CRM's forms API with field names mapped accordingly.
      //
      // ────────────────────────────────────────────────────────────────────────

      // Placeholder: simulate async submission — remove this when integrating above
      await new Promise((resolve) => setTimeout(resolve, 1200));

      router.push("/thank-you");
    } catch {
      setIsSubmitting(false);
      setErrors({ message: "Something went wrong. Please try again or email us directly at hello@pixelniti.com." });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field] ? "border-red-500/60" : "border-input"
    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-foreground placeholder:text-muted-foreground`;

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Start Your Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your business and what you need. We will design a strategic solution that
            fits your goals — and send you a clear proposal within 2 business days.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@pixelniti.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@pixelniti.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                    <a
                      href="tel:+919893079221"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-9893079221
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">India (Serving globally)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h4 className="font-semibold mb-3 text-foreground">What happens next?</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <span className="text-primary font-bold">1.</span>
                  We review your requirements within 24 hours.
                </li>
                <li className="flex gap-2.5">
                  <span className="text-primary font-bold">2.</span>
                  We send a strategic proposal with scope and timeline.
                </li>
                <li className="flex gap-2.5">
                  <span className="text-primary font-bold">3.</span>
                  You decide. No pressure, no sales calls.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClass("name")}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="text-sm font-medium text-foreground">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formState.businessName}
                      onChange={handleChange}
                      className={inputClass("businessName")}
                      placeholder="Acme Corp"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClass("email")}
                      placeholder="john@example.com"
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={inputClass("phone")}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className={inputClass("projectType")}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="AI Agent / Chatbot">AI Agent / Chatbot</option>
                      <option value="Automation Workflow">Automation Workflow</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-xs text-red-400">{errors.projectType}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className={inputClass("budget")}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      <option value="Below ₹10,000">Below ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Describe your project, your goals, and any specific requirements..."
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-primary/25"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending your inquiry...</span>
                  ) : (
                    <>
                      Send Inquiry <Send size={18} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
