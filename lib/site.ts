export const site = {
  name: "Milwaukee Water Pros",
  shortName: "MWP",
  url: "https://milwaukeewaterpros.co",
  tagline: "Cleaner water for Greater Milwaukee homes",
  description:
    "Professional whole-home water filtration, reverse osmosis drinking water, water softeners, carbon filtration, well water treatment, and city water treatment for Milwaukee, Waukesha, and Ozaukee counties.",
  phoneLabel: "Phone coming soon",
  address: {
    line1: "205 Bishops Way #3",
    city: "Brookfield",
    state: "WI",
    zip: "53005",
    full: "205 Bishops Way #3, Brookfield, WI 53005",
  },
  officeNote: "Office in Brookfield — we serve Greater Milwaukee",
  market: "Greater Milwaukee",
  counties: ["Milwaukee County", "Waukesha County", "Ozaukee County"] as const,
} as const;

export const nav = {
  process: { href: "/#process", label: "Process" },
  services: { href: "/services", label: "Services" },
  areas: { href: "/service-areas", label: "Service Areas" },
  about: { href: "/about", label: "About Us" },
  reviews: { href: "/#reviews", label: "Reviews" },
  contact: { href: "/contact", label: "Get A Free Consultation" },
} as const;

export const serviceOptions = [
  "Whole-Home Water Filtration",
  "Reverse Osmosis Drinking Water",
  "Water Softener Systems",
  "Carbon Filtration Systems",
  "Well Water Treatment Systems",
  "City Water Treatment Systems",
] as const;
