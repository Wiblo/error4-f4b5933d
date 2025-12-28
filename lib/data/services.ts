import { Gift, Snowflake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the practice
 * Update this array to add/modify services shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'initial-consultation',
    slug: 'initial-consultation',
    name: 'Christmas Wellness Check-Up',
    description:
      'Get on Santa\'s nice list with a comprehensive wellness assessment! Our festive first visit includes a joyful health evaluation and personalized holiday healing plan to keep you merry and bright all season long.',
    duration: '60 min',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
    imageAlt: 'Festive Christmas wellness consultation with holiday decorations',
    icon: Gift,
    benefits: [
      'Complete holiday health assessment',
      'Candy cane posture check',
      'Personalized wellness wish list',
      'First treatment if you\'ve been nice',
    ],
    featured: true,
    shortDescription:
      'Start your journey to a merry and healthy holiday season',
    fullDescription:
      'During your Christmas Wellness Check-Up, our team of jolly wellness elves conducts a thorough evaluation of your health history, current concerns, and holiday wellness goals. This includes a festive physical examination, candy cane posture analysis, and jingle bell movement assessment.\n\nUsing North Pole-approved diagnostic techniques, we identify what\'s keeping you from being your merriest self and develop a personalized treatment plan sprinkled with holiday magic. If you\'ve been nice, your first therapeutic session may be included during this visit!',
    idealFor: [
      'New patients seeking holiday wellness',
      'Stressed shoppers needing relief',
      'Cookie baking posture issues',
      'Tree decorating strains',
      'Preventative holiday care',
      'Staying on the nice list',
    ],
  },
  {
    id: 'follow-up',
    slug: 'follow-up-consultation',
    name: 'Ho-Ho-Holistic Follow-Up',
    description:
      'Keep the holiday spirit flowing with continued wellness sessions! Monitor your progress, adjust your treatment sleigh, and receive therapeutic interventions to keep you jingling all the way.',
    duration: '30 min',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80',
    imageAlt: 'Cozy Christmas wellness session with festive ambiance',
    icon: Snowflake,
    benefits: [
      'Progress evaluation by Santa\'s helpers',
      'Treatment plan adjustments',
      'Festive therapeutic interventions',
      'Home care tips for the holidays',
    ],
    featured: true,
    shortDescription:
      'Ongoing care to keep you merry throughout the holiday season',
    fullDescription:
      'Ho-Ho-Holistic Follow-Up sessions are essential for maintaining your holiday wellness and ensuring you stay joyful all season long. Each session includes a cheerful reassessment of your condition, targeted therapeutic adjustments, and complementary holiday therapies as needed.\n\nOur wellness elves adjust your treatment plan based on your response to care, ensuring you continue progressing toward your merriest self. These appointments also include guidance on festive exercises, holiday lifestyle tips, and self-care strategies to keep your spirits bright between visits.',
    idealFor: [
      'Ongoing holiday treatment',
      'Maintaining seasonal wellness',
      'Recovery from gift wrapping',
      'Managing holiday stress',
      'Performance optimization for caroling',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
