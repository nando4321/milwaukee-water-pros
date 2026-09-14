export type ServiceArea = {
  slug: string;
  name: string;
  navTitle: string;
  heroTitle: string;
  intro: string;
  cities: string[];
  highlights: { title: string; body: string }[];
  why: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  findUs: string;
};

export const areas: ServiceArea[] = [
  {
    slug: "milwaukee-county",
    name: "Milwaukee County",
    navTitle: "Milwaukee County, WI",
    heroTitle: "Water Filtration & Treatment Throughout Milwaukee County",
    intro:
      "Milwaukee Water Pros provides dependable water filtration and treatment across Milwaukee County for homes, rentals, and light commercial properties. From helping customers compare filter types to matching systems with water concerns, we make the selection process clearer for property owners who want cleaner water without guesswork.",
    cities: [
      "Milwaukee",
      "West Allis",
      "Wauwatosa",
      "Greenfield",
      "Franklin",
      "Oak Creek",
      "South Milwaukee",
      "Cudahy",
      "St. Francis",
      "Shorewood",
      "Whitefish Bay",
      "Glendale",
      "Brown Deer",
      "Fox Point",
      "Greendale",
      "Hales Corners",
      "Bayside",
      "West Milwaukee",
    ],
    highlights: [
      {
        title: "Practical product guidance",
        body: "We help customers sort through sediment filters, carbon systems, reverse osmosis, and whole-home options based on actual water concerns — such as chlorine taste at the kitchen sink — instead of generic recommendations.",
      },
      {
        title: "Smoother selection for city properties",
        body: "Whether the need involves a Milwaukee bungalow, a North Shore rental turnover, or a small mixed-use space, clear explanations and straightforward next steps help you move from research to a workable decision.",
      },
      {
        title: "Dependable support for real needs",
        body: "We are a consistent point of contact for recurring concerns like odor, taste, or visible sediment in Milwaukee County homes that rely on municipal water every day.",
      },
    ],
    why: [
      {
        title: "City water still deserves a second look at home",
        body: "Municipal supply is treated before it reaches the meter, but older interior pipes, chlorine residual, and household plumbing can still affect taste, odor, and sediment at the tap.",
      },
      {
        title: "Neighborhood housing stock varies widely",
        body: "Cream City brick bungalows, postwar ranches, and newer infill homes can have very different plumbing layouts. Treatment should match the house, not a generic city-wide assumption.",
      },
      {
        title: "Turnover and hosting put water quality on display",
        body: "Guests, tenants, and buyers notice water taste quickly. Filtration planning helps properties feel ready for everyday use.",
      },
    ],
    faqs: [
      {
        q: "What do you usually recommend for older Milwaukee homes with taste or odor issues?",
        a: "Recommendations depend on the source of the problem, such as chlorine, sediment, or aging interior pipes. We help older-home owners compare practical filtration options based on household concerns and how water is used at sinks, showers, and refrigerators.",
      },
      {
        q: "Do you work with rental properties in Milwaukee County?",
        a: "Yes. Rental properties often benefit from filtration planning before new tenants move in or when recurring water complaints appear. We work with landlords and property managers on timing, replacement needs, and suitable system options.",
      },
      {
        q: "Can you help with filtration for a small office or mixed-use building?",
        a: "Yes. We can help identify systems for drinking water points, break rooms, and light commercial needs in smaller buildings, matched to daily usage and maintenance expectations.",
      },
    ],
    findUs:
      "Milwaukee Water Pros supports customers throughout Milwaukee County with practical guidance on water filtration for residential and light commercial needs — from downtown and the East Side to Wauwatosa, West Allis, Oak Creek, and the North Shore.",
  },
  {
    slug: "waukesha-county",
    name: "Waukesha County",
    navTitle: "Waukesha County, WI",
    heroTitle: "Water Filtration & Treatment Across Waukesha County",
    intro:
      "Milwaukee Water Pros serves Waukesha County homeowners who want clearer guidance on hard water, municipal taste and odor, and whole-home treatment. Our Brookfield office is in the county, and we install filtration, softening, and drinking-water systems for households from New Berlin to Oconomowoc.",
    cities: [
      "Waukesha",
      "Brookfield",
      "New Berlin",
      "Menomonee Falls",
      "Muskego",
      "Pewaukee",
      "Oconomowoc",
      "Hartland",
      "Delafield",
      "Sussex",
      "Mukwonago",
      "Elm Grove",
      "Butler",
      "Lisbon",
    ],
    highlights: [
      {
        title: "Hard water guidance that is specific, not generic",
        body: "Many Waukesha County homes notice scale, spots, and soap residue. We help you decide whether a softener, carbon filtration, reverse osmosis, or a combined approach fits the property.",
      },
      {
        title: "Suburban layouts and utility rooms",
        body: "Newer subdivisions and established neighborhoods can have very different mechanical rooms. We plan equipment around available space, drain access, and household demand.",
      },
      {
        title: "An office nearby, service across the county",
        body: "Our office is at 205 Bishops Way #3 in Brookfield. Market messaging leads with Greater Milwaukee, and we regularly serve homes throughout Waukesha County — not only Brookfield.",
      },
    ],
    why: [
      {
        title: "Mineral content is a frequent household complaint",
        body: "Hardness can leave film on fixtures, stiff laundry, and extra wear on water heaters. Softening is often part of a complete treatment plan in this county.",
      },
      {
        title: "City and well properties both appear here",
        body: "Some homes are on municipal supply; others on private wells at the county’s edges. Treatment should follow the actual source water, not a single suburban template.",
      },
      {
        title: "Family homes run a lot of water",
        body: "Multiple bathrooms, busy laundry days, and kitchen use all day make consistent water quality a practical convenience, not a luxury.",
      },
    ],
    faqs: [
      {
        q: "Do you only serve Brookfield because the office is there?",
        a: "No. The Brookfield address is our office. We serve Greater Milwaukee, including communities across Waukesha County such as Waukesha, New Berlin, Menomonee Falls, Pewaukee, and Oconomowoc.",
      },
      {
        q: "Is a water softener the only system Waukesha County homes need?",
        a: "Not always. Softening addresses hardness, while carbon filtration and reverse osmosis target taste, odor, and drinking-water quality. We recommend based on your water and goals.",
      },
      {
        q: "Can you treat a home that is on well water in Waukesha County?",
        a: "Yes. Private well properties may need iron, odor, sediment, or hardness treatment. We review source-water concerns before recommending equipment.",
      },
    ],
    findUs:
      "Milwaukee Water Pros supports Waukesha County from our Brookfield office while serving homes county-wide. Whether you are in a New Berlin ranch, a Pewaukee family home, or a property near Oconomowoc, we help match filtration and treatment to everyday water use.",
  },
  {
    slug: "ozaukee-county",
    name: "Ozaukee County",
    navTitle: "Ozaukee County, WI",
    heroTitle: "Water Filtration & Treatment in Ozaukee County",
    intro:
      "Milwaukee Water Pros provides water filtration and treatment for Ozaukee County homes — from Mequon and Cedarburg to Grafton and Port Washington. We help homeowners compare whole-home filtration, reverse osmosis, softeners, carbon systems, and well treatment based on how water is actually used.",
    cities: [
      "Mequon",
      "Cedarburg",
      "Grafton",
      "Port Washington",
      "Thiensville",
      "Saukville",
      "Fredonia",
      "Belgium",
    ],
    highlights: [
      {
        title: "Village, lakefront, and rural-edge properties",
        body: "Ozaukee County includes municipal homes and private wells. We match treatment to the source — city water taste and odor concerns, or well issues such as iron, sulfur, and sediment.",
      },
      {
        title: "Clear recommendations for larger lots and family homes",
        body: "Many Ozaukee properties have multiple bathrooms and higher water demand. We plan equipment around plumbing access, pressure, and household routines.",
      },
      {
        title: "No-pressure process from review to install",
        body: "We discuss water concerns, explain options, and install with care so you can enjoy better water with confidence — without a high-pressure sales pitch.",
      },
    ],
    why: [
      {
        title: "Source water is not the same in every township",
        body: "A Mequon home on city water and a Fredonia property on a private well can need completely different equipment. Local treatment should follow the well or the municipal tap in front of you.",
      },
      {
        title: "Iron, odor, and hardness are common well conversations",
        body: "Staining, sulfur smell, and mineral scale are practical reasons to treat well water before they affect laundry, fixtures, and appliances.",
      },
      {
        title: "Lakefront and village homes still care about taste",
        body: "Even on city water, chlorine taste and odor can show up in kitchens and showers. Carbon filtration and reverse osmosis remain popular upgrades.",
      },
    ],
    faqs: [
      {
        q: "Do you install well water treatment in Ozaukee County?",
        a: "Yes. We treat private well concerns such as iron, sulfur odor, sediment, staining, and hardness with systems selected for the property’s source water.",
      },
      {
        q: "Can you service Mequon, Cedarburg, and Port Washington?",
        a: "Yes. Ozaukee County is part of our core service area, including Mequon, Thiensville, Cedarburg, Grafton, Port Washington, Saukville, Fredonia, and Belgium.",
      },
      {
        q: "Is whole-home filtration useful if we only notice a kitchen taste issue?",
        a: "Sometimes a dedicated reverse osmosis tap is the better first step. If taste, odor, or sediment appear at multiple fixtures, whole-home treatment may be the more complete solution. We help you compare both.",
      },
    ],
    findUs:
      "Milwaukee Water Pros serves Ozaukee County households from Mequon and Cedarburg to Grafton and Port Washington with filtration, softening, reverse osmosis, and well water treatment matched to local source-water conditions.",
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function areaPath(slug: string) {
  return `/service-areas/${slug}`;
}
