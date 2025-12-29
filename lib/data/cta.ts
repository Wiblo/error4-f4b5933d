export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Ready to Get on the Nice List?',
  description:
    'Experience comprehensive holiday wellness care tailored to your unique festive needs. Head Elf Claus and the workshop team are here to help you achieve optimal health and merriment all year long!',
  ctaText: 'Book Your Christmas Wellness Visit',
  ctaUrl: 'https://santasworkshopwellness.com/book',
  backgroundImage: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
  backgroundImageAlt: 'Cozy Christmas scene with warm lights and festive decorations',
}
