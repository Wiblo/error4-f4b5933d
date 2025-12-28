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
  title: 'About Santa\'s Workshop',
  description:
    "Head Elf Claus is a dedicated wellness practitioner committed to helping everyone achieve a merry life through North Pole-approved healthcare. With centuries of experience spreading holiday cheer and a degree from the University of Christmas Magic earned with distinction, our team provides holistic, festive care to elves, reindeer, and humans of all ages.",
  image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
  imageAlt: 'Festive Christmas wellness environment with holiday decorations',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Head Elf Claus & The Workshop Team',
  paragraphs: [
    "Head Elf Claus is a dedicated wellness practitioner committed to helping everyone achieve a merry life through North Pole-approved healthcare. With centuries of experience spreading holiday cheer and a degree from the University of Christmas Magic earned with distinction, our workshop provides holistic, festive care to elves, reindeer, and humans of all ages.",
    'Specializing in holiday wellness and family care, Head Elf Claus combines traditional North Pole techniques with a compassionate approach to address a wide range of conditions, from gift-wrapping fatigue to chronic Grinch syndrome and even reindeer flight injuries.',
    'At Santa\'s Workshop Wellness, every patient receives personalized attention and a customized treatment plan designed to support their unique healing journey and keep them on the nice list year-round. We believe in spreading wellness joy throughout all seasons, not just Christmas!',
  ],
  image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
  imageAlt: 'Festive Christmas wellness center interior with warm lighting',
}
