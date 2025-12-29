export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Transformative Wellness Solutions',
    description:
      'Our innovative approach combines evidence-based wellness techniques with personalized treatment plans designed to help you achieve your 2025 health goals. We focus on long-term results rather than temporary fixes, helping you achieve lasting wellness that transforms your life.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    imageAlt: 'Modern wellness center with elegant gold and midnight blue ambiance',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'State-of-the-Art Technology',
    description:
      'We utilize the most advanced chiropractic techniques and state-of-the-art diagnostic equipment to provide effective, gentle care. Our methods are continuously updated to incorporate the latest research in sports medicine and rehabilitative wellness.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Professional modern treatment room with advanced wellness equipment',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Your Personalized Resolution Plan',
    description:
      'Every patient receives a customized treatment plan tailored to their unique health goals, lifestyle, and wellness objectives. We take the time to understand your specific needs and create a comprehensive roadmap to help you achieve optimal health and lasting vitality.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80',
    imageAlt: 'Elegant celebration planning with gold accents and champagne',
    imagePosition: 'right',
  },
]
