export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Resolution Wellness',
  description:
    "Dr. Alexander Sterling is a dedicated wellness practitioner committed to helping you achieve transformative health in 2025. With over 15 years of experience in chiropractic care and a doctorate from Palmer College of Chiropractic earned with highest honors, our team provides comprehensive, evidence-based care to individuals and families of all ages.",
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  imageAlt: 'Modern wellness center with elegant New Year celebration ambiance',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Dr. Sterling & The Resolution Team',
  paragraphs: [
    "Dr. Alexander Sterling is a dedicated wellness practitioner committed to helping you achieve transformative health in 2025. With over 15 years of experience in chiropractic care and a doctorate from Palmer College of Chiropractic earned with highest honors, our practice provides comprehensive, evidence-based care to individuals and families of all ages.",
    'Specializing in sports rehabilitation and family wellness, Dr. Sterling combines cutting-edge techniques with a compassionate, patient-centered approach to address a wide range of conditions, from chronic pain and sports injuries to posture correction and preventative care.',
    'At Resolution Wellness Center, every patient receives personalized attention and a customized treatment plan designed to support their unique health journey and help them achieve lasting results. We believe in empowering our patients with the tools and knowledge they need to maintain optimal wellness throughout the year and beyond!',
  ],
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  imageAlt: 'Professional modern wellness center interior with elegant design',
}
