'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ProgramsCarousel from '@/components/home/ProgramsCarousel'
import EventsSection from '@/components/home/EventsSection'
import ImpactSection from '@/components/home/ImpactSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <AboutSection />
        <ProgramsCarousel />
        <EventsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
