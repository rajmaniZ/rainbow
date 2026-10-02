import generalFanImage from "../../assets/Fan/generalFanImage.jpg";

import { makeProduct } from "../helpers.js";

export const fanProducts = [
  {
    id: "fan-general",
    slug: "general-purpose-fans",
    name: "General Purpose Fans",
    category: "fans",
    categoryName: "Fans & Ventilation",
    image: generalFanImage,
    summary:
      "Electric fans for air circulation and ventilation in residential, commercial and general indoor environments.",
    description:
      "General-purpose fans move air to improve circulation and occupant comfort. Selection should consider room size, required airflow, mounting position, noise expectations and available electrical supply. Different fan constructions are suitable for ceiling, wall or portable applications.",
    applications: [
      "Homes",
      "Offices",
      "Shops",
      "Commercial spaces",
      "General indoor ventilation",
    ],
    keyFeatures: [
      "Air circulation",
      "Multiple mounting configurations",
      "Different speed settings",
      "Energy-efficient motor options",
      "Indoor-use variants",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated power",
      "Motor type",
      "Air delivery",
      "Speed",
      "Mounting configuration",
    ],
    selection: [
      "Determine room size",
      "Select required air delivery",
      "Choose mounting type",
      "Check available supply",
      "Consider operating noise",
    ],
    featured: false,
  },
];

