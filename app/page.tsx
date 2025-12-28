import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"
import { businessInfo } from "@/lib/data/business-info"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Head Elf Claus & The Workshop Team"
        title="Holiday Wellness & Festive Family Care"
        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1600&q=80"
        backgroundImageAlt="Magical Christmas scene with warm lights and festive decorations"
        ctaText="Book Your Christmas Wellness Visit"
        ctaUrl={businessInfo.bookingUrl}
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
