import doorBellImage from "../../assets/Bells/doorBellImage.jpeg";
import waterOverflowImage from "../../assets/Bells/waterOverflowImage.jpg";

import { makeProduct } from "../helpers.js";

export const bellProducts = [
  {
    id: "bell-door-bells",
    slug: "door-bells",
    name: "Door Bells",
    category: "bells",
    categoryName: "Bells & Signalling",
    image: doorBellImage,
    summary:
      "Electrical doorbell systems for residential, office and commercial visitor notification.",
    description:
      "Doorbell systems provide an audible or electronic indication when a visitor operates the doorbell switch. Depending on the installation, the system can use a wired push button and chime or other compatible signalling arrangements.",
    applications: [
      "Homes",
      "Apartments",
      "Offices",
      "Shops",
      "Small commercial premises",
    ],
    keyFeatures: [
      "Simple visitor notification",
      "Push-button activation",
      "Audible chime or bell",
      "Wired installation options",
      "Compact indoor receiver",
    ],
    technicalParameters: [
      "Supply voltage",
      "Operating current",
      "Chime type",
      "Sound level",
      "Push-button configuration",
      "Installation type",
    ],
    selection: [
      "Determine supply arrangement",
      "Choose required chime type",
      "Check installation distance",
      "Select compatible push button",
      "Consider indoor/outdoor placement",
    ],
    featured: false,
  },

  {
    id: "bell-water-tank-overflow",
    slug: "water-tank-overflow-alarm",
    name: "Water Tank Overflow Alarm",
    category: "bells",
    categoryName: "Bells & Signalling",
    image: waterOverflowImage,
    summary:
      "Water-level alert system designed to provide an audible warning when a tank reaches a configured high-water level.",
    description:
      "A water-tank overflow alarm uses a suitable level-sensing arrangement to activate an audible warning when the water reaches the defined high-level point. It can help reduce unnecessary water loss and alert users before an overflow occurs. Sensor and electrical installation must be suitable for the tank environment.",
    applications: [
      "Residential overhead tanks",
      "Apartments",
      "Commercial buildings",
      "Schools",
      "Small water-storage systems",
    ],
    keyFeatures: [
      "High-level detection",
      "Audible warning",
      "Simple user notification",
      "Level-sensor integration",
      "Suitable for domestic and small commercial applications",
    ],
    technicalParameters: [
      "Supply voltage",
      "Sensor type",
      "Detection level",
      "Alarm output",
      "Buzzer/sounder rating",
      "Installation environment",
    ],
    selection: [
      "Determine tank type",
      "Select suitable level sensor",
      "Define alarm level",
      "Check sensor mounting arrangement",
      "Provide appropriate electrical protection",
    ],
    featured: true,
  },
];

