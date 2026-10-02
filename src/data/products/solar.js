import ongridImage from "../../assets/Solar/ongridImage.jpg";
import offgrideImage from "../../assets/Solar/offgrideImage.jpg";
import solarSystemImage from "../../assets/Solar/solarSystemImage.jpg";
import solarInverterImage from "../../assets/Solar/solarInverterImage.jpg";
import pvImage from "../../assets/Solar/pvImage.jpg";
import mountainStructureImage from "../../assets/Solar/mountainStructureImage.jpg";
import dcdbImage from "../../assets/Solar/dcdbImage.jpg";
import combineBoxImage from "../../assets/Solar/combineBoxImage.jpg";

import { makeProduct } from "../helpers.js";

export const solarProducts = [
  {
    id: "solar-on-grid",
    slug: "on-grid-solar-system",
    name: "On-Grid Solar System",
    category: "solar",
    categoryName: "Solar Solutions",
    image: ongridImage,
    summary:
      "Grid-connected photovoltaic system designed to generate electricity from solar energy and supply suitable loads while interacting with the utility network.",
    description:
      "An on-grid solar system normally consists of PV modules, mounting structures, DC protection, an inverter and AC-side protection/distribution. The inverter converts PV-generated DC into synchronized AC power for use by the connected electrical loads and, where permitted, export to the utility grid. Grid-interconnection requirements must be checked before installation.",
    applications: [
      "Homes",
      "Commercial buildings",
      "Schools and institutions",
      "Industrial rooftops",
      "Commercial solar plants",
    ],
    keyFeatures: [
      "Grid-connected operation",
      "Solar energy generation during daylight",
      "Modular PV array design",
      "String-level protection options",
      "Energy monitoring options",
    ],
    technicalParameters: [
      "PV capacity: kWp",
      "Inverter capacity: kW",
      "DC system voltage: Design dependent",
      "AC voltage: Site-specific",
      "Module technology: Selected by design",
      "Grid connection: Utility requirements apply",
    ],
    selection: [
      "Review monthly electricity consumption",
      "Assess available roof/ground area",
      "Check shading",
      "Determine sanctioned electrical load",
      "Confirm utility interconnection requirements",
    ],
    featured: true,
  },

  {
    id: "solar-off-grid",
    slug: "off-grid-solar-system",
    name: "Off-Grid Solar System",
    category: "solar",
    categoryName: "Solar Solutions",
    image: offgrideImage,
    summary:
      "Standalone photovoltaic power system using battery storage to supply electrical loads without depending on a continuous utility connection.",
    description:
      "An off-grid solar system combines photovoltaic generation with battery storage and an inverter/charger or suitable hybrid inverter. The battery provides energy when solar production is insufficient. System sizing must account for daily energy consumption, peak demand, seasonal solar availability and required autonomy.",
    applications: [
      "Remote homes",
      "Rural facilities",
      "Telecommunication sites",
      "Remote monitoring stations",
      "Sites with unreliable grid supply",
    ],
    keyFeatures: [
      "Independent operation from utility grid",
      "PV generation",
      "Battery energy storage",
      "Backup-oriented energy management",
      "Scalable PV and battery configurations",
    ],
    technicalParameters: [
      "PV capacity: kWp",
      "Battery capacity: kWh/Ah",
      "Inverter capacity: kW/VA",
      "System voltage: Design dependent",
      "Autonomy: Days/hours as designed",
      "Charge controller/MPPT: Model dependent",
    ],
    selection: [
      "Calculate daily energy demand",
      "Calculate peak and starting loads",
      "Define required autonomy",
      "Assess solar resource",
      "Size PV and battery for seasonal conditions",
    ],
    featured: true,
  },

  {
    id: "solar-hybrid",
    slug: "hybrid-solar-system",
    name: "Hybrid Solar System",
    category: "solar",
    categoryName: "Solar Solutions",
    image: solarSystemImage,
    summary:
      "Solar energy system combining photovoltaic generation, battery storage and grid or generator supply for flexible energy management.",
    description:
      "Hybrid solar systems combine multiple energy sources so that solar power, stored battery energy and an available grid or generator source can be coordinated according to programmed priorities. The architecture is useful where reducing grid consumption and maintaining backup capability are both important.",
    applications: [
      "Homes",
      "Small commercial buildings",
      "Shops and offices",
      "Facilities with unreliable grid supply",
      "Solar-plus-storage installations",
    ],
    keyFeatures: [
      "PV generation",
      "Battery storage",
      "Grid/generator integration options",
      "Programmable energy priorities",
      "Backup-load operation",
    ],
    technicalParameters: [
      "PV capacity",
      "Battery energy capacity",
      "Inverter rating",
      "Grid input rating",
      "Backup-load rating",
      "MPPT range",
    ],
    selection: [
      "Define daytime load",
      "Define backup load",
      "Calculate battery autonomy",
      "Size PV generation",
      "Check available grid/generator supply",
    ],
    featured: true,
  },

  {
    id: "solar-inverters",
    slug: "solar-inverters",
    name: "Solar Inverter",
    category: "solar",
    categoryName: "Solar Solutions",
    image: solarInverterImage,
    summary:
      "Power-conversion unit that converts photovoltaic DC electricity into controlled AC power for grid-connected or hybrid solar applications.",
    description:
      "Solar inverters perform DC-to-AC conversion and typically include maximum power point tracking to extract energy efficiently from the PV array. Depending on the type, the inverter can be grid-tied, hybrid or designed for standalone operation. Correct string voltage, current and inverter sizing are essential.",
    applications: [
      "Rooftop solar systems",
      "Commercial PV plants",
      "Industrial solar installations",
      "Hybrid energy systems",
      "Solar backup systems",
    ],
    keyFeatures: [
      "PV DC-to-AC conversion",
      "MPPT control",
      "Grid synchronization on grid-connected models",
      "Monitoring interfaces",
      "Protection against common PV-side electrical faults",
    ],
    technicalParameters: [
      "Rated AC power",
      "Maximum DC input power",
      "MPPT voltage range",
      "Maximum DC current",
      "AC output voltage",
      "Number of MPPT inputs",
      "Efficiency",
    ],
    selection: [
      "Calculate PV array power",
      "Check module string voltage",
      "Check maximum DC current",
      "Match AC output to site supply",
      "Define monitoring and communication needs",
    ],
    featured: true,
  },

  {
    id: "solar-pv-modules",
    slug: "solar-pv-modules",
    name: "Solar PV Modules",
    category: "solar",
    categoryName: "Solar Solutions",
    image: pvImage,
    summary:
      "Photovoltaic modules that convert sunlight into direct-current electrical energy for solar power systems.",
    description:
      "PV modules combine multiple solar cells into a weather-resistant electrical assembly. Modules are connected in series and parallel to create the voltage and current required by the solar inverter or charge controller. Selection should consider module power, operating voltage, current, dimensions, mechanical loading and site conditions.",
    applications: [
      "Rooftop solar",
      "Ground-mounted solar",
      "Off-grid systems",
      "Commercial PV installations",
      "Solar water and agricultural systems",
    ],
    keyFeatures: [
      "Solar energy generation",
      "Series/parallel array configuration",
      "Weather-resistant construction",
      "Multiple module power ratings",
      "Compatibility with modern MPPT systems",
    ],
    technicalParameters: [
      "Rated power: Wp",
      "Open-circuit voltage: Voc",
      "Maximum-power voltage: Vmp",
      "Short-circuit current: Isc",
      "Maximum-power current: Imp",
      "Module dimensions",
      "Temperature coefficient",
    ],
    selection: [
      "Select required system capacity",
      "Check inverter MPPT voltage range",
      "Calculate string voltage at temperature extremes",
      "Check array current",
      "Assess roof/structure loading",
    ],
    featured: true,
  },

  {
    id: "solar-mounting-structures",
    slug: "solar-mounting-structures",
    name: "Solar Mounting Structures",
    category: "solar",
    categoryName: "Solar Solutions",
    image: mountainStructureImage,
    summary:
      "Mechanical support structures for securely mounting photovoltaic modules on rooftops, terraces or ground-based installations.",
    description:
      "Solar mounting structures support PV modules while maintaining the required orientation, tilt, spacing and mechanical stability. Material, anchoring and structural arrangement depend on roof type, wind conditions, module dimensions and installation environment.",
    applications: [
      "Rooftop solar",
      "Terrace installations",
      "Ground-mounted PV",
      "Commercial solar plants",
      "Industrial rooftops",
    ],
    keyFeatures: [
      "Module support and alignment",
      "Corrosion-resistant material options",
      "Roof or ground mounting configurations",
      "Cable-management provisions",
      "Site-specific structural design",
    ],
    technicalParameters: [
      "Material: Aluminium/galvanized steel as specified",
      "Module compatibility",
      "Tilt angle",
      "Wind-load design",
      "Fastening method",
      "Roof/ground interface",
    ],
    selection: [
      "Identify roof or ground type",
      "Check module dimensions",
      "Assess wind loading",
      "Determine tilt/orientation",
      "Confirm waterproofing and anchoring method",
    ],
    featured: false,
  },

  {
    id: "solar-dcdb-acdb",
    slug: "solar-dcdb-acdb",
    name: "Solar DCDB and ACDB",
    category: "solar",
    categoryName: "Solar Solutions",
    image: dcdbImage,
    summary:
      "Dedicated DC and AC distribution/protection boxes for isolating and protecting photovoltaic strings and inverter-side AC circuits.",
    description:
      "DCDBs provide protection and isolation on the PV DC side, while ACDBs provide appropriate protection and isolation between the solar inverter and the AC distribution system. The exact protection arrangement depends on system voltage, current, number of strings and applicable installation requirements.",
    applications: [
      "Rooftop solar systems",
      "Commercial PV installations",
      "Industrial solar plants",
      "Hybrid solar systems",
    ],
    keyFeatures: [
      "DC string isolation",
      "PV-rated protection devices",
      "AC-side isolation and protection",
      "Surge protection options",
      "Organized cable termination",
    ],
    technicalParameters: [
      "DC operating voltage",
      "DC string current",
      "Number of strings",
      "AC voltage/current",
      "SPD rating",
      "Enclosure protection level",
    ],
    selection: [
      "Count PV strings",
      "Determine maximum DC voltage",
      "Determine maximum operating current",
      "Select suitable DC protection",
      "Coordinate AC protection with inverter output",
    ],
    featured: false,
  },

  {
    id: "solar-combiner-boxes",
    slug: "solar-combiner-boxes",
    name: "Solar Combiner Boxes",
    category: "solar",
    categoryName: "Solar Solutions",
    image: combineBoxImage,
    summary:
      "PV string combiner enclosure for grouping multiple photovoltaic strings before connection to the inverter or downstream DC equipment.",
    description:
      "A solar combiner box consolidates multiple PV strings into one or more outgoing circuits and can include string fuses, DC isolators, surge protection and monitoring. The enclosure and components must be rated for the maximum PV voltage and current under the installation conditions.",
    applications: [
      "Commercial rooftop PV",
      "Ground-mounted solar plants",
      "Large PV arrays",
      "Distributed solar strings",
    ],
    keyFeatures: [
      "Multiple PV string inputs",
      "String-level fuse options",
      "DC isolation",
      "Surge protection",
      "Organized PV cable termination",
    ],
    technicalParameters: [
      "Maximum DC voltage",
      "String input count",
      "Maximum string current",
      "Output current",
      "SPD type/rating",
      "Enclosure IP rating",
    ],
    selection: [
      "Count PV strings",
      "Determine string Isc",
      "Check maximum system voltage",
      "Select fuse rating",
      "Coordinate with inverter DC input requirements",
    ],
    featured: false,
  },
];

