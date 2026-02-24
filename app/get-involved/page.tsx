'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, HandHelping, Share2, TrendingUp } from 'lucide-react'

export default function GetInvolved() {
  const [activeSection, setActiveSection] = useState('donate')
  const [donationAmount, setDonationAmount] = useState('25')
  const [isRecurring, setIsRecurring] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkboxElement = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        interests: checkboxElement.checked
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: [],
      availability: '',
      message: ''
    })
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Join the Fight</h1>
            <p className="text-xl text-muted-foreground">
              Your support makes a real difference. Choose how you want to help.
            </p>
          </div>
        </section>

        {/* Quick Action Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <button
                onClick={() => setActiveSection('donate')}
                className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 text-center ${
                  activeSection === 'donate'
                    ? 'bg-primary/10 border-primary'
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <Heart className={`w-10 h-10 mx-auto mb-3 ${activeSection === 'donate' ? 'text-primary' : 'text-gray-400'}`} />
                <h3 className="font-bold text-foreground">Donate</h3>
                <p className="text-sm text-muted-foreground mt-2">Support our mission financially</p>
              </button>

              <button
                onClick={() => setActiveSection('volunteer')}
                className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 text-center ${
                  activeSection === 'volunteer'
                    ? 'bg-primary/10 border-primary'
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <HandHelping className={`w-10 h-10 mx-auto mb-3 ${activeSection === 'volunteer' ? 'text-primary' : 'text-gray-400'}`} />
                <h3 className="font-bold text-foreground">Volunteer</h3>
                <p className="text-sm text-muted-foreground mt-2">Give your time and skills</p>
              </button>

              <button
                onClick={() => setActiveSection('share')}
                className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 text-center ${
                  activeSection === 'share'
                    ? 'bg-primary/10 border-primary'
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <Share2 className={`w-10 h-10 mx-auto mb-3 ${activeSection === 'share' ? 'text-primary' : 'text-gray-400'}`} />
                <h3 className="font-bold text-foreground">Spread Awareness</h3>
                <p className="text-sm text-muted-foreground mt-2">Share our mission with others</p>
              </button>

              <button
                onClick={() => setActiveSection('events')}
                className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 text-center ${
                  activeSection === 'events'
                    ? 'bg-primary/10 border-primary'
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <TrendingUp className={`w-10 h-10 mx-auto mb-3 ${activeSection === 'events' ? 'text-primary' : 'text-gray-400'}`} />
                <h3 className="font-bold text-foreground">Events</h3>
                <p className="text-sm text-muted-foreground mt-2">Attend upcoming events</p>
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Donate Section */}
            {activeSection === 'donate' && (
              <div className="animate-fade-in">
                <div className="bg-white p-8 rounded-lg border border-border mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Make a Donation</h2>
                  <p className="text-muted-foreground mb-8">
                    Your donation directly supports our programs including youth education, community giveaways, and awareness campaigns.
                  </p>

                  <div className="space-y-6">
                    {/* Donation Amount */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Select Amount</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {['10', '25', '50', '100', '250', '500', '1000', 'Custom'].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setDonationAmount(amount)}
                            className={`p-3 rounded-lg font-semibold transition-all ${
                              donationAmount === amount
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-foreground hover:bg-gray-200'
                            }`}
                          >
                            {amount === 'Custom' ? 'Custom' : `$${amount}`}
                          </button>
                        ))}
                      </div>

                      {donationAmount === 'Custom' && (
                        <input
                          type="number"
                          placeholder="Enter amount"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                      )}
                    </div>

                    {/* Recurring Donation */}
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isRecurring}
                          onChange={(e) => setIsRecurring(e.target.checked)}
                          className="w-5 h-5"
                        />
                        <span className="text-foreground font-semibold">Make this a monthly donation</span>
                      </label>
                      <p className="text-sm text-muted-foreground mt-2 ml-8">
                        Monthly recurring donations help us plan better and sustain our programs.
                      </p>
                    </div>

                    {/* Impact Info */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-foreground mb-3">Your impact:</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>💰 $25 provides supplies for one youth education session</li>
                        <li>💰 $50 helps fund community giveaway items</li>
                        <li>💰 $100 supports event organization and outreach</li>
                        <li>💰 $250+ helps sustain multiple programs</li>
                      </ul>
                    </div>

                    {/* Donate Button */}
                    <button className="w-full px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-lg">
                      Donate Now
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      All donations are secure and tax-deductible. EIN: 83-3215091
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Volunteer Section */}
            {activeSection === 'volunteer' && (
              <div className="animate-fade-in">
                <div className="bg-white p-8 rounded-lg border border-border mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Volunteer with Us</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you're a student, professional, or community member, we have opportunities for everyone to contribute.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Areas of Interest</label>
                      <div className="space-y-2">
                        {['Youth Education', 'Community Events', 'Awareness Campaigns', 'Administrative Support', 'Other'].map((interest) => (
                          <label key={interest} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              value={interest}
                              onChange={handleInputChange}
                              className="w-5 h-5"
                            />
                            <span className="text-foreground">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Availability</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      >
                        <option value="">Select your availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="flexible">Flexible</option>
                        <option value="1-2hours">1-2 hours per week</option>
                        <option value="3-5hours">3-5 hours per week</option>
                        <option value="5+hours">5+ hours per week</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        rows={4}
                        placeholder="Tell us about yourself or your volunteer experience..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-lg"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Spread Awareness Section */}
            {activeSection === 'share' && (
              <div className="animate-fade-in">
                <div className="bg-white p-8 rounded-lg border border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Spread Awareness</h2>
                  <p className="text-muted-foreground mb-8">
                    Help us fight stigma and raise awareness by sharing our mission with your networks.
                  </p>

                  <div className="space-y-6">
                    {/* Social Share */}
                    <div>
                      <h3 className="font-bold text-foreground mb-4">Share on Social Media</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                          Share on Facebook
                        </button>
                        <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
                          Share on X (Twitter)
                        </button>
                        <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors">
                          Share on Instagram
                        </button>
                      </div>
                    </div>

                    {/* Share Text */}
                    <div>
                      <h3 className="font-bold text-foreground mb-4">Sample Message</h3>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-muted-foreground text-sm mb-3">
                          "I'm supporting BE A CHAMPION FOR AIDS-HIV INC in the fight against stigma and for HIV/AIDS awareness. Join me! 🎗️ 
                          Learn more at our website or consider donating to support our youth education and community programs."
                        </p>
                        <button className="text-primary hover:text-red-700 font-semibold text-sm">
                          Copy Text
                        </button>
                      </div>
                    </div>

                    {/* Petition Box */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-foreground mb-3">Sign Our Petition</h3>
                      <p className="text-muted-foreground mb-4">
                        Add your voice to our mission. Sign petitions supporting HIV stigma reduction and testing accessibility.
                      </p>
                      <button className="px-6 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                        View Petitions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Events Section */}
            {activeSection === 'events' && (
              <div className="animate-fade-in">
                <div className="bg-white p-8 rounded-lg border border-border">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Attend Our Events</h2>
                  <p className="text-muted-foreground mb-8">
                    Join us at upcoming events and community gatherings. Every event is an opportunity to connect, learn, and make an impact.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-bold text-foreground mb-2">Monthly Speak Out Club Meetings</h3>
                      <p className="text-sm text-muted-foreground mb-3">Every 2nd Saturday, 10 AM-12 PM at Community Center</p>
                      <button className="text-primary hover:text-red-700 font-semibold text-sm">
                        Register Now
                      </button>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-bold text-foreground mb-2">South Florida AIDS Walk</h3>
                      <p className="text-sm text-muted-foreground mb-3">April 15, 2026 at Las Olas Boulevard, Fort Lauderdale</p>
                      <button className="text-primary hover:text-red-700 font-semibold text-sm">
                        Learn More & Join
                      </button>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-bold text-foreground mb-2">Community Giveaway Events</h3>
                      <p className="text-sm text-muted-foreground mb-3">Monthly events with free supplies, haircuts, and more</p>
                      <button className="text-primary hover:text-red-700 font-semibold text-sm">
                        View Calendar
                      </button>
                    </div>
                  </div>

                  <a
                    href="/events"
                    className="inline-block px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                  >
                    View Full Event Calendar
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
