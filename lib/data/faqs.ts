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
    question: 'What should I expect on my first visit to Resolution Wellness?',
    answer:
      "Your initial New Beginnings Wellness Assessment includes a comprehensive health history review and thorough physical examination to understand your wellness goals for 2025. We'll discuss your health objectives and create a personalized treatment plan designed for lasting results. The first visit typically lasts 60 minutes to ensure we understand your needs completely. Resolution Maintenance Sessions are 30 minutes of focused, therapeutic care.",
  },
  {
    id: 'medical-aid',
    question: 'Do you accept insurance?',
    answer:
      'Yes! We accept most major insurance plans and work with your provider to maximize your benefits. We process claims on your behalf to simplify the financial aspect of your care. You settle your bill after your session and we\'ll submit the claim to your insurance company for reimbursement.',
  },
  {
    id: 'painful',
    question: 'Is chiropractic treatment painful?',
    answer:
      "Not at all! Our treatments are gentle and therapeutic. You may feel slight pressure or hear a popping sound during adjustments, but our techniques are designed to relieve pain, not cause it. We adapt our methods to each patient's comfort level and always communicate what to expect throughout your visit.",
  },
  {
    id: 'sessions',
    question: 'How many sessions will I need to achieve my wellness goals?',
    answer:
      "The number of sessions varies depending on your condition, its severity, and your wellness objectives. After your initial assessment, we'll provide a treatment plan with an estimated timeline. Most patients experience significant improvement within 2-4 weeks, though chronic conditions may require ongoing care to maintain optimal results.",
  },
  {
    id: 'pregnancy',
    question: 'Is chiropractic care safe for expecting mothers?',
    answer:
      'Absolutely! Chiropractic care is safe and beneficial during pregnancy. We use specialized techniques designed for expecting mothers to help manage discomfort, maintain proper pelvic alignment, and support easier delivery. Many women find relief from pregnancy-related back pain through our gentle, evidence-based care.',
  },
  {
    id: 'children',
    question: 'Can children receive chiropractic treatment?',
    answer:
      'Yes! Children can benefit greatly from chiropractic care. We use gentle, age-appropriate techniques to address issues like growing pains, sports injuries, and posture problems from heavy backpacks or prolonged screen time. Our pediatric care supports healthy development and optimal wellness throughout their formative years.',
  },
  {
    id: 'appointment',
    question: 'How do I book an appointment?',
    answer:
      'You can book an appointment through our convenient online booking system, call us directly at (555) 2025-NEW, or email us at info@resolutionwellness.com. We offer flexible scheduling with appointments available 7 days a week to accommodate your busy lifestyle and help you achieve your 2025 wellness resolutions.',
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear to my appointment?',
    answer:
      'Wear comfortable, loose-fitting clothing that allows for movement. Athletic wear or casual clothes work perfectly. Avoid restrictive clothing like tight jeans or formal attire if possible, as you may need to perform certain movements during the examination and treatment.',
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
