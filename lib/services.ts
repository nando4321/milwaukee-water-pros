export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  heroTitle: string;
  short: string;
  summary: string;
  intro: string;
  benefitsTitle: string;
  benefits: { title: string; body: string }[];
  whyTitle: string;
  why: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  findUs: string;
};

export const services: Service[] = [
  {
    slug: "whole-home-water-filtration-services",
    title: "Whole-Home Water Filtration Services",
    navTitle: "Whole-Home Water Filtration Services",
    heroTitle: "Whole-Home Water Filtration for Greater Milwaukee Homes",
    short:
      "Improve water quality throughout your entire home with filtration systems designed to reduce unwanted contaminants, odors, sediment, and common water concerns from every tap.",
    summary:
      "Point-of-entry filtration that treats water for showers, sinks, laundry, and appliances — not just the kitchen faucet.",
    intro:
      "Milwaukee Water Pros installs whole-home filtration systems for Greater Milwaukee properties that want cleaner water at every tap. Treating water at the main line helps reduce sediment, chlorine taste, odors, and other everyday water concerns in kitchens, bathrooms, laundry rooms, and throughout the house.",
    benefitsTitle:
      "Choose Milwaukee Water Pros for Whole-Home Filtration Built Around How You Use Water",
    benefits: [
      {
        title: "Thoughtful water treatment planning",
        body: "We review your water source, plumbing layout, and household concerns before recommending equipment. That detail-focused process helps avoid oversized or mismatched systems — whether you are dealing with chlorine taste on Milwaukee city water or sediment that shows up in older plumbing.",
      },
      {
        title: "Installation that respects busy households",
        body: "We plan around shutoff access, pipe configuration, and available utility space so the upgrade stays organized. For homeowners balancing work, school schedules, and property upkeep, that process-focused approach reduces disruption from start to finish.",
      },
      {
        title: "Consistent results across property types",
        body: "We install whole-home systems for Milwaukee bungalows, Waukesha County family homes, and Ozaukee properties with dedicated utility rooms or tighter mechanical spaces. The goal is dependable filtration matched to actual water use, not a one-size-fits-all kit.",
      },
    ],
    whyTitle: "Why Whole-Home Filtration Matters for Everyday Water Quality",
    why: [
      {
        title: "Local water conditions vary by neighborhood",
        body: "Municipal treatment, older interior pipes, and seasonal changes can affect how water looks, smells, or tastes across Milwaukee County. Whole-home filtration is a practical upgrade when those issues show up at more than one faucet.",
      },
      {
        title: "Untreated water affects daily living",
        body: "Chlorine odor in the shower, sediment in aerators, or off-tasting tap water makes ordinary routines less comfortable. Treating water at the point of entry supports cleaner water for bathing, cooking, laundry, and cleaning.",
      },
      {
        title: "Move-in readiness for occupied homes",
        body: "Buyers, renters, and families often notice water taste and shower comfort immediately. Having a whole-home plan in place helps kitchens, bathrooms, and laundry areas feel ready for everyday use.",
      },
    ],
    faqs: [
      {
        q: "Do older Milwaukee homes benefit more from whole-home filtration?",
        a: "Older homes may see more sediment, aging pipes, or inconsistent water quality at multiple fixtures, though newer houses can also need filtration for taste, odor, or chlorine concerns. We help compare water conditions, plumbing layouts, and household usage before selecting a system.",
      },
      {
        q: "What does a typical whole-home installation include?",
        a: "Service typically includes a water-quality review, equipment selection, installation at the main water line, and guidance on filter maintenance so treated water reaches bathrooms, kitchen fixtures, and appliances.",
      },
      {
        q: "How long does installation usually take?",
        a: "Timing depends on plumbing access and equipment type, but many residential point-of-entry projects are completed in a single visit. We evaluate utility space and connection points so you know what to expect.",
      },
    ],
    findUs:
      "Milwaukee Water Pros serves homeowners throughout Milwaukee, Waukesha, and Ozaukee counties with whole-home water filtration designed for cleaner, better-tasting water across the property. From established Milwaukee neighborhoods to newer suburban communities, we help local households improve water quality at every tap.",
  },
  {
    slug: "reverse-osmosis-drinking-water-systems",
    title: "Reverse Osmosis Drinking Water Systems",
    navTitle: "Reverse Osmosis Drinking Water Systems",
    heroTitle: "Reverse Osmosis Drinking Water Systems in Greater Milwaukee",
    short:
      "Enjoy cleaner, better-tasting drinking water with advanced reverse osmosis systems that provide high-quality water for drinking, cooking, coffee, ice, and everyday use.",
    summary:
      "Dedicated kitchen filtration for drinking, cooking, coffee, ice, and filling bottles at home.",
    intro:
      "Milwaukee Water Pros installs reverse osmosis systems for Greater Milwaukee households that want better-tasting water at the kitchen sink. A dedicated filtration tap is a convenient option for drinking, tea, coffee, baby formula, cooking, and everyday bottle filling.",
    benefitsTitle:
      "Choose Milwaukee Water Pros for Reverse Osmosis That Fits Real Kitchen Use",
    benefits: [
      {
        title: "Cleaner water for daily routines",
        body: "RO systems support better-tasting water for drinking, meal prep, and entertaining. For households trying to rely less on bottled water, a dedicated tap offers a practical option during school mornings, evening cooking, and weekend hosting.",
      },
      {
        title: "Clear, no-pressure recommendations",
        body: "We explain how reverse osmosis compares with pitcher filters or fridge dispensers, including what it can and cannot address. You get options based on kitchen layout, household size, and budget — without a hard sell.",
      },
      {
        title: "Fits townhomes and family kitchens",
        body: "Many systems can fit under-sink cabinets in Milwaukee townhomes and larger family kitchens, as long as drain placement and plumbing connections are checked first. We evaluate cabinet space, faucet options, and access before installation.",
      },
    ],
    whyTitle: "Why Reverse Osmosis Makes a Difference at the Kitchen Sink",
    why: [
      {
        title: "Drinking water is where taste matters most",
        body: "Even when whole-home filtration improves showers and laundry, many families still want a higher level of filtration for water they drink and cook with every day.",
      },
      {
        title: "A dedicated tap is easier than constant bottled water",
        body: "Filling glasses, coffee makers, and ice trays from a filtered kitchen faucet keeps daily habits simple and reduces the cost and waste of bottled water.",
      },
      {
        title: "Kitchen layout should drive the equipment choice",
        body: "Under-sink space, existing plumbing, and how the household uses the kitchen all matter. We match the system to the room you actually cook in.",
      },
    ],
    faqs: [
      {
        q: "Can reverse osmosis work in a smaller Milwaukee townhome kitchen?",
        a: "Yes, many systems can fit compact kitchens, though cabinet space, drain placement, and plumbing connections need to be checked first. We evaluate under-sink layout and faucet options so smaller kitchens can still support RO.",
      },
      {
        q: "How is reverse osmosis different from a pitcher or fridge filter?",
        a: "RO is often used to improve taste and odor while reducing many dissolved substances that basic faucet or pitcher filters may not handle as effectively. We review drinking-water complaints and recommend a setup based on kitchen use.",
      },
      {
        q: "Do I still need whole-home filtration if I install RO?",
        a: "Many homes use both. Reverse osmosis typically treats drinking and cooking water at one location, while whole-home filtration addresses showers, laundry, and other taps. We help you decide based on your goals and budget.",
      },
    ],
    findUs:
      "Milwaukee Water Pros provides reverse osmosis drinking water system installation throughout Greater Milwaukee, helping households improve water taste and convenience at the kitchen sink. From compact townhome kitchens to larger family homes, we support local property owners with practical filtration designed for everyday drinking and cooking.",
  },
  {
    slug: "well-water-treatment-systems",
    title: "Well Water Treatment Systems",
    navTitle: "Well Water Treatment Systems",
    heroTitle: "Reliable Well Water Treatment for Milwaukee-Area Properties",
    short:
      "Treat private well water concerns such as iron, sulfur odors, sediment, staining, and mineral issues with customized solutions built around your property’s water source.",
    summary:
      "Custom treatment for private wells — iron, sulfur odor, sediment, staining, and hardness.",
    intro:
      "Milwaukee Water Pros installs well water treatment systems for properties dealing with sediment, staining, odor, or mineral-related water concerns. Proper treatment helps improve everyday water quality for bathing, laundry, cooking, and appliances, while giving homeowners a more consistent experience from every tap.",
    benefitsTitle:
      "Choose Milwaukee Water Pros for Well Water Treatment Matched to Your Source",
    benefits: [
      {
        title: "Thorough water treatment planning",
        body: "We evaluate common well water concerns such as iron staining, sulfur odor, hardness, and sediment before recommending equipment. That detail-focused process helps avoid mismatched systems for homes where water issues affect fixtures, laundry, and everyday cleaning.",
      },
      {
        title: "Smoother service for busy households",
        body: "We coordinate treatment equipment around existing plumbing layouts, pressure tanks, and available utility space. For homeowners balancing work, school, and property upkeep, that process-focused approach reduces disruption.",
      },
      {
        title: "Consistent solutions for different property types",
        body: "We install well systems for rural-edge homes, larger family properties, and houses with dedicated utility rooms. Whether a household relies on frequent laundry or multiple bathrooms, we focus on treatment matched to actual water use.",
      },
    ],
    whyTitle: "Why Well Water Treatment Matters for Everyday Comfort",
    why: [
      {
        title: "Private wells vary from property to property",
        body: "Groundwater conditions, mineral content, and naturally occurring contaminants can make well water less predictable than municipal supply. Treatment often needs to address specific issues such as sediment, discoloration, odor, or hardness.",
      },
      {
        title: "Untreated well water can impact daily living",
        body: "Orange stains, sulfur smells, or scale buildup make showers less comfortable, laundry more frustrating, and dishes more likely to dry with residue. Treatment is a practical upgrade for households that want cleaner water throughout the week.",
      },
      {
        title: "Move-in readiness for well properties",
        body: "Buyers and owners preparing a home for occupancy often want confidence that the water system is usable from day one. Treating well water helps kitchens, bathrooms, and laundry areas feel ready for regular use.",
      },
    ],
    faqs: [
      {
        q: "What should buyers check before purchasing a home with a private well?",
        a: "Review water test results, treatment equipment age, maintenance history, and any signs of staining, odor, or pressure issues before closing. We can inspect existing treatment setups and help you understand whether updates may be needed.",
      },
      {
        q: "Are systems different for iron stains versus sulfur smells?",
        a: "Yes. Iron, sulfur odor, hardness, and sediment usually require different equipment or combined treatment stages. We review water conditions and recommend practical solutions based on how the property’s well water is actually used.",
      },
      {
        q: "How long does residential well treatment installation take?",
        a: "It depends on plumbing access, equipment type, and whether the setup includes multiple treatment stages. Many projects are completed within a day once utility space and connection points are confirmed.",
      },
    ],
    findUs:
      "Milwaukee Water Pros provides well water treatment system installation across Milwaukee, Waukesha, and Ozaukee counties for homes using private wells and dealing with staining, odor, hardness, or sediment. We help property owners improve household water quality with treatment tailored to everyday plumbing demands and source-water conditions.",
  },
  {
    slug: "water-softener-systems",
    title: "Water Softener Systems",
    navTitle: "Water Softener Systems",
    heroTitle: "Water Softener Systems for Greater Milwaukee Homes",
    short:
      "Reduce hard water minerals that can cause buildup on fixtures, dry skin, dull laundry, and strain on plumbing and appliances with a professionally installed water softener system.",
    summary:
      "Reduce scale, spots, and soap scum caused by hard water minerals throughout the home.",
    intro:
      "Milwaukee Water Pros installs water softener systems for homeowners dealing with hard water, scale buildup, soap residue, and appliance wear. Proper softening helps improve washing, bathing, and cleaning while reducing mineral-related stress on plumbing fixtures and water-using equipment.",
    benefitsTitle:
      "Choose Milwaukee Water Pros for Softening That Protects Plumbing and Comfort",
    benefits: [
      {
        title: "Dependable protection for plumbing and appliances",
        body: "Softeners help limit scale buildup on faucets, water heaters, and dishwashers. In homes where hard water leaves spots on glassware or crust around showerheads, we focus on reliable performance that supports cleaner fixtures and steadier long-term use.",
      },
      {
        title: "Sized for how your household actually uses water",
        body: "We look at occupancy, bathrooms, laundry habits, and available space so the system is not undersized for a busy family or oversized for a smaller home.",
      },
      {
        title: "Practical installs in tighter utility areas",
        body: "Many softening setups can fit townhomes and compact mechanical rooms, as long as plumbing access, drain options, and maintenance clearance are considered. We evaluate layout and household demand before recommending equipment.",
      },
    ],
    whyTitle: "Why Softening Matters in Greater Milwaukee Homes",
    why: [
      {
        title: "Hard water shows up in everyday chores",
        body: "Spots on glassware, soap that will not lather, stiff laundry, and film on shower doors are common signs. Softening can make bathing and cleaning more comfortable.",
      },
      {
        title: "Minerals add up on equipment",
        body: "Scale inside water heaters, dishwashers, and washing machines can reduce efficiency and shorten equipment life. Softening is a practical way to reduce that mineral stress.",
      },
      {
        title: "Suburban and well homes often feel it first",
        body: "Hardness can be noticeable in Waukesha County suburbs and on private wells. We help you decide whether softening, filtration, or a combined approach is the better fit.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need a water softener?",
        a: "If you notice hard water buildup, spots on fixtures, dry skin, or reduced appliance performance, a water softener may help reduce mineral-related issues. We review your symptoms and water source before recommending equipment.",
      },
      {
        q: "Can a softener fit a townhome utility closet?",
        a: "Often yes, as long as plumbing access, drain options, and maintenance clearance are considered. We evaluate available space and household demand to find a practical solution.",
      },
      {
        q: "Which appliances benefit most from softened water?",
        a: "Water heaters, dishwashers, washing machines, kitchen faucets, and other plumbing components affected by mineral scale and soap interaction typically see the biggest difference.",
      },
    ],
    findUs:
      "Milwaukee Water Pros provides water softener system installation throughout Greater Milwaukee for homes dealing with hard water, mineral buildup, and soap residue. From established neighborhoods to newer residential developments, we help property owners improve daily water use with softening designed around plumbing layout and household demand.",
  },
  {
    slug: "carbon-filtration-systems",
    title: "Carbon Filtration Systems",
    navTitle: "Carbon Filtration Systems",
    heroTitle: "Carbon Filtration Systems for Better-Tasting Milwaukee Water",
    short:
      "Improve taste and odor by reducing chlorine, chloramine, and other common water concerns with carbon filtration systems designed for fresher, cleaner water.",
    summary:
      "Improve taste and odor by reducing chlorine, chloramine, and related municipal water concerns.",
    intro:
      "Milwaukee Water Pros installs carbon filtration systems for properties seeking better-tasting water, reduced odors, and improved everyday water quality. Carbon-based treatment can help address chlorine-related concerns, making drinking, cooking, bathing, and cleaning more comfortable.",
    benefitsTitle:
      "Choose Milwaukee Water Pros for Carbon Filtration That Fits Daily Water Needs",
    benefits: [
      {
        title: "Thoughtful filtration planning",
        body: "We review water use patterns, plumbing layout, and common taste or odor concerns before recommending equipment. That helps match the right carbon approach to households where kitchen use, bathing habits, and whole-home goals vary from property to property.",
      },
      {
        title: "Streamlined installation for busy homes",
        body: "We schedule installation with attention to access points, shutoff locations, and existing utility space so the process stays organized and disruption stays low.",
      },
      {
        title: "Consistent performance across property types",
        body: "We install carbon systems for single-family homes, townhouses, and renovated older properties where water taste and odor affect daily comfort — from cooking with tap water to filling guest bathroom tubs.",
      },
    ],
    whyTitle: "Why Carbon Filtration Improves Everyday Water Use",
    why: [
      {
        title: "Taste and odor show up in daily habits",
        body: "When tap water has an unpleasant smell or taste, people notice it first while drinking, cooking, making coffee, or brushing teeth. Carbon filtration helps reduce common nuisance issues without changing how the household uses sinks and showers.",
      },
      {
        title: "Occupied homes need practical improvements",
        body: "Odors in showers, taste issues in the kitchen, or comments from family and guests can make treatment more important when the property is occupied full time.",
      },
      {
        title: "Greater Milwaukee households expect pleasant water",
        body: "Many homeowners want water that feels more pleasant for entertaining, meal prep, and everyday living. Carbon filtration supports those expectations by helping reduce noticeable taste and odor concerns.",
      },
    ],
    faqs: [
      {
        q: "How often should a carbon system be serviced?",
        a: "Service timing depends on water quality, filter type, and household usage. Regular inspections help maintain flow and media effectiveness. We explain maintenance intervals based on everyday water demand.",
      },
      {
        q: "Is carbon filtration useful for rental turnovers?",
        a: "Yes. It can be useful when owners want to improve water taste and reduce odor complaints before move-in, especially in properties with full-house water use.",
      },
      {
        q: "Can carbon help if kitchen water smells worse after sitting overnight?",
        a: "It often helps with common taste and odor issues, particularly when chlorine-related smells become more noticeable after water remains in household plumbing.",
      },
    ],
    findUs:
      "Milwaukee Water Pros provides carbon filtration system installation across Milwaukee, Waukesha, and Ozaukee counties for households looking to improve water taste, reduce odors, and support cleaner daily use. We help property owners choose treatment that aligns with plumbing layout, household routines, and whole-home water quality goals.",
  },
  {
    slug: "city-water-treatment-systems",
    title: "City Water Treatment Systems",
    navTitle: "City Water Treatment Systems",
    heroTitle: "City Water Treatment Systems for Milwaukee Municipal Supply",
    short:
      "Improve municipal water quality with treatment systems designed to reduce chlorine taste, odors, sediment, and other common city water concerns found in Greater Milwaukee homes.",
    summary:
      "Treatment for municipal water — chlorine taste, odors, sediment, and everyday city-water concerns.",
    intro:
      "Milwaukee Water Pros installs city water treatment systems for homeowners who want better-tasting water, fewer odor concerns, and improved daily water quality. Treatment options can address common municipal water issues affecting drinking, cooking, bathing, and cleaning.",
    benefitsTitle:
      "Milwaukee Water Pros Delivers City Water Treatment Built for Real Household Use",
    benefits: [
      {
        title: "Careful system matching",
        body: "We evaluate usage patterns, plumbing access, and common municipal water concerns before recommending equipment. That helps households avoid one-size-fits-all treatment and choose solutions that fit cooking habits, shower use, and fixture count.",
      },
      {
        title: "Installation that follows a clear process",
        body: "From reviewing shutoff locations to confirming space for tanks, filters, or control heads, we keep upgrades organized — whether you are replacing older equipment or adding treatment during a renovation.",
      },
      {
        title: "Dependable support for everyday performance",
        body: "We install city water treatment for homes where water quality concerns show up in real routines: filling pots for dinner, running laundry, or getting children ready for school.",
      },
    ],
    whyTitle: "Why City Water Treatment Matters for Daily Living",
    why: [
      {
        title: "Municipal water can still bring everyday concerns",
        body: "City-supplied water is treated before delivery, but homeowners may still notice taste, odor, or mineral-related issues once water reaches taps and appliances. A home treatment system helps address those concerns at the property.",
      },
      {
        title: "Busy households notice issues faster",
        body: "Families using multiple bathrooms, kitchens, and laundry appliances throughout the day often notice water issues more quickly. Dependable treatment supports smoother routines without constant bottled-water workarounds.",
      },
      {
        title: "Home standards influence upgrade decisions",
        body: "Across Greater Milwaukee, many property owners want water that better supports daily comfort, guest visits, and overall home upkeep — especially when noticeable taste, odor, or residue affects how the house feels.",
      },
    ],
    faqs: [
      {
        q: "What signs suggest city water treatment may be worth considering?",
        a: "Common signs include unpleasant tap taste, chlorine odor, residue on fixtures, or comments from visitors about drinking water and shower comfort. We evaluate household concerns and explain options that fit daily use.",
      },
      {
        q: "What parts of the plumbing setup are reviewed before installation?",
        a: "We typically review the main water entry point, available utility space, drain access when needed, shutoff placement, and overall plumbing layout so equipment can be placed practically.",
      },
      {
        q: "How should new homeowners judge results after a system is installed?",
        a: "Results are often judged by improved taste, reduced odor, less visible buildup, and a more comfortable experience during bathing, cooking, and cleaning. We help set realistic expectations based on the property’s water conditions.",
      },
    ],
    findUs:
      "Milwaukee Water Pros serves homeowners throughout Milwaukee, Waukesha, and Ozaukee counties with city water treatment tailored to common municipal water concerns. From established Milwaukee neighborhoods to newer suburban communities, we help property owners improve water quality for drinking, bathing, cooking, and cleaning.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicePath(slug: string) {
  return `/services/${slug}`;
}
