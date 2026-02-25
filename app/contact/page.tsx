'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Get In Touch</h1>
            <p className="text-xl opacity-95">
              We'd love to hear from you. Reach out with questions, comments, or to get involved.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>

                {/* Address */}
                <div className="mb-6 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Address</h3>
                      <p className="text-foreground text-sm">
                        300 NW 34th Street<br/>
                        Apt. #206<br/>
                        Pompano Beach, FL 33064<br/>
                        USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Phone</h3>
                      <a href="tel:+19547402146" className="text-primary hover:text-red-700 font-semibold">
                        (954) 740-2146
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Email</h3>
                      <a href="mailto:beachampaid.hivinc@gmail.com" className="text-primary hover:text-red-700 font-semibold break-all text-sm">
                        beachampaid.hivinc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6 p-6 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Response Time</h3>
                      <p className="text-foreground text-sm">
                        We typically respond to inquiries within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064505570011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">✓</div>
                      <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                      <p className="text-green-600">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      {/* Topic */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Topic *</label>
                        <select
                          name="topic"
                          value={formData.topic}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="volunteer">Volunteer Opportunity</option>
                          <option value="donation">Donation & Support</option>
                          <option value="program">Program Information</option>
                          <option value="event">Event Inquiry</option>
                          <option value="resource">Resource Request</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                          rows={6}
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      {/* Privacy Notice */}
                      <div className="bg-secondary/10 p-4 rounded-lg border-2 border-secondary text-xs text-foreground">
                        <p>
                          We respect your privacy. Your information will only be used to respond to your inquiry and will not be shared with third parties.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden border border-border mb-12 h-96 bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6879835916!2d-80.1234!3d26.2385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d94ef5de5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s300%20NW%2034th%20Street%2C%20Pompano%20Beach%2C%20FL%2033064!5e0!3m2!1sen!2sus!4v1234567890"
              ></iframe>
            </div>

            {/* FAQ Box */}
            <div className="bg-secondary/10 p-8 rounded-lg border-2 border-secondary">
              <h2 className="text-2xl font-bold text-primary mb-6">Quick Questions?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">🎯 What should I write about?</h3>
                  <p className="text-sm text-foreground">
                    Tell us about your interest - whether you want to volunteer, donate, attend events, or just learn more about our mission.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">📱 How quickly will you respond?</h3>
                  <p className="text-sm text-foreground">
                    We typically reply within 24-48 business hours. For urgent matters, please call us directly.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">🔒 Is my information safe?</h3>
                  <p className="text-sm text-foreground">
                    Yes. We never share your information and follow strict privacy protocols. Your trust is important to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
