'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Mission</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering communities through education, awareness, and stigma reduction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Stat Card 1 */}
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-primary mb-2">2022</div>
            <p className="text-muted-foreground font-semibold">Active Since Registration</p>
            <p className="text-sm text-gray-500 mt-2">Florida-registered 501(c)(3)</p>
          </div>

          {/* Stat Card 2 */}
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground font-semibold">Community Members</p>
            <p className="text-sm text-gray-500 mt-2">Impacted through events & programs</p>
          </div>

          {/* Stat Card 3 */}
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground font-semibold">Inclusive Organization</p>
            <p className="text-sm text-gray-500 mt-2">For all ages, races, genders, backgrounds</p>
          </div>
        </div>

        {/* Image and Mission Statement */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about-organization.jpg"
              alt="BE A CHAMPION organization team collaborating"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-4">About BE A CHAMPION</h3>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Founded by Melvin K. Wright, BE A CHAMPION FOR AIDS-HIV INC is a Florida-registered 501(c)(3) nonprofit organization dedicated to combating HIV/AIDS stigma and promoting awareness, education, and community empowerment.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Our organization is committed to inclusivity and service to all members of the community, regardless of age, race, gender, or background. We believe in education, empowerment, and unity as the foundation for ending stigma and improving lives.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through youth-focused programs like Speak Out Club, community giveaways, awareness campaigns, and participation in regional awareness walks, we're building a community where everyone is valued, supported, and empowered.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
