import ledlightImage from "../../assets/Lighting/ledlightImage.jpg";
import ledDownlightImage from "../../assets/Lighting/ledDownlightImage.jpg";
import ledPanelImage from "../../assets/Lighting/ledPanelImage.jpg";
import ledFloodImage from "../../assets/Lighting/ledFloodImage.jpg";

import { makeProduct } from "../helpers.js";

export const lightingProducts = [
  {
    id: "lighting-led-lights",
    slug: "led-lights",
    name: "LED Lights",
    category: "lighting",
    categoryName: "LED Lighting",
    image: ledlightImage,
    summary:
      "Energy-efficient LED luminaires for general indoor and outdoor illumination.",
    description:
      "LED luminaires use solid-state light sources to provide efficient general illumination. The appropriate product should be selected according to required illuminance, mounting height, beam distribution, operating environment, colour requirements and electrical characteristics rather than wattage alone.",
    applications: [
      "Homes",
      "Offices",
      "Retail spaces",
      "Commercial buildings",
      "General-purpose areas",
    ],
    keyFeatures: [
      "LED light source",
      "Low maintenance requirements",
      "Multiple colour temperatures",
      "Different mounting configurations",
      "Instant illumination",
    ],
    technicalParameters: [
      "Rated power",
      "Luminous flux",
      "Colour temperature",
      "Colour rendering index",
      "Input voltage",
      "Beam angle",
      "IP rating where applicable",
    ],
    selection: [
      "Determine required illuminance",
      "Calculate room lighting requirement",
      "Select colour temperature",
      "Choose beam distribution",
      "Check mounting arrangement",
    ],
    featured: true,
  },

  {
    id: "lighting-downlights",
    slug: "led-downlights",
    name: "LED Downlights",
    category: "lighting",
    categoryName: "LED Lighting",
    image: ledDownlightImage,
    summary:
      "Recessed or surface-mounted LED luminaires designed for focused general lighting in ceilings and architectural spaces.",
    description:
      "LED downlights provide controlled downward illumination and are commonly used where a clean ceiling appearance and defined light distribution are required. Selection should consider cut-out dimensions, mounting depth, beam angle, glare and the desired illumination level.",
    applications: [
      "Homes",
      "Hotels",
      "Offices",
      "Retail interiors",
      "Restaurants",
    ],
    keyFeatures: [
      "Compact LED construction",
      "Recessed mounting options",
      "Multiple beam angles",
      "Different colour temperatures",
      "Low maintenance operation",
    ],
    technicalParameters: [
      "Rated power",
      "Luminous flux",
      "Cut-out diameter",
      "Colour temperature",
      "Beam angle",
      "Input voltage",
      "CRI",
    ],
    selection: [
      "Measure ceiling cut-out",
      "Determine required lumen output",
      "Select beam angle",
      "Check ceiling depth",
      "Choose colour temperature and CRI",
    ],
    featured: false,
  },

  {
    id: "lighting-panel-lights",
    slug: "led-panel-lights",
    name: "LED Panel Lights",
    category: "lighting",
    categoryName: "LED Lighting",
    image: ledPanelImage,
    summary:
      "Flat LED luminaires designed for uniform illumination in offices, classrooms, commercial spaces and other indoor environments.",
    description:
      "LED panel lights provide broad and relatively uniform light distribution from a slim fixture. They are commonly used in suspended-grid or surface-mounted ceilings. Selection should consider room dimensions, required illumination, glare control and ceiling compatibility.",
    applications: [
      "Offices",
      "Classrooms",
      "Hospitals",
      "Retail spaces",
      "Commercial buildings",
    ],
    keyFeatures: [
      "Slim-profile construction",
      "Uniform light distribution",
      "Recessed, surface or suspended options",
      "Low maintenance",
      "Multiple colour temperatures",
    ],
    technicalParameters: [
      "Rated power",
      "Luminous flux",
      "Panel dimensions",
      "Colour temperature",
      "CRI",
      "UGR/glare characteristic",
      "Input voltage",
    ],
    selection: [
      "Determine room dimensions",
      "Calculate required number of fixtures",
      "Consider ceiling type",
      "Check glare requirements",
      "Select suitable lumen output",
    ],
    featured: true,
  },

  {
    id: "lighting-flood-lights",
    slug: "led-flood-lights",
    name: "LED Flood Lights",
    category: "lighting",
    categoryName: "LED Lighting",
    image: ledFloodImage,
    summary:
      "High-output directional LED luminaires for outdoor areas, facades, yards and security illumination.",
    description:
      "LED flood lights provide concentrated or broad-area illumination for outdoor and industrial spaces. Selection depends on mounting height, target area, beam angle, environmental exposure and required illuminance. Outdoor installations should use an enclosure with an appropriate ingress-protection rating.",
    applications: [
      "Industrial yards",
      "Building facades",
      "Parking areas",
      "Security lighting",
      "Outdoor work areas",
    ],
    keyFeatures: [
      "High-output LED illumination",
      "Directional beam options",
      "Outdoor-rated construction options",
      "Adjustable mounting brackets",
      "Low maintenance operation",
    ],
    technicalParameters: [
      "Rated power",
      "Luminous flux",
      "Beam angle",
      "Input voltage",
      "Colour temperature",
      "IP rating",
      "Mounting height",
    ],
    selection: [
      "Determine mounting height",
      "Define target area",
      "Calculate required illuminance",
      "Select beam angle",
      "Check environmental and IP requirements",
    ],
    featured: true,
  },
];

