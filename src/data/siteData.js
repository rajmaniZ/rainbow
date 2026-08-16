
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaLandmark,
  FaBatteryFull,
  FaBolt,
  FaSolarPanel,
  FaCogs,
} from "react-icons/fa";
export const industries = [
  {
    id: "residential",
    title: "Residential",
    description:
      "Wiring, lighting, backup power, inverters and practical electrical solutions.",
    icon: FaHome,
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "UPS, distribution, lighting, panels and maintenance for business environments.",
    icon: FaBuilding,
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Power distribution, motor control, automation, protection and VFD systems.",
    icon: FaIndustry,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Station electrical works, lighting, panels, supply, testing and commissioning.",
    icon: FaLandmark,
  },
];
export const brands = [
  "Havells",
  "Orient Electric",
  "Anchor",
  "Exide",
  "Polycab",
  "KEI",
];
export const expertise = [
  [
    "Power Backup",
    "UPS systems, batteries, inverters and stabilizers.",
    FaBatteryFull,
  ],
  [
    "Electrical Distribution",
    "LT/HT, PCC, MCC, APFC and feeder solutions.",
    FaBolt,
  ],
  ["Automation", "PLC, HMI, VFD, SCADA and instrumentation panels.", FaCogs],
  [
    "Solar Solutions",
    "On-grid, off-grid and hybrid solar systems.",
    FaSolarPanel,
  ],
];




export const whyRainbow = [
  [
    "Complete Scope",
    "Supply, installation, manufacturing, servicing and maintenance under one company.",
  ],
  [
    "Project Experience",
    "Comprehensive electrical works are being executed across 17 North Eastern Railway stations.",
  ],
  [
    "Engineering Support",
    "Product selection can be aligned with load, application, site and project requirements.",
  ],
  [
    "Lifecycle Service",
    "AMC, preventive maintenance, breakdown support, battery testing and troubleshooting.",
  ],
  [
    "Protection Focus",
    "Switchgear, protection, control and testing are part of the electrical solution ecosystem.",
  ],
  [
    "Direct Enquiry",
    "No login and no forced online payment — build a requirement and discuss it directly.",
  ],
];
