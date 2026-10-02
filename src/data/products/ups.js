import singleUPS from "../../assets/singleUPS.jpeg";
import threePhaseImage from "../../assets/threePhaseImage.jpeg";
import industrialImage from "../../assets/industrialImage.jpeg";
import modularImage from "../../assets/modularImage.jpeg";
import rackImage from "../../assets/rackImage.jpeg";
import towerImage from "../../assets/towerImage.jpeg";
import medicalImage from "../../assets/medicalImage.jpeg";
import dataCenterImage from "../../assets/dataCenterImage.jpeg";

import { makeProduct } from "../helpers.js";

export const upsProducts = [
  makeProduct({
    id: "ups-single-phase-line-interactive",
    name: "Single Phase Line Interactive UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: singleUPS,
    summary:
      "Single-phase backup power system with voltage regulation for computers, networking equipment and other moderate-power electronic loads.",
    description:
      "The line-interactive UPS uses an automatic voltage regulation stage to correct moderate input-voltage fluctuations without continuously drawing battery energy for every correction. When the incoming supply fails or moves outside the permitted operating window, the inverter supplies the connected load from the battery system. It is suited to applications where basic power conditioning and short-duration backup are required.",
    applications: [
      "Desktop computers and workstations",
      "Small network equipment",
      "Point-of-sale systems",
      "Small office communication equipment",
      "Home office electronics",
    ],
    keyFeatures: [
      "Single-phase input and output configuration",
      "Automatic voltage regulation",
      "Battery-backed operation during supply interruption",
      "Protection against common power disturbances",
      "Compact installation for small electrical loads",
    ],
    technicalParameters: [
      "Rated capacity: application dependent",
      "Input: single-phase AC",
      "Output: single-phase AC",
      "Topology: line-interactive",
      "Battery voltage: model dependent",
      "Backup time: determined by load and battery capacity",
      "Transfer characteristics: model dependent",
    ],
    selection: [
      "Calculate the actual connected load",
      "Allow suitable capacity margin",
      "Check input-voltage variation at the site",
      "Confirm required backup duration",
      "Verify battery replacement and service availability",
    ],
    featured: false,
  }),

  makeProduct({
    id: "ups-single-phase-online",
    name: "Single Phase Online UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: singleUPS,
    summary:
      "Single-phase double-conversion UPS for sensitive electronic equipment requiring continuously conditioned output power.",
    description:
      "A single-phase online UPS separates the connected load from many disturbances on the incoming utility supply through a rectifier and inverter power path. The inverter normally supplies the load, while the battery system becomes the energy source when the normal AC input is unavailable. This topology is appropriate for IT equipment, communication systems and other loads where output quality is more important than simple standby backup.",
    applications: [
      "Servers",
      "Network switches and routers",
      "Security systems",
      "Laboratory electronics",
      "Business-critical workstations",
    ],
    keyFeatures: [
      "Online double-conversion topology",
      "Continuous inverter-fed output",
      "Input power conditioning",
      "Battery operation during mains failure",
      "Static bypass capability on supported configurations",
    ],
    technicalParameters: [
      "Rated apparent power: selected by model",
      "Input: single-phase AC",
      "Output: single-phase AC",
      "Topology: online double conversion",
      "Output frequency: model dependent",
      "Battery configuration: model dependent",
      "Efficiency: dependent on operating mode and load",
    ],
    selection: [
      "Connected kVA and kW demand",
      "Required autonomy",
      "Input and output voltage",
      "Power-factor characteristics of the load",
      "Battery-room or cabinet arrangement",
    ],
    featured: true,
  }),

  makeProduct({
    id: "ups-three-phase-online",
    name: "Three Phase Online UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: threePhaseImage,
    summary:
      "Three-phase online UPS platform for higher-capacity critical loads and distributed industrial or commercial power systems.",
    description:
      "The three-phase online UPS is designed around a continuously conditioned power path suitable for larger electrical loads. Three-phase input and output arrangements can reduce distribution current per phase and integrate more naturally with industrial and commercial electrical infrastructure. Final configuration depends on the required kVA, load power factor, battery autonomy and upstream/downstream protection.",
    applications: [
      "Server rooms",
      "Industrial automation",
      "Telecommunication infrastructure",
      "Large office facilities",
      "Process-control systems",
      "Critical commercial loads",
    ],
    keyFeatures: [
      "Three-phase power architecture",
      "Continuous inverter operation",
      "Centralized battery backup",
      "Protection and monitoring functions",
      "Scalable electrical distribution configuration",
    ],
    technicalParameters: [
      "Rated capacity: site specific",
      "Input: three-phase AC",
      "Output: three-phase or configured output arrangement",
      "Battery bank voltage: model dependent",
      "Frequency: according to system configuration",
      "Bypass rating: selected with the UPS design",
      "Short-circuit protection: coordinated with installation",
    ],
    selection: [
      "Three-phase load profile",
      "Required kVA and kW",
      "Phase balancing",
      "Battery autonomy",
      "Bypass and maintenance strategy",
      "Available electrical-room space",
    ],
    featured: true,
  }),

  makeProduct({
    id: "ups-industrial",
    name: "Industrial UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: industrialImage,
    summary:
      "Heavy-duty UPS configuration intended for demanding industrial loads, control systems and electrically harsh operating environments.",
    description:
      "Industrial UPS systems are configured for applications where power continuity is important and the operating environment may impose additional thermal, electrical or mechanical requirements. Depending on the design, the system can support industrial control equipment, process instrumentation, PLC-based systems and other critical loads. Selection must consider load transients, ambient conditions, battery technology and protection coordination.",
    applications: [
      "Manufacturing plants",
      "Process-control systems",
      "Industrial automation",
      "Instrumentation systems",
      "Remote industrial facilities",
      "Critical machinery controls",
    ],
    keyFeatures: [
      "Industrial-duty construction options",
      "High tolerance for demanding electrical environments",
      "Online power conversion",
      "Industrial battery-bank integration",
      "Maintenance and bypass provisions",
    ],
    technicalParameters: [
      "Rated capacity",
      "Input/output phase configuration",
      "Input voltage range",
      "Output voltage regulation",
      "Battery voltage",
      "Overload capability",
      "Ambient operating range",
      "Enclosure and protection requirements",
    ],
    selection: [
      "Motor and control-system load characteristics",
      "Starting and transient currents",
      "Ambient temperature",
      "Dust and environmental conditions",
      "Required autonomy",
      "Industrial maintenance requirements",
    ],
    featured: true,
  }),

  makeProduct({
    id: "ups-modular",
    name: "Modular UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: modularImage,
    summary:
      "Modular UPS architecture using independent power modules to support capacity expansion and maintainability.",
    description:
      "A modular UPS divides the power-conversion system into replaceable modules installed within a common UPS frame. Additional modules can be added when the electrical demand increases, subject to the frame and system design. The architecture can also support module-level maintenance, redundancy planning and reduced dependence on a single large conversion block.",
    applications: [
      "Data centres",
      "Enterprise server rooms",
      "Financial infrastructure",
      "Telecommunication facilities",
      "Growing commercial IT installations",
    ],
    keyFeatures: [
      "Power modules in a common frame",
      "Capacity expansion through additional modules",
      "N+1 redundancy options",
      "Module-level serviceability",
      "Centralized monitoring and control",
    ],
    technicalParameters: [
      "Frame capacity",
      "Individual module rating",
      "Number of installed modules",
      "Number of redundant modules",
      "Input/output configuration",
      "Battery architecture",
      "Bypass rating",
    ],
    selection: [
      "Current and future load",
      "Required redundancy level",
      "Available frame capacity",
      "Module replacement strategy",
      "Criticality of the connected load",
    ],
    featured: true,
  }),

  makeProduct({
    id: "ups-rack-mount",
    name: "Rack Mount UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: rackImage,
    summary:
      "Rack-integrated UPS configuration designed to occupy standardized equipment-rack space in IT and communication environments.",
    description:
      "Rack-mount UPS systems place backup-power electronics within a rack-compatible enclosure so the UPS can be installed close to servers, switches and other network equipment. This arrangement simplifies rack-level power protection and can reduce additional floor space requirements. Actual rack height, output connectors and battery arrangement vary by model.",
    applications: [
      "Server racks",
      "Network cabinets",
      "Telecommunication racks",
      "Security equipment racks",
      "Edge computing installations",
    ],
    keyFeatures: [
      "Rack-compatible mechanical format",
      "Short cable path to protected equipment",
      "Battery-backed output",
      "Front or rear service access depending on design",
      "Monitoring options on supported models",
    ],
    technicalParameters: [
      "Rack height",
      "Rated kVA/kW",
      "Input voltage",
      "Output voltage",
      "Output receptacle configuration",
      "Battery configuration",
      "Runtime at defined load",
    ],
    selection: [
      "Available rack units",
      "Equipment power draw",
      "Rack power-distribution arrangement",
      "Required runtime",
      "Input/output connector requirements",
    ],
    featured: false,
  }),

  makeProduct({
    id: "ups-tower",
    name: "Tower UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: towerImage,
    summary:
      "Floor-standing UPS configuration for installations where a dedicated vertical enclosure is preferred over rack mounting.",
    description:
      "Tower UPS systems use a standalone enclosure that can be positioned beside or near the protected equipment. The form factor is useful where rack installation is unavailable or where the UPS and battery system require independent floor space. Capacity, battery autonomy and bypass arrangements are selected according to the connected load.",
    applications: [
      "Office IT systems",
      "Small server rooms",
      "CCTV infrastructure",
      "Laboratories",
      "Communication equipment",
    ],
    keyFeatures: [
      "Standalone floor-mounted construction",
      "Simple equipment-room installation",
      "Online power-conditioning options",
      "Integrated or external battery options",
      "Front-access service arrangements on selected designs",
    ],
    technicalParameters: [
      "Rated kVA/kW",
      "Input voltage",
      "Output voltage",
      "Battery voltage",
      "Runtime",
      "Dimensions",
      "Weight",
    ],
    selection: [
      "Floor-space availability",
      "Connected load",
      "Required autonomy",
      "Battery expansion requirements",
      "Access for maintenance",
    ],
    featured: false,
  }),

  makeProduct({
    id: "ups-medical-grade",
    name: "Medical Grade UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: medicalImage,
    summary:
      "Critical-power UPS configuration for healthcare equipment where continuity, controlled electrical performance and appropriate installation practices are required.",
    description:
      "Medical applications can require a higher level of attention to electrical continuity, leakage-current characteristics, grounding arrangements and equipment compatibility than ordinary office loads. A medical-grade UPS must therefore be selected as part of the complete healthcare electrical design rather than treated as a generic UPS replacement. The final specification depends on the medical equipment and applicable installation requirements.",
    applications: [
      "Diagnostic equipment",
      "Clinical workstations",
      "Medical imaging support systems",
      "Laboratory equipment",
      "Healthcare IT infrastructure",
    ],
    keyFeatures: [
      "Continuous conditioned power",
      "Application-specific electrical isolation options",
      "Battery-backed operation",
      "Monitoring and alarm capability",
      "Designed for critical healthcare loads",
    ],
    technicalParameters: [
      "Rated capacity",
      "Input/output voltage",
      "Leakage-current characteristics",
      "Isolation arrangement where required",
      "Battery autonomy",
      "Transfer/bypass arrangement",
      "Applicable medical installation requirements",
    ],
    selection: [
      "Medical equipment manufacturer requirements",
      "Load kVA and kW",
      "Required backup duration",
      "Electrical isolation requirements",
      "Healthcare facility power architecture",
    ],
    featured: true,
  }),

  makeProduct({
    id: "ups-data-center",
    name: "Data Center UPS",
    category: "ups",
    categoryName: "Online UPS Systems",
    image: dataCenterImage,
    summary:
      "High-availability UPS architecture for data-centre electrical infrastructure with redundancy, monitoring and controlled bypass requirements.",
    description:
      "Data-centre UPS systems are engineered around availability, maintainability and predictable power delivery. Depending on the facility design, systems can use parallel UPS units, modular architecture, N+1 redundancy, static bypass systems and centralized monitoring. The UPS specification must be coordinated with generators, distribution boards, PDUs, battery systems and the data-centre load profile.",
    applications: [
      "Data centres",
      "Cloud infrastructure",
      "Enterprise server rooms",
      "Network operations centres",
      "Telecommunication core facilities",
    ],
    keyFeatures: [
      "High-availability architecture",
      "Parallel and redundant configuration options",
      "Online double conversion",
      "Static and maintenance bypass provisions",
      "Remote monitoring integration",
    ],
    technicalParameters: [
      "Total UPS capacity",
      "Module/unit rating",
      "Redundancy configuration",
      "Input/output topology",
      "Battery autonomy",
      "Bypass capacity",
      "Efficiency operating profile",
      "Monitoring interface",
    ],
    selection: [
      "Critical IT load",
      "Required availability target",
      "N+1 or other redundancy strategy",
      "Generator compatibility",
      "Battery autonomy",
      "Maintenance without load interruption",
      "Future capacity growth",
    ],
    featured: true,
  }),
];

