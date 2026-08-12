export const company = {
  name: "Rainbow",
  tagline: "Powering reliability. Engineering what matters.",
  shortDescription:
    "Power solutions and electrical engineering for residential, commercial, industrial and government environments.",
  whatsapp: "+917393974444",
  phone: "+91 73939 74444",
  email: "rainbow@gmail.com",
  instagram: "https://www.instagram.com/rainbow_varanasi/",
  location: "Varanasi, Uttar Pradesh, India",
};

const img = (seed, label) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1200&q=82`;

export const categories = [
  {
    id: "ups",
    name: "Online UPS Systems",
    icon: "BatteryCharging",
    tone: "cyan",
  },
  { id: "components", name: "UPS Components", icon: "Cpu", tone: "violet" },
  { id: "batteries", name: "Batteries", icon: "BatteryFull", tone: "green" },
  {
    id: "stabilizers",
    name: "Servo Stabilizers",
    icon: "Gauge",
    tone: "amber",
  },
  { id: "inverters", name: "Inverters", icon: "Zap", tone: "blue" },
  { id: "solar", name: "Solar Solutions", icon: "Sun", tone: "orange" },
  { id: "panels", name: "Control Panels", icon: "PanelTop", tone: "pink" },
  {
    id: "panel-components",
    name: "Panel Components",
    icon: "Cogs",
    tone: "purple",
  },
];

export const products = [
  // UPS
  ...[
    "Single Phase Online UPS",
    "Three Phase Online UPS",
    "Industrial UPS",
    "Modular UPS",
    "Rack Mount UPS",
    "Tower UPS",
    "Medical Grade UPS",
    "Data Center UPS",
  ].map((name, i) => ({
    id: `ups-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "ups",
    categoryName: "Online UPS Systems",
    summary:
      "High-availability backup power designed for clean, uninterrupted electrical supply.",
    specs: [
      "Online double-conversion topology",
      "Protection against voltage fluctuation",
      "Scalable service and maintenance",
    ],
    image: img("1558008258-3256797b43f3", "UPS"),
    featured: i < 4,
  })),

  // UPS components
  ...[
    "Rectifier Modules",
    "Inverter Modules",
    "IGBT Power Modules",
    "Static Bypass Switches",
    "Manual Bypass Switches",
    "Static Transfer Switch (STS)",
    "Isolation Transformers",
    "Battery Chargers",
    "DSP & Control Cards",
    "Display Panels",
    "Cooling Fans",
    "Capacitors",
    "Contactors",
    "Relays",
    "Fuses",
    "MCB",
    "MCCB",
    "ACB",
    "Surge Protection Devices (SPD)",
    "EMI/RFI Filters",
    "Current Transformers (CT)",
    "Potential Transformers (PT)",
    "Terminal Blocks",
    "Copper Bus Bars",
    "Battery Cabinets",
    "Battery Monitoring Systems",
    "UPS Enclosures",
    "Remote Monitoring Systems",
  ].map((name, i) => ({
    id: `component-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "components",
    categoryName: "UPS Components & Accessories",
    summary:
      "Industrial-grade electrical component selected for reliable power infrastructure.",
    specs: [
      "Professional electrical component",
      "Suitable for service and replacement",
      "Technical selection support available",
    ],
    image: img("1518770660439-4636190af475", "Components"),
    featured: i < 2,
  })),

  // Batteries
  ...[
    "SMF (VRLA) Batteries",
    "Tubular Batteries",
    "Lithium-ion Batteries",
    "Battery Banks",
    "Battery Cabinets",
    "Battery Monitoring Systems",
  ].map((name, i) => ({
    id: `battery-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "batteries",
    categoryName: "Batteries",
    summary:
      "Backup energy storage solutions for UPS, inverter and critical-power applications.",
    specs: [
      "Application-specific sizing",
      "Battery health and maintenance support",
      "Bank and cabinet configuration available",
    ],
    image: img("1473341304170-971dccb5ac1e", "Battery"),
    featured: i < 3,
  })),

  // Stabilizers
  ...[
    "Air Cooled Servo Stabilizers",
    "Oil Cooled Servo Stabilizers",
    "Automatic Voltage Regulators (AVR)",
  ].map((name, i) => ({
    id: `stabilizer-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "stabilizers",
    categoryName: "Servo Voltage Stabilizers",
    summary:
      "Voltage regulation systems engineered to protect sensitive and industrial loads.",
    specs: [
      "Automatic voltage correction",
      "Industrial load protection",
      "Site-specific capacity selection",
    ],
    image: img("1509391366360-2e959784a276", "Stabilizer"),
    featured: true,
  })),

  // Inverters
  ...[
    "Pure Sine Wave Inverters",
    "Industrial Inverters",
    "Hybrid Solar Inverters",
  ].map((name, i) => ({
    id: `inverter-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "inverters",
    categoryName: "Inverters",
    summary:
      "Reliable DC-to-AC power conversion for backup and renewable-energy applications.",
    specs: [
      "Clean power output",
      "Application-specific configuration",
      "Installation and service support",
    ],
    image: img("1621905252507-b35492cc74b4", "Inverter"),
    featured: true,
  })),

  // Solar
  ...[
    "On-Grid Solar Systems",
    "Off-Grid Solar Systems",
    "Hybrid Solar Systems",
    "Solar Inverters",
    "Solar PV Modules",
    "Solar Mounting Structures",
    "Solar DCDB & ACDB",
    "Solar Combiner Boxes",
  ].map((name, i) => ({
    id: `solar-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "solar",
    categoryName: "Solar Solutions",
    summary:
      "Complete solar building blocks from generation to protection and distribution.",
    specs: [
      "System design support",
      "Protection and distribution options",
      "Residential to commercial applications",
    ],
    image: img("1509391366360-2e959784a276", "Solar"),
    featured: i < 4,
  })),

  // Panels
  ...[
    "LT Panels",
    "HT Panels",
    "PCC Panels",
    "MCC Panels",
    "APFC Panels",
    "DG Synchronization Panels",
    "AMF Panels",
    "Feeder Pillars",
    "DOL Starter Panels",
    "Star-Delta Starter Panels",
    "Soft Starter Panels",
    "VFD Panels",
    "Pump Control Panels",
    "PLC Panels",
    "SCADA Panels",
    "HMI Panels",
    "Instrumentation Panels",
    "RTU Panels",
  ].map((name, i) => ({
    id: `panel-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "panels",
    categoryName: "Electrical Control Panels",
    summary:
      "Engineered control and distribution panels for dependable electrical systems and automation.",
    specs: [
      "Design and manufacturing support",
      "Component selection by application",
      "Testing and commissioning support",
    ],
    image: img("1516321318423-f06f85e504b3", "Control Panel"),
    featured: i < 5,
  })),

  // Panel components
  ...[
    "PLC",
    "HMI",
    "VFD",
    "Soft Starters",
    "MCB",
    "MCCB",
    "ACB",
    "MPCB",
    "RCCB",
    "ELCB",
    "Contactors",
    "Overload Relays",
    "Timers",
    "Power Relays",
    "CT & PT",
    "Energy Meters",
    "Multifunction Meters",
    "Selector Switches",
    "Push Buttons",
    "Indicator Lamps",
    "Emergency Stop Switches",
    "Terminal Blocks",
    "Copper Bus Bars",
    "Cable Glands",
    "DIN Rails",
    "Panel Cooling Fans",
    "Panel Heaters",
    "Thermostats",
    "SMPS Power Supplies",
    "Surge Protection Devices",
  ].map((name, i) => ({
    id: `panel-component-${i + 1}`,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category: "panels",
    categoryName: "Control Panel Components",
    summary:
      "Control, protection and automation component for electrical panel applications.",
    specs: [
      "Industrial electrical component",
      "Panel integration support",
      "Selection based on system requirements",
    ],
    image: img("1550751827-4bd374c3f58b", "Electrical"),
    featured: false,
  })),
];

