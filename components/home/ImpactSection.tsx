'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Being part of Speak Out Club has transformed how I view myself and others. I've learned so much about HIV/AIDS awareness and feel empowered to educate my peers.",
    author: "Maya, 16",
    role: "Speak Out Club Member"
  },
  {
    id: 2,
    quote: "The community giveaways helped my family during a difficult time. But more importantly, the organization showed us we're not alone in this fight.",
    author: "James, Parent",
    role: "Community Member"
  },
  {
    id: 3,
    quote: "As a healthcare worker, I appreciate what BE A CHAMPION is doing to reduce stigma. Their advocacy work makes a real difference in how patients are treated.",
    author: "Dr. Patricia",
    role: "Healthcare Professional"
  }
]

export default function ImpactSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the community members whose lives have been touched by our work
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-12">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedId === testimonial.id
            return (
              <div
                key={testimonial.id}
                className="border border-primary/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : testimonial.id)}
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors flex items-start justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-primary">★</span>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-900 font-medium ${isExpanded ? '' : 'line-clamp-2'}`}>
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F8fe7488dca6b482480b4c2a49bd75086?format=webp&width=800&height=1200"
              alt="Students holding KWIL Scholarship certificates"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-3 italic">Our program participants receiving KWIL Scholarships - tangible outcomes of our work</p>
        </div>

        {/* Key Achievements */}
        <div className="bg-white p-8 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-700">Youth Educated Through Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-700">Community Events Hosted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-700">Items Distributed in Giveaways</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
