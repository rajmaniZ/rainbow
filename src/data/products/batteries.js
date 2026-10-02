import smfImage from "../../assets/Batteries/smfImage.jpeg";
import tubularImage from "../../assets/Batteries/tubularImage.jpeg";
import lithiumImage from "../../assets/Batteries/lithiumImage.jpeg";
import batteryBankImage from "../../assets/Batteries/batteryBankImage.jpeg";
import batteryCabsImage from "../../assets/Batteries/batteryCabsImage.jpg";
import batterymonitoringSystemImage from "../../assets/Batteries/batterymonitoringSystemImage.jpg";

import { makeProduct } from "../helpers.js";

export const batteryProducts = [
  {
    id: "battery-smf-vrla",
    slug: "smf-vrla-battery",
    name: "SMF VRLA Battery",
    category: "batteries",
    categoryName: "Batteries",
    image: smfImage,
    summary:
      "Sealed maintenance-free VRLA battery designed for UPS, backup power and standby applications.",
    description:
      "SMF VRLA batteries use a valve-regulated lead-acid construction that minimizes routine electrolyte maintenance and is well suited to controlled indoor backup-power installations. Correct sizing depends on the UPS DC voltage, required autonomy, discharge rate, ambient temperature and battery manufacturer's recommended operating limits.",
    applications: [
      "Online UPS systems",
      "Emergency backup systems",
      "Telecommunication equipment",
      "Security and surveillance systems",
      "Computer and networking equipment",
    ],
    keyFeatures: [
      "Valve-regulated lead-acid construction",
      "Low routine electrolyte maintenance",
      "Suitable for standby applications",
      "Compact installation options",
      "Series-string configurations for UPS systems",
    ],
    technicalParameters: [
      "Technology: VRLA",
      "Nominal voltage: Typically 12 V per block",
      "Capacity: Selected according to Ah requirement",
      "Charging method: UPS-compatible float charging",
      "Installation: Rack or cabinet dependent",
      "Service life: Dependent on temperature, cycling and charging conditions",
    ],
    selection: [
      "Match the UPS DC bus voltage",
      "Calculate required Ah from load and autonomy",
      "Check discharge-rate requirements",
      "Allow for operating-temperature effects",
      "Confirm cabinet and terminal dimensions",
    ],
    featured: true,
  },

  {
    id: "battery-tubular",
    slug: "tubular-battery",
    name: "Tubular Battery",
    category: "batteries",
    categoryName: "Batteries",
    image: tubularImage,
    summary:
      "Deep-cycle lead-acid tubular battery intended for inverter and backup applications requiring repeated discharge and recharge.",
    description:
      "Tubular batteries use positive tubular plates designed for cycling applications. They are commonly used with inverter systems and other backup installations where longer-duration discharge is required. Installation should include suitable ventilation, charging control and protection against deep discharge.",
    applications: [
      "Home inverter systems",
      "Small commercial backup",
      "Long-duration backup systems",
      "Off-grid power systems",
      "Rural power backup",
    ],
    keyFeatures: [
      "Tubular positive-plate construction",
      "Designed for cyclic operation",
      "Longer-duration discharge applications",
      "Available in multiple capacities",
      "Suitable for inverter battery banks",
    ],
    technicalParameters: [
      "Technology: Tubular lead-acid",
      "Nominal voltage: Typically 12 V",
      "Capacity: Ah rating selected by application",
      "Charging: Compatible charger required",
      "Electrolyte: Flooded design where applicable",
      "Ventilation: Required according to installation design",
    ],
    selection: [
      "Determine daily backup requirement",
      "Calculate inverter load in watts",
      "Select required battery Ah",
      "Provide suitable ventilation",
      "Check charging current and inverter compatibility",
    ],
    featured: false,
  },

  {
    id: "battery-lithium-ion",
    slug: "lithium-ion-battery",
    name: "Lithium Ion Battery",
    category: "batteries",
    categoryName: "Batteries",
    image: lithiumImage,
    summary:
      "Rechargeable lithium battery system for applications requiring high usable energy density, controlled charging and compact backup storage.",
    description:
      "Lithium-ion battery systems can provide higher usable energy density and lower weight than many conventional lead-acid configurations. A complete system normally includes a battery-management system that supervises cell voltage, temperature, current and protection conditions. Compatibility with the inverter or UPS charging strategy is essential.",
    applications: [
      "Modern UPS installations",
      "Solar energy storage",
      "Telecommunication backup",
      "Commercial energy storage",
      "Space-constrained backup systems",
    ],
    keyFeatures: [
      "High energy density",
      "Integrated battery-management options",
      "Lower weight than comparable lead-acid banks",
      "High usable depth-of-discharge potential",
      "Monitoring and protection capabilities",
    ],
    technicalParameters: [
      "Chemistry: Model dependent",
      "Nominal system voltage: Configuration dependent",
      "Energy capacity: kWh dependent",
      "BMS: Required for managed battery systems",
      "Cycle life: Application and operating-condition dependent",
      "Communication: CAN/RS485 or other interface where supported",
    ],
    selection: [
      "Confirm inverter/UPS lithium compatibility",
      "Select chemistry and nominal voltage",
      "Calculate usable energy requirement",
      "Check BMS communication requirements",
      "Review thermal and installation requirements",
    ],
    featured: true,
  },

  {
    id: "battery-banks",
    slug: "battery-banks",
    name: "UPS Battery Bank",
    category: "batteries",
    categoryName: "Batteries",
    image: batteryBankImage,
    summary:
      "Engineered battery-bank assembly consisting of series and parallel battery connections to provide the required UPS DC voltage and energy capacity.",
    description:
      "A UPS battery bank combines individual battery blocks or cells into a configured DC source. The design must maintain the UPS manufacturer's required DC voltage while providing enough stored energy for the specified autonomy. Cable sizing, fusing, isolation, interconnections and battery-room conditions are part of the overall battery-bank design.",
    applications: [
      "Large online UPS systems",
      "Industrial backup power",
      "Data-centre UPS systems",
      "Critical infrastructure",
      "Telecommunication backup",
    ],
    keyFeatures: [
      "Engineered series-string configuration",
      "Scalable Ah capacity",
      "Dedicated protection and isolation",
      "Battery interconnection system",
      "Suitable for centralized UPS backup",
    ],
    technicalParameters: [
      "DC voltage: UPS-specific",
      "Capacity: Ah",
      "Energy: Approximate kWh based on nominal voltage and capacity",
      "Battery type: VRLA/tubular/lithium as specified",
      "Protection: Fuse/MCB/MCCB as engineered",
      "Interconnection: Cable or busbar dependent",
    ],
    selection: [
      "UPS DC voltage",
      "Required autonomy",
      "UPS discharge characteristics",
      "Battery technology",
      "Available installation space",
      "Battery protection and isolation requirements",
    ],
    featured: true,
  },

  {
    id: "battery-cabinets",
    slug: "battery-cabinets",
    name: "Battery Cabinets",
    category: "batteries",
    categoryName: "Batteries",
    image: batteryCabsImage,
    summary:
      "Dedicated battery enclosures for organized installation, protection and maintenance of UPS or backup-power battery strings.",
    description:
      "Battery cabinets provide a controlled mechanical arrangement for battery blocks, terminals and interconnections. They help organize battery strings and provide defined cable-entry and maintenance access. Cabinet dimensions, ventilation and load capacity must be matched to the selected battery technology.",
    applications: [
      "UPS battery installations",
      "Commercial backup systems",
      "Server-room battery banks",
      "Industrial battery rooms",
      "Solar storage installations",
    ],
    keyFeatures: [
      "Organized battery placement",
      "Protected interconnections",
      "Maintenance access",
      "Cable-entry provisions",
      "Battery-specific ventilation options",
    ],
    technicalParameters: [
      "Battery quantity",
      "Battery dimensions",
      "Cabinet load capacity",
      "DC system voltage",
      "Enclosure dimensions",
      "Ventilation arrangement",
    ],
    selection: [
      "Confirm battery block dimensions",
      "Calculate total battery weight",
      "Check number of battery strings",
      "Provide suitable ventilation",
      "Plan cable entry and maintenance clearance",
    ],
    featured: false,
  },

  {
    id: "battery-monitoring-systems",
    slug: "battery-monitoring-systems",
    name: "Battery Monitoring System",
    category: "batteries",
    categoryName: "Batteries",
    image: batterymonitoringSystemImage,
    summary:
      "Monitoring solution for observing battery voltage, temperature and selected health indicators in critical backup-power systems.",
    description:
      "Battery monitoring systems provide additional visibility into battery-bank condition beyond the basic UPS battery alarm. Depending on the system, measurements can be collected at block or string level and stored for trend analysis. This can help maintenance teams identify abnormal batteries before they cause a complete backup-system failure.",
    applications: [
      "Data-centre battery banks",
      "Critical UPS installations",
      "Telecommunication backup",
      "Industrial DC systems",
      "Preventive battery maintenance",
    ],
    keyFeatures: [
      "Battery-level monitoring options",
      "Voltage measurement",
      "Temperature monitoring",
      "Alarm and event reporting",
      "Historical data and trend analysis",
    ],
    technicalParameters: [
      "Monitored battery count",
      "Voltage measurement range",
      "Temperature channels",
      "Communication interface",
      "Alarm thresholds",
      "Data-logging capability",
    ],
    selection: [
      "Determine battery type",
      "Count individual battery blocks",
      "Define required monitoring depth",
      "Select communication protocol",
      "Confirm compatibility with existing UPS infrastructure",
    ],
    featured: false,
  },
];