export const services = [
  {
    title: "Power Solutions",
    description:
      "Complete lifecycle support for backup power and critical electrical infrastructure.",
    items: [
      "UPS Installation",
      "UPS Repair & Servicing",
      "UPS Annual Maintenance Contracts (AMC)",
      "Preventive Maintenance",
      "Breakdown Maintenance",
      "Battery Replacement",
      "Battery Health Testing",
      "Load Testing",
      "Power Quality Analysis",
      "Site Survey & Consultation",
    ],
  },
  {
    title: "Electrical Control Panels",
    description:
      "From panel engineering to automation integration, testing and commissioning.",
    items: [
      "Panel Design",
      "Panel Manufacturing",
      "Panel Installation",
      "Panel Testing & Commissioning",
      "PLC Programming",
      "Industrial Automation",
      "SCADA Integration",
    ],
  },
  {
    title: "Electrical Services",
    description:
      "Electrical installation, maintenance and troubleshooting across project environments.",
    items: [
      "Residential Electrical Wiring",
      "Commercial Electrical Wiring",
      "Industrial Electrical Wiring",
      "Complete Electrical Installation",
      "Electrical Rewiring",
      "Electrical Fault Finding & Troubleshooting",
      "Electrical Maintenance",
      "Electrical Safety Inspection",
      "Cable Laying & Cable Termination",
    ],
  },
  {
    title: "Switching & Protection",
    description:
      "Protection and switching systems designed around safety, continuity and maintainability.",
    items: [
      "Switchgear Installation",
      "MCB Installation & Replacement",
      "MCCB Installation & Replacement",
      "ACB Installation & Maintenance",
      "Isolator Installation",
      "Changeover Switch Installation",
      "Panel Switching Solutions",
      "Electrical Protection System Installation",
    ],
  },
  {
    title: "Lighting Services",
    description:
      "Practical lighting solutions for residential, commercial, industrial and outdoor applications.",
    items: [
      "Residential Lighting Installation",
      "Commercial Lighting Installation",
      "Industrial Lighting Installation",
      "LED Lighting Solutions",
      "Indoor Lighting",
      "Outdoor Lighting",
      "Street Lighting",
    ],
  },
];

