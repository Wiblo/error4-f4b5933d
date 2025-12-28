export const businessInfo = {
  // Core business details
  name: "Santa's Workshop Wellness",
  tagline: "Spreading Holiday Cheer and Wellness All Year",
  logo: "/logo.svg",

  // Contact information
  phone: "(555) NORTH-POLE",
  phoneSecondary: "(555) HO-HO-HO", // Optional second phone number
  email: "santa@northpolewellness.com",

  // Location
  address: {
    street: "1 Candy Cane Lane",
    area: "Workshop District", // Optional (e.g., "Building Name" or "Suite 100")
    city: "North Pole",
    state: "AK",
    zip: "99705",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 64.7511,
    longitude: -147.3494,
  },

  // Business hours
  hours: {
    monday: "8:00am - 8:00pm",
    tuesday: "8:00am - 8:00pm",
    wednesday: "8:00am - 8:00pm",
    thursday: "8:00am - 8:00pm",
    friday: "8:00am - 9:00pm",
    saturday: "9:00am - 6:00pm",
    sunday: "Christmas Prep Day",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/santasworkshopwellness",
    instagram: "https://instagram.com/northpolewellness",
    whatsapp: "https://wa.me/1234567890", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://santasworkshopwellness.com",
  description: "Bringing the magic of Christmas wellness to help everyone stay on the nice list with holistic care and holiday spirit.",
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
  bookingUrl: "https://santasworkshopwellness.com/book",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Santa's Workshop Wellness Center",
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
