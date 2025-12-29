export const businessInfo = {
  // Core business details
  name: "Resolution Wellness Center",
  tagline: "New Year, New You - Start 2025 Pain-Free",
  logo: "/uploads/33ef87d8-f7ea-460e-a37f-eefd6c29d7da.png",

  // Contact information
  phone: "(555) 2025-NEW",
  phoneSecondary: "(555) WELLNESS", // Optional second phone number
  email: "info@resolutionwellness.com",

  // Location
  address: {
    street: "2025 Celebration Boulevard",
    area: "Renewal District", // Optional (e.g., "Building Name" or "Suite 100")
    city: "New Hope",
    state: "NY",
    zip: "10001",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 40.7589,
    longitude: -73.9851,
  },

  // Business hours
  hours: {
    monday: "7:00am - 9:00pm",
    tuesday: "7:00am - 9:00pm",
    wednesday: "7:00am - 9:00pm",
    thursday: "7:00am - 9:00pm",
    friday: "7:00am - 10:00pm",
    saturday: "8:00am - 8:00pm",
    sunday: "9:00am - 6:00pm",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/resolutionwellness",
    instagram: "https://instagram.com/resolutionwellness2025",
    whatsapp: "https://wa.me/1234567890", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://resolutionwellness.com",
  description: "Begin your 2025 wellness journey with expert chiropractic care. Turn your New Year's resolutions into reality with personalized treatment plans and holistic healing.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Customize based on your business type. Common combinations:
  // - Chiropractor: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Physical Therapist: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Massage Spa: ['LocalBusiness', 'HealthAndBeautyBusiness', 'DaySpa']
  // - General Wellness: ['LocalBusiness', 'HealthAndBeautyBusiness']
  // - Acupuncture: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  schemaTypes: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'] as const,

  // Booking/appointment URL
  bookingUrl: "https://resolutionwellness.com/book",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Resolution Wellness Center",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
