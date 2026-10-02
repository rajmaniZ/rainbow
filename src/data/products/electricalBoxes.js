import gangBoxeImage from "../../assets/Electrical/gangBoxeImage.jpg";
import concealedImage from "../../assets/Electrical/concealedImage.jpg";
import fanBoxImage from "../../assets/Electrical/fanBoxImage.jpg";
import meterBoxImage from "../../assets/Electrical/meterBoxImage.jpg";

import { makeProduct } from "../helpers.js";

export const electricalBoxProducts = [
  {
    id: "box-gang-boxes",
    slug: "gang-boxes",
    name: "Electrical Gang Boxes",
    category: "electrical-boxes",
    categoryName: "Electrical Boxes & Enclosures",
    image: gangBoxeImage,
    summary:
      "Electrical mounting boxes used to house switches, sockets and modular wiring accessories.",
    description:
      "Gang boxes provide the recessed or surface mounting space required for electrical accessories. The box depth and module capacity should be matched to the selected switch/socket system and wiring arrangement.",
    applications: [
      "Residential construction",
      "Office wiring",
      "Commercial interiors",
      "Renovation projects",
      "Modular switch installations",
    ],
    keyFeatures: [
      "Single and multiple-gang configurations",
      "Flush or surface mounting",
      "Accessory mounting provisions",
      "Multiple depth options",
      "Cable-entry openings",
    ],
    technicalParameters: [
      "Gang count",
      "Box depth",
      "Material",
      "Mounting type",
      "Cable-entry arrangement",
    ],
    selection: [
      "Determine accessory module count",
      "Select required box depth",
      "Check wall construction",
      "Plan cable-entry direction",
      "Match box to accessory system",
    ],
    featured: false,
  },

  {
    id: "box-concealed",
    slug: "concealed-electrical-boxes",
    name: "Concealed Electrical Boxes",
    category: "electrical-boxes",
    categoryName: "Electrical Boxes & Enclosures",
    image: concealedImage,
    summary:
      "Recessed electrical boxes installed within walls to provide mounting space for wiring accessories and junction connections.",
    description:
      "Concealed boxes are installed inside wall cavities so switches and sockets can sit flush with the finished wall surface. Correct box depth and positioning are important for safe wiring and proper accessory fitment.",
    applications: [
      "New residential construction",
      "Office fit-outs",
      "Commercial interiors",
      "Hotel electrical installations",
      "Building renovation",
    ],
    keyFeatures: [
      "Wall-recessed installation",
      "Accessory mounting points",
      "Cable-entry provisions",
      "Multiple sizes",
      "Flush-finish compatibility",
    ],
    technicalParameters: [
      "Width and height",
      "Depth",
      "Material",
      "Mounting method",
      "Cable-entry points",
    ],
    selection: [
      "Check wall construction",
      "Determine accessory dimensions",
      "Select sufficient internal depth",
      "Plan cable routing",
      "Confirm finishing requirements",
    ],
    featured: false,
  },

  {
    id: "box-fan-boxes",
    slug: "fan-boxes",
    name: "Ceiling Fan Boxes",
    category: "electrical-boxes",
    categoryName: "Electrical Boxes & Enclosures",
    image: fanBoxImage,
    summary:
      "Ceiling mounting boxes designed to provide a secure electrical and mechanical mounting point for compatible ceiling fans.",
    description:
      "Fan boxes are intended to provide a suitable connection point and mechanical support arrangement for ceiling-mounted fans. The selected box and fixing method must be capable of supporting the fan assembly and the dynamic forces associated with operation.",
    applications: [
      "Residential buildings",
      "Offices",
      "Hotels",
      "Commercial buildings",
      "Institutional facilities",
    ],
    keyFeatures: [
      "Ceiling mounting",
      "Fan-support arrangement",
      "Electrical cable-entry provision",
      "Multiple mounting configurations",
      "Construction-specific installation options",
    ],
    technicalParameters: [
      "Fan mounting compatibility",
      "Load capacity",
      "Material",
      "Mounting method",
      "Cable-entry arrangement",
    ],
    selection: [
      "Check fan weight",
      "Verify structural fixing",
      "Select compatible mounting pattern",
      "Confirm ceiling construction",
      "Provide suitable cable termination",
    ],
    featured: false,
  },

  {
    id: "box-meter-boxes",
    slug: "meter-boxes",
    name: "Electrical Meter Boxes",
    category: "electrical-boxes",
    categoryName: "Electrical Boxes & Enclosures",
    image: meterBoxImage,
    summary:
      "Protective enclosures designed to house electrical energy meters and associated service connections.",
    description:
      "Meter boxes provide a defined and protected installation space for electrical meters and related service wiring. Dimensions, sealing, visibility and access requirements depend on the utility and installation arrangement.",
    applications: [
      "Residential meter installations",
      "Commercial electrical connections",
      "Utility service points",
      "Multi-occupancy buildings",
      "Electrical renovation",
    ],
    keyFeatures: [
      "Meter mounting provision",
      "Cable-entry openings",
      "Protective enclosure",
      "Inspection access",
      "Utility-specific configurations",
    ],
    technicalParameters: [
      "Meter compatibility",
      "Enclosure dimensions",
      "Material",
      "IP rating",
      "Cable-entry arrangement",
      "Mounting method",
    ],
    selection: [
      "Identify meter type",
      "Check utility requirements",
      "Confirm cable sizes",
      "Select indoor/outdoor enclosure",
      "Provide adequate access for inspection",
    ],
    featured: false,
  },
];

