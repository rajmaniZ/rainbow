import pureSineImage from "../../assets/Inverter/pureSineImage.jpg";
import industrialInverterImage from "../../assets/Inverter/industrial.jpg";
import hybridSolarImage from "../../assets/Inverter/hybridSolarImage.jpg";

import { makeProduct } from "../helpers.js";

export const inverterProducts = [
  {
    id: "inverter-pure-sine-wave",
    slug: "pure-sine-wave-inverter",
    name: "Pure Sine Wave Inverter",
    category: "inverters",
    categoryName: "Inverters",
    image: pureSineImage,
    summary:
      "Inverter producing a controlled AC waveform for household, office and sensitive electronic loads.",
    description:
      "A pure sine wave inverter converts DC energy from a battery bank into AC power with a waveform designed to closely match utility supply characteristics. It is suitable for loads containing electronic power supplies, motors and other equipment where waveform quality matters. Battery sizing determines the available backup duration.",
    applications: [
      "Home backup",
      "Office equipment",
      "Networking equipment",
      "Televisions and electronics",
      "Small appliances",
    ],
    keyFeatures: [
      "Pure sine wave output",
      "Battery-backed operation",
      "Protection against overload and low battery",
      "Multiple output-power ratings",
      "Automatic changeover options",
    ],
    technicalParameters: [
      "Output waveform: Pure sine wave",
      "Input: DC battery supply",
      "Output: AC",
      "Capacity: VA/W dependent",
      "Battery voltage: Model dependent",
      "Efficiency: Load and model dependent",
    ],
    selection: [
      "Calculate running load in watts",
      "Identify motor/compressor starting loads",
      "Select battery voltage",
      "Calculate required backup time",
      "Maintain suitable capacity margin",
    ],
    featured: true,
  },

  {
    id: "inverter-industrial",
    slug: "industrial-inverter",
    name: "Industrial Inverter",
    category: "inverters",
    categoryName: "Inverters",
    image: industrialInverterImage,
    summary:
      "Heavy-duty DC-to-AC power conversion system designed for industrial electrical loads and specialized backup or power-conversion applications.",
    description:
      "Industrial inverters are engineered for applications where higher power levels, demanding duty cycles or integration with industrial control systems require a more robust power-conversion platform. Final architecture depends on the DC source, output voltage, load profile, environmental conditions and required control functions.",
    applications: [
      "Industrial machinery",
      "Automation systems",
      "Telecommunication infrastructure",
      "Remote industrial loads",
      "Backup power systems",
    ],
    keyFeatures: [
      "Industrial-duty construction options",
      "High-power DC-to-AC conversion",
      "Protection and monitoring functions",
      "Control-system integration",
      "Custom battery/DC-source configurations",
    ],
    technicalParameters: [
      "DC input voltage",
      "AC output voltage",
      "Rated power",
      "Peak/overload capability",
      "Output frequency",
      "Cooling method",
      "Protection functions",
    ],
    selection: [
      "Determine DC source voltage",
      "Calculate continuous and peak load",
      "Check motor starting requirements",
      "Assess ambient/environmental conditions",
      "Define control and monitoring interfaces",
    ],
    featured: false,
  },

  {
    id: "inverter-hybrid-solar",
    slug: "hybrid-solar-inverter",
    name: "Hybrid Solar Inverter",
    category: "inverters",
    categoryName: "Inverters",
    image: hybridSolarImage,
    summary:
      "Hybrid inverter for coordinating solar generation, battery storage and grid supply in a configurable energy system.",
    description:
      "A hybrid solar inverter combines power-conversion functions for photovoltaic generation and battery storage with controlled interaction with the utility supply. Depending on the model, it can prioritize solar energy, charge batteries from solar or grid power, supply loads from stored energy and transfer between available sources.",
    applications: [
      "Residential solar backup",
      "Small commercial solar systems",
      "Off-grid and weak-grid applications",
      "Battery energy storage",
      "Solar self-consumption systems",
    ],
    keyFeatures: [
      "Solar PV input",
      "Battery charging and discharging",
      "Grid interaction",
      "Configurable energy-priority modes",
      "Backup output on supported models",
    ],
    technicalParameters: [
      "PV input voltage/current",
      "Battery voltage",
      "AC output power",
      "MPPT operating range",
      "Maximum PV power",
      "Grid input characteristics",
      "Communication interface",
    ],
    selection: [
      "Determine PV array size",
      "Select battery voltage and capacity",
      "Calculate peak AC load",
      "Check grid connection requirements",
      "Define backup-load requirements",
    ],
    featured: true,
  },
];

