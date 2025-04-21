"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-classic-black/50 border-t border-golden-pitch/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base mb-6 text-gray-300">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I&apos;m always open
              to discussing new projects and opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 flex items-center justify-center mr-3">
                  <Mail className="gradient-text" size={18} />
                </div>
                <div>
                  <h3 className="font-medium gradient-text text-sm">Email</h3>
                  <p className="text-gray-300 text-sm">[Email address removed for privacy]</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 flex items-center justify-center mr-3">
                  <Phone className="gradient-text" size={18} />
                </div>
                <div>
                  <h3 className="font-medium gradient-text text-sm">Phone</h3>
                  <p className="text-gray-300 text-sm">03366801400</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 flex items-center justify-center mr-3">
                  <MapPin className="gradient-text" size={18} />
                </div>
                <div>
                  <h3 className="font-medium gradient-text text-sm">Location</h3>
                  <p className="text-gray-300 text-sm">
                    House no: 60-A, Lane 1, Hashmi Garden Estate, Near Noor Mehal, Bahawalpur, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="contact-input"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
              {submitSuccess && (
                <p className="text-green-500 text-center text-sm">Your message has been sent successfully!</p>
              )}
              {submitError && <p className="text-red-500 text-center text-sm">{submitError}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
