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
  title: 'Ready to Make 2025 Your Healthiest Year Yet?',
  description:
    'Experience comprehensive wellness care tailored to your unique health goals. Dr. Sterling and the Resolution team are here to help you achieve optimal health and lasting vitality throughout 2025 and beyond!',
  ctaText: 'Begin Your Wellness Journey',
  ctaUrl: 'https://resolutionwellness.com/book',
  backgroundImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
  backgroundImageAlt: 'Elegant New Year celebration with golden lights and modern ambiance',
}
