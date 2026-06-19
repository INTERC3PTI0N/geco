// Full content migrated from geco-trade.com — company, pages and complete product catalogue.

export const COMPANY = {
  name: "Geco Trading Corporation",
  legal: "Geco Trading Corporation Pvt. Ltd.",
  short: "GECO",
  brand: "GTC",
  since: 1958,
  founder: "Mr. Haji K. M. Ibrahim",
  tagline: "Aftermarket Engine Parts in Original Quality",
  heroLine: "The Possibilities Are Endless",
  intro:
    "We are your reliable and experienced engineering partner around the world — manufacturing and exporting GTC brand aftermarket engine parts in original quality since 1958.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  address: "102, Janki Centre, Veera Desai Road, Andheri West, Mumbai 400 053, Maharashtra, India",
  addressLines: ["102, Janki Centre, Veera Desai Road", "Andheri West, Mumbai 400 053", "Maharashtra, India"],
  email: "info@geco-trade.com",
  phone: "+91-22-42100900",
  phoneNote: "100 Lines",
};

export const STATS = [
  { value: 68, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Countries Exported" },
  { value: 5, suffix: "×", label: "Gold Trophy Years Running" },
  { value: 18, suffix: "+", label: "Engine Part Categories" },
];

export const CREDENTIALS = [
  "ISO 9001:2015 Certified",
  "Govt. of India Recognised Star Export House",
  "Gold Trophy — Largest Exporter (5 Years Running)",
];

export const VALUE_PROPS = [
  {
    no: "01",
    title: "World Class Quality",
    body: "Centrifugally cast products with accurate machining, engineered to match original equipment — part for part.",
  },
  {
    no: "02",
    title: "Market Leader in Engine Parts",
    body: "One of the largest and most reputed engineering export houses in India and across the globe.",
  },
  {
    no: "03",
    title: "Awarded for Excellence in Exports",
    body: "Recognised with the Gold Trophy for largest exporter — five consecutive years.",
  },
  {
    no: "04",
    title: "More than Six Decades of Experience",
    body: "Uninterrupted manufacturing and export expertise, building trust since 1958.",
  },
];

export const INDUSTRIES = [
  "Automobiles",
  "Tractors",
  "Trucks",
  "Earth Moving Equipment",
  "Industrial Machinery",
  "Agriculture Engines",
  "Air Brake Compressors",
];

export const REGIONS = [
  "Middle East",
  "Africa",
  "Asia Pacific",
  "Europe",
  "Latin America",
  "USA",
];

// ---- About page ----
export const ABOUT = {
  philosophy:
    "Success is the result of consistent efforts, where both worthy accomplishments and failures are welcomed to sharpen the souls.",
  whoWeAre: [
    "At Geco Trading Corporation, our principles centre on placing our customers' interests and needs ahead at every step of our operations. It is this discipline, held for over six decades, that has made us a trusted name in engineering exports.",
    "Our products are distributed across the Middle East, Africa, Asia Pacific, Europe, Latin America and the USA — keeping engines running wherever precision and reliability matter most.",
  ],
  history: [
    "Founded in 1958 by Mr. Haji K. M. Ibrahim, Geco Trading Corporation is a family-owned organisation. The company manufactures and exports GTC brand I.C. Diesel Engines, Agricultural Machineries and Engine Parts for a wide range of vehicles and equipment.",
    "More recently we have expanded into sourcing agents for merchandise including Ceramic Tiles, Sanitarywares, Chemicals, Food Stuff, Agro Commodities and different types of Minerals.",
  ],
  motto: "We treat every customer as if our world revolves around them… In fact, it does.",
  memberships: [
    "ISO 9001:2015 Certified",
    "Government of India Recognised Star Export House",
    "FIEO — Federation of Indian Export Organisations",
    "EEPC India — Engineering Export Promotion Council",
  ],
};

export const AWARDS = [
  { title: "Gold Trophy — Largest Exporter", note: "Awarded five years in a row for excellence in engineering goods exports." },
  { title: "Star Export House", note: "Recognised by the Government of India for outstanding export performance." },
  { title: "ISO 9001:2015", note: "Certified quality management system across manufacturing and export." },
  { title: "60+ Years of Innovation", note: "Celebrating six decades of uninterrupted engineering excellence." },
];

// ---- Product catalogue ----
// Categories used to group the catalogue (acova-style numbered sections)
export const CATEGORIES = [
  { id: "valve-train", no: "01", name: "Valve Train Components", blurb: "Valves, guides, seats and rockers engineered for precise sealing and long service life." },
  { id: "cylinder", no: "02", name: "Cylinder Components", blurb: "Liners, sleeves, heads and blocks — the heart of the engine, centrifugally cast and precision honed." },
  { id: "rotating", no: "03", name: "Rotating Assembly", blurb: "Crankshafts, camshafts and connecting rods forged for strength and balance." },
  { id: "piston-bearing", no: "04", name: "Piston & Bearings", blurb: "Piston assemblies, rings, pins, bearings and bushes for friction-critical duty." },
  { id: "lubrication-induction", no: "05", name: "Lubrication & Forced Induction", blurb: "Oil pumps, turbo charger and compressor parts built to specification." },
  { id: "transmission-clutch", no: "06", name: "Transmission & Clutch", blurb: "Synchronizer rings, gears, sliders and washers for smooth power transfer." },
];

export const PRODUCTS = [
  {
    slug: "engine-valves",
    name: "Engine Valves",
    category: "valve-train",
    tag: "Valve Train",
    summary:
      "Engine valves are available in materials including Chrome Silicon, Chrome Nickel Silicon, and Non-Magnetic variants with seat hard facing and Bi-metal options. Key features include Chrome plated stems, with Nitriding process available.",
    materials: ["Chrome Silicon", "Chrome Nickel Silicon", "Non-Magnetic with seat hard facing", "Bi-metal"],
    finishes: ["Chrome-plated stems", "Nitriding process available"],
    process: [
      { title: "Forging & Machining", body: "Valves are forged and precision-machined to accurate specifications using centre-to-centre principles to control run-out of the seat, ensuring accurate sealing and long service life." },
    ],
    features: [
      "Chrome Silicon and Chrome Nickel Silicon alloys",
      "Non-Magnetic variant with seat hard facing",
      "Bi-metal construction available",
      "Chrome-plated stems",
      "Nitriding process available",
      "Centre-to-centre machining for controlled seat run-out",
    ],
    applications: ["Automobiles", "Tractors", "Trucks", "Diesel engines"],
    related: ["valve-guide", "valve-seat-inserts", "valve-rocker-levers"],
  },
  {
    slug: "valve-guide",
    name: "Valve Guides",
    category: "valve-train",
    tag: "Valve Train",
    summary:
      "Valve Guide is made from special ground Cast Iron for hardness and wear resistance. Accurate size and bore ground / threaded type are some of the key features. We also manufacture Valve Guides as per customers' specifications.",
    materials: ["Special ground Cast Iron"],
    finishes: ["Bore ground type", "Threaded type"],
    process: [
      { title: "Machining", body: "Accurately sized bores in ground or threaded types, manufactured to precise customer specification. We also manufacture many other Valve Guides — please ask." },
    ],
    features: [
      "Special ground Cast Iron construction",
      "High hardness and wear resistance",
      "Ground bore type",
      "Threaded bore type",
      "Accurate bore sizing",
      "Custom specifications available",
    ],
    applications: ["Automobiles", "Tractors", "Diesel engines"],
    related: ["engine-valves", "valve-seat-inserts"],
  },
  {
    slug: "valve-seat-inserts",
    name: "Valve Seat Inserts",
    category: "valve-train",
    tag: "Valve Train",
    summary:
      "Valve Seat Inserts are a specialized product to withstand the burning heat in the combustion area. The heat from the Valve Seat is conducted to the head. The material is special to not deform, wear or burn and still continue to seal the Valve.",
    materials: ["Specialised heat-resistant alloys"],
    finishes: [],
    process: [
      { title: "Heat Management", body: "The insert conducts heat away from the valve seat to the cylinder head. The material is engineered to resist deformation, wear and burning while maintaining a reliable valve seal under sustained combustion temperatures." },
    ],
    features: [
      "Withstands burning heat in the combustion area",
      "Conducts heat from valve seat to cylinder head",
      "Resists deformation, wear and burning",
      "Maintains reliable valve seal",
      "Custom Valve Seats manufactured to specification",
    ],
    applications: ["Automobiles", "Tractors", "Trucks", "Diesel engines"],
    related: ["engine-valves", "valve-guide"],
  },
  {
    slug: "valve-rocker-levers",
    name: "Valve Rocker Levers",
    category: "valve-train",
    tag: "Valve Train",
    summary:
      "Valve rocker levers available in forging, SG Iron and CI Casting. We also manufacture Valve Push Rods — in forged solid steel bar and centre hollow pipe designs — for applications including Caterpillar and Cummins.",
    materials: ["Forging", "SG Iron", "CI Casting"],
    finishes: [],
    process: [
      { title: "Rocker Levers", body: "Manufactured in three material options — forging, SG Iron and CI Casting — to suit different engine configurations and load requirements." },
      { title: "Valve Push Rods", body: "Available as forged solid steel bars or centre hollow pipe designs, manufactured for applications compatible with Caterpillar and Cummins equipment." },
    ],
    features: [
      "Available in Forging, SG Iron and CI Casting",
      "Valve Push Rods — solid steel bar type",
      "Valve Push Rods — centre hollow pipe type",
      "Compatible with Caterpillar and Cummins",
      "Custom specifications welcome",
    ],
    applications: ["Caterpillar engines", "Cummins engines", "Diesel engines", "Automobiles"],
    related: ["engine-valves", "valve-seat-inserts"],
  },
  {
    slug: "cylinder-liner-wet-type",
    name: "Cylinder Liners (Wet Type)",
    category: "cylinder",
    tag: "Wet Type",
    summary:
      "Cylinder Liner with Piston Assembly forms the heart of the engine and is a very critical component for the running and performance of the engine. GTC brand liners are centrifugally cast from controlled cast iron alloy and precision honed to exacting R.A. values.",
    materials: ["Cast iron alloy — controlled carbon, silicon, chromium, manganese, molybdenum and nickel, low sulphur"],
    finishes: [
      "Natural / White Finish",
      "Black Phosphate Finish",
      "Nitrated Processed",
      "Tuffride Processed",
      "Bore Chrome Plated",
      "Induction Bore Hardened",
      "Chrome or Zinc Plated",
      "Outside Painted / Powder Coated",
    ],
    process: [
      { title: "Centrifugal Casting", body: "Production begins with centrifugal casting, where cast iron alloy is poured into a die rotating at high speed, resulting in a cast product. The alloy composition is engineered for wear resistance, strength, hardness, toughness and corrosion resistance, with controlled sulphur content." },
      { title: "Machining", body: "Operations include turning, phasing and boring to precise dimensions with consistent wall thickness. The final operation is bore honing on a Hydraulic Vertical honing double-expansion machine to achieve the required R.A. values." },
      { title: "Cross-Honing", body: "Cross-honing patterns are deliberately created to maintain an appropriate oil film on the liner walls — avoiding excess oil consumption, smoking and accelerated wear." },
    ],
    features: [
      "Heart of the engine — critical for running and performance",
      "Eight surface finish options",
      "Centrifugal casting for controlled alloy properties",
      "Hydraulic vertical honing for precise R.A. values",
      "Cross-honing for optimised oil film retention",
      "Low sulphur, controlled alloy composition",
    ],
    applications: ["Automobiles", "Tractors", "Trucks", "Diesel engines", "Earth moving equipment"],
    related: ["cylinder-sleeve-dry-type", "pistons-piston-assly", "cylinder-blocks-barrels"],
  },
  {
    slug: "cylinder-sleeve-dry-type",
    name: "Cylinder Sleeves (Dry Type)",
    category: "cylinder",
    tag: "Dry Type",
    summary:
      "Cast iron alloy cylinder sleeves — including a special high-chromium, high-molybdenum alloy variant for enhanced wear resistance. Available in semi-finished or fully finished bores with multiple surface treatment options.",
    materials: ["Cast iron alloy — controlled carbon, silicon, chromium, manganese, molybdenum and nickel", "Special high-chromium, high-molybdenum alloy variant"],
    finishes: [
      "Semi-finished or fully finished bores",
      "White / Natural finish",
      "Black Phosphate (fully finished only)",
      "Nitrated processed (fully finished only)",
      "Tuffride processed (fully finished only)",
      "Bore Chrome Plated (fully finished only)",
    ],
    process: [
      { title: "Centrifugal Casting", body: "Cast iron alloy is poured into a die rotating at high speed, resulting in a cast product. The alloy composition is tuned for wear resistance, strength, hardness and toughness — balancing all properties for long service life." },
      { title: "Machining", body: "Turning, phasing and boring to precise dimensions. Fully finished sleeves are honed on a hydraulic vertical honing machine with cross-honing patterns for correct oil film retention at specified surface roughness values." },
      { title: "Installation Guidance", body: "Semi-finish sleeves must be press-fitted into engine blocks. Recommended interference fit between block bore and sleeve outer diameter is 0.050–0.075 mm." },
    ],
    features: [
      "Special high-chromium, high-molybdenum alloy for superior wear resistance",
      "Semi-finished or fully finished bore options",
      "Six surface treatment options for fully finished sleeves",
      "Cross-honing for controlled oil film retention",
      "Press-fit interference guidance (0.050–0.075 mm)",
    ],
    applications: ["Automobiles", "Tractors", "Diesel engines"],
    related: ["cylinder-liner-wet-type", "cylinder-blocks-barrels"],
  },
  {
    slug: "cylinder-heads",
    name: "Cylinder Heads",
    category: "cylinder",
    tag: "Core",
    summary:
      "Cylinder heads available in single cylinder and multi cylinder configurations, made from graded casting and shell moulding processes. We also manufacture Cylinder Heads as per customers' specifications.",
    materials: ["Graded casting", "Shell moulded"],
    finishes: [],
    process: [
      { title: "Configuration", body: "Available in Single Cylinder and Multi Cylinder configurations, produced using graded casting and shell moulding processes." },
      { title: "Custom Manufacturing", body: "We manufacture Cylinder Heads as per customers' specifications. Many other cylinder head types are also available — please ask." },
    ],
    features: [
      "Single cylinder configuration",
      "Multi cylinder configuration",
      "Graded casting",
      "Shell moulded process",
      "Custom specifications available",
    ],
    applications: ["Automobiles", "Tractors", "Diesel engines"],
    related: ["cylinder-blocks-barrels", "cylinder-liner-wet-type"],
  },
  {
    slug: "cylinder-blocks-barrels",
    name: "Cylinder Blocks / Barrels",
    category: "cylinder",
    tag: "Core",
    summary:
      "Cylinder Blocks / Barrels with Piston Assembly form the heart of the engine and are very critical components for running and performance. Available in finned and non-finned types with multiple finish options.",
    materials: ["Cast iron alloy — controlled carbon, silicon, chromium, manganese, molybdenum, nickel, low sulphur"],
    finishes: ["Natural cast finish", "Powder paint coated", "Black phosphate"],
    process: [
      { title: "Gravity Casting via Shell Moulding", body: "Molten metal is poured into a mould shell made from a special sand. Clear fins are necessary for proper cooling. Quality requires wear resistance, strength, hardness without brittleness, and a fine grain structure free of blow holes and casting defects." },
      { title: "Machining", body: "Turning, phasing and boring to precise dimensions with consistent wall thickness. The last operation is bore honing on a Hydraulic Vertical honing double-expansion machine to achieve the required R.A. values and cross-honing lines for oil film retention." },
    ],
    features: [
      "Finned and non-finned configurations",
      "Gravity casting via shell moulding",
      "Fine grain structure, free of casting defects",
      "Wear resistance without brittleness",
      "Hydraulic vertical honing for precise R.A. values",
      "Cross-honing for oil film retention",
    ],
    applications: ["Diesel engines", "Compressors", "Industrial machinery", "Air cooled engines"],
    related: ["cylinder-heads", "cylinder-liner-wet-type", "pistons-piston-assly"],
  },
  {
    slug: "crankshafts",
    name: "Crankshafts",
    category: "rotating",
    tag: "Rotating",
    summary:
      "Crankshafts made from Steel Forged and Ductile / SG Iron. Available for single cylinder diesel engines and compressors, and multi cylinder (2, 3, 4 and 6 cylinder) for automobiles, tractors and diesel engines.",
    materials: ["Steel forged", "Ductile / SG Iron"],
    finishes: [],
    process: [
      { title: "Single Cylinder", body: "For diesel engines and compressors. Made from steel forged and ductile / SG iron to withstand the demands of single-cylinder high-load applications." },
      { title: "Multi Cylinder — 2, 3, 4 & 6", body: "For automobiles, tractors and diesel engines. Multi-cylinder crankshafts are balanced and precision machined for smooth, reliable operation across the engine's full speed range." },
    ],
    features: [
      "Steel forged and Ductile / SG Iron",
      "Single cylinder — for diesel engines and compressors",
      "Multi cylinder — 2, 3, 4 and 6 cylinder",
      "For automobiles, tractors and diesel engines",
    ],
    applications: ["Diesel engines", "Compressors", "Automobiles", "Tractors"],
    related: ["cam-shafts", "connecting-rods"],
  },
  {
    slug: "cam-shafts",
    name: "Camshafts",
    category: "rotating",
    tag: "Rotating",
    summary:
      "Camshafts available in Steel Forging, Chilled Grey Iron, Chilled SJ Iron (Ductile Iron) and Hardenable Iron Castings. Specifications of each camshaft differ by customer — it is advised to provide samples, drawings or specifications.",
    materials: ["Steel Forging", "Chilled Grey Iron", "Chilled SJ Iron (Ductile Iron)", "Hardenable Iron Castings"],
    finishes: [],
    process: [
      { title: "Made to Specification", body: "Specifications of each camshaft differ for each customer in size and material specification. It is advised to provide your samples, drawings or specifications so we can produce the camshafts precisely to your requirements." },
    ],
    features: [
      "Steel Forging",
      "Chilled Grey Iron",
      "Chilled SJ Iron (Ductile Iron)",
      "Hardenable Iron Castings",
      "Produced to customer samples, drawings or specifications",
    ],
    applications: ["Automobiles", "Tractors", "Diesel engines"],
    related: ["crankshafts", "connecting-rods"],
  },
  {
    slug: "connecting-rods",
    name: "Connecting Rods",
    category: "rotating",
    tag: "Rotating",
    summary:
      "Connecting rods mainly made from Steel Forging (NQT processed), and also Aluminium Pressure Die Cast for air brake compressors. Accurate size and weight controlled for precise, balanced assemblies.",
    materials: ["Steel forging (NQT processed)", "Aluminium pressure die cast"],
    finishes: [],
    process: [
      { title: "Forging", body: "Open die forgings as standard practice. Close die / press forgings can also be available for larger quantity orders." },
      { title: "Precision & Weight Control", body: "Accurate size and weight controlled manufacturing ensures precise, balanced assemblies — critical for smooth engine operation." },
    ],
    features: [
      "Steel Forging — NQT processed",
      "Aluminium Pressure Die Cast for air brake compressors",
      "Open die forgings as standard",
      "Close die / press forgings for larger quantities",
      "Accurate size and weight controlled",
    ],
    applications: ["Automobiles", "Air brake compressors", "Diesel engines"],
    related: ["crankshafts", "pistons-piston-assly"],
  },
  {
    slug: "pistons-piston-assly",
    name: "Piston Assembly / Rings / Pins",
    category: "piston-bearing",
    tag: "Reciprocating",
    summary:
      "Pistons, Piston Rings and Piston Pins — the core components of the piston assembly. Pistons are mainly made of Aluminium; Cast Iron Pistons are also made for applications such as air brake compressors.",
    materials: [
      "Aluminium alloy (Silicon, Copper, Nickel and Magnesium)",
      "Cast Iron (for brake air compressors)",
      "16 MnCr3 or 20 MnCr5 (piston pins)",
    ],
    finishes: [
      "Normal / Alfin (Ring Carrier) Type",
      "Shims Type",
      "Tin Plated",
      "Black Graphite Coated",
      "Top Anodized Aluminium",
      "Chrome-plated rings (250 microns)",
    ],
    process: [
      { title: "Pistons — Gravity Die Casting", body: "Molten Aluminium alloy is poured into a tabletop steel die with a runner and riser. Alloys typically contain Silicon, Copper, Nickel and Magnesium. After casting, pistons are furnace heat treated and precision machined using centre-to-centre principles. Most pistons are cam-turned to achieve ovality, emphasising wear resistance and thermal conductivity." },
      { title: "Piston Rings", body: "Cast Iron Rings are individually cast and cam-turned to accurate size. SG Iron Rings are centrifugally barrel casted and heat treated. Chrome-plated variants feature 250 microns plating with barrel honing and grinding for enhanced sealing." },
      { title: "Piston Pins / Gudgeon Pins", body: "Made from 16 MnCr3 or 20 MnCr5 and case-hardened to approximately 60 HRC. Available in Free Floating, Thumb Push or Tight Fit configurations." },
    ],
    features: [
      "Aluminium alloy pistons (Silicon, Copper, Nickel, Magnesium)",
      "Cast Iron pistons for air brake compressors",
      "Normal / Alfin (Ring Carrier), Shims, Tin Plated, Black Graphite Coated and Top Anodized types",
      "Cam-turned to achieve ovality",
      "Chrome-plated rings at 250 microns",
      "SG Iron rings — centrifugally barrel casted",
      "Piston Pins case-hardened to ~60 HRC",
      "Free Floating, Thumb Push or Tight Fit pin configurations",
    ],
    applications: ["Automobiles", "Air brake compressors", "Diesel engines"],
    related: ["cylinder-liner-wet-type", "connecting-rods", "engineering-bearings-bushes"],
  },
  {
    slug: "engineering-bearings-bushes",
    name: "Engine Bearings & Bushes",
    category: "piston-bearing",
    tag: "Friction",
    summary:
      "Engine Bearings & Bushes are the most integral parts of engines. Thin-walled bearings use bi-metal strips; thick-walled bearings use steel or Gun Metal backing with centrifugal casting. Available in Tin Base, Copper Lead and Aluminium alloy linings.",
    materials: [
      "Tin Base — MTL 12 (SAE-12), MTL 13 (SAE-13)",
      "Copper Lead — MTL 797 (SAE-797, high load), MTL 799 (SAE-799, high load/speed), MTL 49 (SAE-49, high fatigue), MTL 31 (Nickel-reinforced, increased strength)",
      "Aluminium — MTL-20 (high-load), MTL-786 (camshaft bushes)",
    ],
    finishes: [],
    process: [
      { title: "Thin-walled Bearings", body: "Produced from bi-metal strips with steel backing and internal linings of Copper Lead, Aluminium Tin or White Metal Tin alloys. Copper Lead and White Metal linings use powder sintering processes." },
      { title: "Thick-walled Bearings & Bushes", body: "Flange-type bearings and pressure washers are manufactured using steel or Gun Metal backing with centrifugal casting, providing the structural integrity required for main and intermediate bearing applications." },
    ],
    features: [
      "Thin-walled bi-metal strip bearings",
      "Thick-walled centrifugally cast bearings",
      "Tin Base alloys — MTL 12, MTL 13",
      "Copper Lead alloys — MTL 797, 799, 49, 31 (Nickel-reinforced)",
      "Aluminium alloys — MTL-20, MTL-786",
      "Powder sintering for Copper Lead and White Metal linings",
    ],
    applications: ["Connecting Rod Bearings", "Main Bearings", "Centre / Intermediate Bearings", "Bushes", "Thrust Washers"],
    related: ["pistons-piston-assly", "crankshafts"],
  },
  {
    slug: "lubricating-oil-pumps",
    name: "Lubricating Oil Pumps",
    category: "lubrication-induction",
    tag: "Lubrication",
    summary:
      "Lubricating oil pumps manufactured as per customers' specifications. We also manufacture many other Lubricating Oil Pumps — please ask.",
    materials: [],
    finishes: [],
    process: [
      { title: "Made to Specification", body: "We manufacture Lubricating Oil Pumps as per customers' specifications. We also manufacture many other Lubricating Oil Pumps — please ask." },
    ],
    features: [
      "Manufactured to customer specifications",
      "Wide range of pump types available",
      "Premium engineering quality",
      "Enquire for full range",
    ],
    applications: ["Diesel engines", "Automobiles", "Tractors", "Industrial machinery"],
    related: ["crankshafts", "synchronizer-rings-gears"],
  },
  {
    slug: "turbo-charger-parts",
    name: "Turbo Charger Parts",
    category: "lubrication-induction",
    tag: "Forced Induction",
    summary:
      "All important Turbo Charger parts manufactured as per customers' specifications. We also manufacture many other items — please ask.",
    materials: [],
    finishes: [],
    process: [
      { title: "Made to Specification", body: "We manufacture all important Turbo Charger items as per customers' specifications. We also manufacture many other items — please ask." },
    ],
    features: [
      "All important turbo charger parts",
      "Manufactured to customer specifications",
      "Custom items available on request",
      "Premium engineering quality",
    ],
    applications: ["Trucks", "Diesel engines", "Industrial machinery"],
    related: ["compressor-parts", "lubricating-oil-pumps"],
  },
  {
    slug: "compressor-parts",
    name: "Compressor Parts",
    category: "lubrication-induction",
    tag: "Air Brake",
    summary:
      "All important Compressor parts manufactured as per customers' specifications. We also manufacture many other items for Compressors — please ask.",
    materials: [],
    finishes: [],
    process: [
      { title: "Made to Specification", body: "We manufacture all important items as per customers' specifications. We also manufacture many other items for Compressors — please ask." },
    ],
    features: [
      "All important compressor parts",
      "Air brake compressor components",
      "Manufactured to customer specifications",
      "Flexible production for all requirements",
    ],
    applications: ["Air brake compressors", "Industrial compressors", "Industrial machinery"],
    related: ["turbo-charger-parts", "connecting-rods"],
  },
  {
    slug: "synchronizer-rings-gears",
    name: "Synchronizer Rings & Gears",
    category: "transmission-clutch",
    tag: "Transmission",
    summary:
      "Synchronizer Rings made from Forged Brass Special Alloy. Gears for camshaft, crankshaft, lubricating oil pump and idler applications, produced in Steel Forging, Graded Cast Iron or Ductile / SG Iron.",
    materials: [
      "Forged Brass Special Alloy (Synchronizer Rings)",
      "Steel Forging (Gears)",
      "Graded Cast Iron (Gears)",
      "Ductile / SG Iron (Gears)",
    ],
    finishes: [],
    process: [
      { title: "Synchronizer Rings", body: "Manufactured from Forged Brass Special Alloy. We also manufacture many other Rings and produce to customer specification — please ask." },
      { title: "Gears", body: "Gears for Camshaft, Crankshaft, Lubricating Oil Pump and Idler applications. Produced in Steel Forging, Graded Cast Iron or Ductile / SG Iron." },
    ],
    features: [
      "Synchronizer Rings — Forged Brass Special Alloy",
      "Camshaft gears",
      "Crankshaft gears",
      "Lubricating oil pump gears",
      "Idler gears",
      "Steel Forging, Graded Cast Iron and Ductile / SG Iron options",
    ],
    applications: ["Transmissions", "Automobiles", "Tractors", "Diesel engines"],
    related: ["sliders-sliding-pads-washers-for-clutch", "lubricating-oil-pumps"],
  },
  {
    slug: "sliders-sliding-pads-washers-for-clutch",
    name: "Sliders / Sliding Pads / Washers for Clutch",
    category: "transmission-clutch",
    tag: "Clutch",
    summary:
      "Our sliders, sliding pads, and washers for clutches are designed to optimize performance and prolong the lifespan of the clutch system. They provide smooth sliding motion, ensuring seamless engagement and disengagement.",
    materials: ["Premium friction materials"],
    finishes: [],
    process: [
      { title: "Engineering", body: "Designed to optimize performance and prolong the lifespan of the clutch system. Made from premium materials, they are durable and prevent premature wear and tear, reducing the risk of clutch failure." },
    ],
    features: [
      "Smooth sliding motion for seamless engagement and disengagement",
      "Premium materials — durable and wear resistant",
      "Prevents premature wear and clutch failure",
      "Precise clutch control — reduces friction, improves response",
      "Compatible with various clutch models",
      "Easy to install",
    ],
    applications: ["Automobiles", "Tractors", "Trucks"],
    related: ["synchronizer-rings-gears"],
  },
];

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(catId) {
  return PRODUCTS.filter((p) => p.category === catId);
}

export const MARQUEE = [
  "Engine Valves",
  "Cylinder Liners",
  "Crankshafts",
  "Camshafts",
  "Piston Assembly",
  "Turbo Charger Parts",
  "Connecting Rods",
  "Valve Seat Inserts",
  "Engine Bearings",
];
