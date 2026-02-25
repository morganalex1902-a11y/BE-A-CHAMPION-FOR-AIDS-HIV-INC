'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What does U=U mean?",
    answer: "U=U means 'Undetectable = Untransmittable'. When someone with HIV is on effective antiretroviral therapy and maintains an undetectable viral load, they cannot sexually transmit HIV to others. This is a major breakthrough in HIV prevention."
  },
  {
    question: "Is HIV a crime?",
    answer: "No. HIV is not a crime. Our 'HIV is Not a Crime' campaign works to end the criminalization of HIV transmission and reduce the stigma surrounding HIV-positive individuals. Everyone deserves dignity and respect regardless of their HIV status."
  },
  {
    question: "How can I get tested for HIV?",
    answer: "There are multiple options: visit your local health department, urgent care clinic, or hospital. Many offer free or low-cost testing. You can also use at-home testing kits available at pharmacies. Testing is confidential and is the first step toward taking control of your health."
  },
  {
    question: "What is Speak Out Club?",
    answer: "Speak Out Club is our youth education program that meets regularly to discuss HIV/AIDS awareness, stigma reduction, and empowerment. It's a safe space for young people to learn, ask questions, and become advocates in their communities."
  },
  {
    question: "How is the organization funded?",
    answer: "As a 501(c)(3) nonprofit, we're funded through donations, grants, community events, and the generous support of volunteers and partners. Every donation helps us continue our mission of education and stigma reduction."
  }
]

export default function About() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Our Story</h1>
            <p className="text-xl opacity-95">
              Dedicated to fighting HIV/AIDS stigma through education, empowerment, and community action
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4 pb-3 border-b-4 border-secondary w-fit">Our Mission</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  BE A CHAMPION FOR AIDS-HIV INC is committed to empowering communities through education, awareness, and advocacy. We work to reduce stigma, promote prevention and testing, and support those affected by HIV/AIDS.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Our mission is built on the principles of inclusivity, compassion, and action. We believe that education and community support are the keys to ending HIV/AIDS stigma and improving health outcomes.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4 pb-3 border-b-4 border-secondary w-fit">Our Values</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                    <h3 className="font-bold text-primary mb-1">Inclusivity</h3>
                    <p className="text-foreground text-sm">We welcome and serve all members of the community regardless of age, race, gender, or background.</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                    <h3 className="font-bold text-primary mb-1">Education</h3>
                    <p className="text-foreground text-sm">We provide accurate, accessible information about HIV/AIDS prevention, testing, and treatment.</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                    <h3 className="font-bold text-primary mb-1">Empowerment</h3>
                    <p className="text-foreground text-sm">We empower individuals and communities to take action in the fight against stigma and disease.</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                    <h3 className="font-bold text-primary mb-1">Compassion</h3>
                    <p className="text-foreground text-sm">We approach our work with compassion and respect for those affected by HIV/AIDS.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Details */}
            <div className="bg-white p-8 rounded-lg border-2 border-secondary">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-secondary w-fit">Organization Details</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Legal Information</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Organization Name:</strong> BE A CHAMPION FOR AIDS-HIV INC</li>
                    <li><strong>Status:</strong> 501(c)(3) Nonprofit</li>
                    <li><strong>EIN:</strong> 83-3215091</li>
                    <li><strong>Founded:</strong> 2022</li>
                    <li><strong>State:</strong> Florida</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Contact Information</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Address:</strong> 300 NW 34th Street, Apt. #206, Pompano Beach, FL 33064</li>
                    <li><strong>Phone:</strong> (954) 740-2146</li>
                    <li><strong>Email:</strong> beachampaid.hivinc@gmail.com</li>
                    <li><strong>President:</strong> Melvin K. Wright</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-20 bg-secondary mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isExpanded = expandedId === index
                return (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : index)}
                      className="w-full p-6 text-left hover:bg-secondary/5 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                      <div>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-primary" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-6 text-foreground border-t-2 border-secondary bg-secondary/5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
