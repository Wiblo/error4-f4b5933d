export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'first-visit',
    question: 'What should I expect on my first visit to Santa\'s Workshop?',
    answer:
      "Your initial Christmas Wellness Check-Up includes a jolly history taking and festive physical examination to determine if you're on the nice list! We'll discuss your holiday health goals and create a personalized treatment plan sprinkled with North Pole magic. The first visit typically lasts 60 minutes to ensure Santa's helpers understand your needs completely. Ho-Ho-Holistic follow-ups are 30 minutes of pure holiday cheer.",
  },
  {
    id: 'medical-aid',
    question: 'Do you accept candy canes as payment?',
    answer:
      'While we love candy canes, we accept most major payment methods and work with insurance elves! We process claims on your behalf to make sure you stay on the nice list financially. You settle your bill after your session and we\'ll submit the claim to your insurance reindeer.',
  },
  {
    id: 'painful',
    question: 'Is holiday wellness treatment painful?',
    answer:
      "Not at all! Our treatments are as gentle as fresh snowfall. You may feel slight pressure or hear a jingle bell sound during adjustments, but our treatments are designed to relieve stress, not cause it. We adapt our festive techniques to each patient's comfort level and always keep the holiday spirit bright throughout your visit.",
  },
  {
    id: 'sessions',
    question: 'How many sessions will I need to stay on the nice list?',
    answer:
      "The number of sessions varies depending on your holiday stress level, its severity, and your wellness wishes. After your initial assessment, we'll provide a treatment plan with an estimated timeline. Most patients feel merrier within 2-4 sessions, though chronic Grinch-like symptoms may require ongoing seasonal care.",
  },
  {
    id: 'pregnancy',
    question: 'Is Christmas wellness care safe for expecting mothers?',
    answer:
      'Absolutely! Holiday wellness is safe and beneficial during pregnancy. We use specialized North Pole-approved techniques designed for expecting mothers to help manage discomfort and ensure proper alignment for easier delivery. Many women find relief from pregnancy-related stress through our gentle, festive care. Perfect for mothers expecting their own little elves!',
  },
  {
    id: 'children',
    question: 'Can little elves receive wellness treatment?',
    answer:
      'Ho ho ho, yes! Children can benefit greatly from our holiday wellness care. We use gentle, age-appropriate techniques to address issues like growing pains from being good all year, toy-related injuries, and posture problems from writing letters to Santa. Our pediatric care supports healthy development and keeps them on the nice list year-round.',
  },
  {
    id: 'appointment',
    question: 'How do I book an appointment at the North Pole?',
    answer:
      'You can book an appointment through our magical online booking system, call Santa\'s direct line at (555) NORTH-POLE, or send a letter to santa@northpolewellness.com. We offer flexible scheduling with appointments available 6 days a week (Sundays reserved for Christmas prep!) to accommodate your busy holiday schedule.',
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear to my appointment?',
    answer:
      'Wear comfortable, festive clothing that allows for movement. Think cozy sweaters, not restrictive holiday party attire! Ugly Christmas sweaters are always welcome and encouraged. Avoid formal dresses or suits if possible, as you may need to perform certain movements during the examination. Elf hats optional but appreciated!',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
