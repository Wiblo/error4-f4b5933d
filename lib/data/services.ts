// New Year's theme icons
import { Sparkles, Star } from 'lucide-react'
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
    name: 'New Beginnings Wellness Assessment',
    description:
      'Ring in 2025 with a comprehensive wellness evaluation! Our inaugural consultation includes a thorough health assessment and personalized resolution roadmap to help you achieve your wellness goals this year.',
    duration: '60 min',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    imageAlt: 'Modern wellness consultation in elegant setting with New Year celebration theme',
    icon: Sparkles,
    benefits: [
      'Complete health and wellness assessment',
      'Advanced postural analysis',
      'Personalized 2025 wellness plan',
      'First treatment session included',
    ],
    featured: true,
    shortDescription:
      'Start your journey to a healthier, pain-free 2025',
    fullDescription:
      'During your New Beginnings Wellness Assessment, our expert team conducts a thorough evaluation of your health history, current concerns, and 2025 wellness goals. This includes a comprehensive physical examination, advanced postural analysis, and movement assessment.\n\nUsing state-of-the-art diagnostic techniques, we identify the root causes of your discomfort and develop a personalized treatment plan designed to help you achieve lasting results. Your first therapeutic session is included during this visit to jumpstart your wellness journey!',
    idealFor: [
      'New patients ready for transformation',
      'Those with chronic pain seeking relief',
      'Athletes optimizing performance',
      'Desk workers with posture issues',
      'Preventative wellness care',
      'Anyone committed to their 2025 goals',
    ],
  },
  {
    id: 'follow-up',
    slug: 'follow-up-consultation',
    name: 'Resolution Maintenance Session',
    description:
      'Stay on track with your 2025 wellness goals! Our ongoing sessions monitor your progress, refine your treatment plan, and provide targeted therapeutic interventions to ensure lasting results.',
    duration: '30 min',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&q=80',
    imageAlt: 'Professional ongoing wellness treatment in modern elegant clinic',
    icon: Star,
    benefits: [
      'Progress tracking and assessment',
      'Treatment plan optimization',
      'Advanced therapeutic techniques',
      'Personalized home care guidance',
    ],
    featured: true,
    shortDescription:
      'Ongoing care to maintain your wellness momentum throughout 2025',
    fullDescription:
      'Resolution Maintenance Sessions are essential for sustaining your wellness progress and ensuring you achieve your 2025 health goals. Each session includes a detailed reassessment of your condition, targeted therapeutic adjustments, and complementary therapies as needed.\n\nOur expert team refines your treatment plan based on your response to care, ensuring you continue progressing toward optimal health. These appointments also include guidance on corrective exercises, lifestyle modifications, and self-care strategies to maximize results between visits.',
    idealFor: [
      'Ongoing treatment and care',
      'Maintaining optimal wellness',
      'Chronic pain management',
      'Performance enhancement',
      'Long-term health optimization',
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
