// Single source of truth for brand identity.
// Change these values and the whole site updates.
//
// Working name: Ada — Turkish for "island", honors Ada Lovelace, the first
// programmer. Single syllable, ownable, scales to apparel, retail, and beyond.
// Alternates ready to swap: Anatolia, Bosphorus, Pera, Levent, Kara, Mythra.

export const brand = {
  name: "Ada",
  longName: "Ada House",
  tagline: "Engineered to win.",
  promise:
    "We build the operating systems behind ambitious companies. From courtrooms to checkout pages to clinics, our work pays for itself in measurable revenue.",
  domain: "adahouse.co",
  email: "studio@adahouse.co",
  location: "Istanbul · Operating worldwide",
  founded: 2026,
  origin:
    "Ada means island in Turkish and honors Ada Lovelace, the first programmer. It is a quiet name for a house that intends to be loud about results.",
  proof: {
    legalRevenue: "+50%",
    commerceTraffic: "+30%",
    healthEfficiency: "+38%",
  },
  social: {
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
  },
};

export type Brand = typeof brand;
