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
    title: 'Magical Holiday Healing',
    description:
      'Our enchanted approach combines time-honored wellness traditions with personalized holiday treatment plans designed to keep you jolly and bright. We focus on long-term merriment rather than temporary cheer, helping you achieve lasting wellness that lasts beyond the twelve days of Christmas.',
    image: 'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=800&q=80',
    imageAlt: 'Festive Christmas wellness with red ornaments and decorations',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'North Pole Approved Methods',
    description:
      'We utilize the most festive wellness techniques straight from Santa\'s workshop and North Pole-certified equipment to provide effective, gentle care. Our methods are continuously blessed by holiday spirits to incorporate the most joyful research in seasonal wellness.',
    image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&q=80',
    imageAlt: 'Cozy Christmas workspace with hot cocoa and festive decor',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Your Personal Wellness Wish List',
    description:
      'Every patient receives a customized treatment plan tailored to their unique holiday needs, lifestyle, and wellness wishes. We take the time to understand what keeps you off the naughty list and create a merry roadmap to help you achieve optimal health and holiday happiness.',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&q=80',
    imageAlt: 'Festive Christmas gift with red ribbon and ornaments',
    imagePosition: 'right',
  },
]