export const projects = [
  {
    title: "North Eastern Railway — 17 Stations",
    client: "Indian Railways / North Eastern Railway",
    type: "Government Infrastructure",
    description:
      "Comprehensive electrical works across 17 North Eastern Railway stations.",
    scope: [
      "Complete Electrical Wiring",
      "Power & Control Cabling",
      "Street Lighting Installation",
      "Street Light Pole Installation",
      "Station Name Board Lighting",
      "Indoor & Outdoor Lighting",
      "Electrical Maintenance",
      "Supply of Electrical Appliances",
      "Air Conditioner Supply & Installation",
      "Heater Supply",
      "Electrical Accessories Supply",
      "Electrical Control Panel Supply & Installation",
      "Testing & Commissioning",
    ],
  },
];

export const clients = {
  government: ["Indian Railways (North Eastern Railway)"],
  banking: [
    "Union Bank of India",
    "Bank of Baroda",
    "Uttar Pradesh Gramin Bank",
    "Central Bank of India",
    "Bank of India",
  ],
  healthcare: ["Apex Hospital", "Agrim Hospital"],
  commercial: ["Rajendra Toyota"],
};

export const certifications = [
  "Registered on the Government e-Marketplace (GeM) Portal",
  "A Class Electrical Contractor Certificate",
  "ISO 9001 Certified — Quality Management System",
  "ISO 14001 Certified — Environmental Management System",
];
