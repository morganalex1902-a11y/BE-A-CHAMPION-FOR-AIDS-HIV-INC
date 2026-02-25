'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Gift, Megaphone, Footprints, Heart, Search } from 'lucide-react'

const programs = [
  {
    id: 1,
    title: 'Speak Out Club',
    icon: Users,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600',
    description: 'Youth education and empowerment program',
    fullDescription: 'Speak Out Club is our flagship youth education program designed to motivate and empower the next generation. Meeting regularly, members engage in discussions about HIV/AIDS awareness, stigma reduction, prevention strategies, and personal empowerment. This safe, judgment-free environment allows young people to ask questions, share experiences, and become advocates in their communities.',
    details: [
      'Regular meetings for youth aged 13-21',
      'HIV/AIDS education and awareness',
      'Peer support and mentorship',
      'Community action projects',
      'Certificate programs upon completion'
    ]
  },
  {
    id: 2,
    title: 'Community Giveaways',
    icon: Gift,
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600',
    description: 'Support programs for community members',
    fullDescription: 'Our Community Giveaway program provides essential items and services to support local residents. We organize regular events featuring free haircuts, school supplies, backpacks for students, toy drives during holidays, and turkey distributions during Thanksgiving. These giveaways demonstrate our commitment to supporting the whole community, not just those directly affected by HIV/AIDS.',
    details: [
      'Free haircuts and grooming services',
      'School supplies and backpacks',
      'Seasonal toy drives',
      'Holiday turkey distributions',
      'Back-to-school events',
      'No-questions-asked support'
    ]
  },
  {
    id: 3,
    title: 'Awareness Campaigns',
    icon: Megaphone,
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-600',
    description: 'National campaigns and stigma reduction',
    fullDescription: 'Our Awareness Campaigns tackle stigma head-on through educational initiatives, national observance programs, and social media engagement. We participate in National HIV Testing Day, World AIDS Day, and other key awareness dates. Our signature campaign "HIV is Not a Crime" works to educate the public about the realities of HIV, counter misconceptions, and promote a more compassionate society.',
    details: [
      'World AIDS Day (December 1)',
      'National HIV Testing Day (June 18)',
      '"HIV is Not a Crime" initiative',
      'Social media awareness campaigns',
      'Educational materials and resources',
      'Community partnerships'
    ]
  },
  {
    id: 4,
    title: 'Walks & Events',
    icon: Footprints,
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    accentColor: 'text-orange-600',
    description: 'Community gathering and fundraising events',
    fullDescription: 'We organize and participate in major community events that unite people in the fight against HIV/AIDS. The South Florida AIDS Walk, Zero HIV Stigma Walk, and our 5K/3K runs bring together hundreds of community members, supporters, and allies. These events raise awareness, funds for our programs, and most importantly, demonstrate the power of community solidarity.',
    details: [
      'South Florida AIDS Walk participation',
      'Zero HIV Stigma Walk',
      '5K/3K community runs',
      'Health fairs and testing events',
      'Fundraising galas and benefits',
      'Interactive community forums'
    ]
  },
  {
    id: 5,
    title: 'Resources & Support',
    icon: Heart,
    color: 'bg-pink-50',
    borderColor: 'border-pink-200',
    accentColor: 'text-pink-600',
    description: 'Information and support services',
    fullDescription: 'We provide comprehensive resources for HIV prevention, testing, and support. Our organization connects people with testing centers, treatment options, mental health services, and support groups. We maintain an updated resource library with information about U=U, prevention methods, medication assistance programs, and support services for those living with HIV.',
    details: [
      'HIV testing location information',
      'Prevention resources and guides',
      'U=U (Undetectable = Untransmittable) info',
      'Treatment and care resources',
      'Mental health support services',
      'Referral services and partnerships'
    ]
  }
]

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null)

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-95">
              Empowering communities through education, support, and action
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {programs.map((program) => {
                const Icon = program.icon
                const isSelected = selectedProgram?.id === program.id
                return (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(isSelected ? null : program)}
                    className={`text-left p-6 rounded-lg border-2 transition-all transform cursor-pointer ${
                      isSelected
                        ? `bg-primary text-white border-primary scale-105 shadow-lg`
                        : `bg-white border-gray-200 text-foreground hover:border-primary hover:shadow-md`
                    }`}
                  >
                    <Icon className={`w-10 h-10 mb-3 ${isSelected ? 'text-white' : program.accentColor}`} />
                    <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-foreground'}`}>{program.title}</h3>
                    <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-foreground'}`}>{program.description}</p>
                  </button>
                )
              })}
            </div>

            {/* Selected Program Details */}
            {selectedProgram && (
              <div className="bg-white border-2 border-secondary p-8 rounded-lg animate-fade-in">
                <div className="flex items-start gap-4 mb-6">
                  {selectedProgram.icon && <selectedProgram.icon className={`w-12 h-12 text-primary flex-shrink-0`} />}
                  <div>
                    <h2 className="text-3xl font-bold text-primary">{selectedProgram.title}</h2>
                    <p className="text-foreground mt-2">{selectedProgram.fullDescription}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Program Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProgram.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary mb-4">
                      <h3 className="font-bold text-primary mb-3">Get Involved</h3>
                      <p className="text-foreground text-sm mb-4">
                        Interested in participating in this program? We'd love to have you join us!
                      </p>
                      <button className="w-full px-4 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                        Join This Program
                      </button>
                    </div>

                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 bg-secondary text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border-2 border-secondary hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground font-semibold">Youth Educated</p>
                <p className="text-xs text-muted-foreground mt-2">Through our programs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border-2 border-secondary hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-foreground font-semibold">Events Hosted</p>
                <p className="text-xs text-muted-foreground mt-2">Community gatherings</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border-2 border-secondary hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-foreground font-semibold">Items Given</p>
                <p className="text-xs text-muted-foreground mt-2">In community giveaways</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border-2 border-secondary hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold">Inclusive</p>
                <p className="text-xs text-muted-foreground mt-2">All welcome, no judgment</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
