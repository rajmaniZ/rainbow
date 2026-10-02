import distributionModuleImage from "../../assets/Wiring/distributionModuleImage.jpg";
import switchesandsocketsImage from "../../assets/Wiring/switchesandsocketsImage.jpg";
import switchPlatesImage from "../../assets/Wiring/switchPlatesImage.jpg";

import { makeProduct } from "../helpers.js";

export const wiringAccessoryProducts = [
  {
    id: "wiring-modular-boards",
    slug: "modular-distribution-boards",
    name: "Modular Distribution Boards",
    category: "wiring-accessories",
    categoryName: "Wiring Accessories",
    image: distributionModuleImage,
    summary:
      "Compact distribution boards designed to house modular circuit protection and switching devices in residential and commercial installations.",
    description:
      "Modular distribution boards provide an organized enclosure for MCBs, RCCBs, RCBOs and related protective devices. They simplify circuit segregation and maintenance while providing a defined location for incoming and outgoing wiring.",
    applications: [
      "Residential electrical distribution",
      "Offices",
      "Shops",
      "Small commercial buildings",
      "Institutional installations",
    ],
    keyFeatures: [
      "DIN-rail mounting",
      "Multiple module capacities",
      "Dedicated neutral and earth arrangements",
      "Flush and surface mounting options",
      "Circuit identification provisions",
    ],
    technicalParameters: [
      "Number of modules",
      "Number of ways",
      "Mounting type",
      "Enclosure material",
      "IP rating",
      "Busbar arrangement",
    ],
    selection: [
      "Count required outgoing circuits",
      "Allow spare ways",
      "Select mounting style",
      "Confirm protective-device compatibility",
      "Check cable-entry space",
    ],
    featured: false,
  },

  {
    id: "wiring-switches-sockets",
    slug: "switches-and-sockets",
    name: "Modular Switches and Sockets",
    category: "wiring-accessories",
    categoryName: "Wiring Accessories",
    image: switchesandsocketsImage,
    summary:
      "Modular electrical switches and socket outlets for residential, office and commercial wiring installations.",
    description:
      "Modular switches and sockets provide the user-facing control and connection points of a low-voltage electrical installation. Selection should consider current rating, mounting system, connected load, environmental conditions and the required number of modules.",
    applications: [
      "Homes",
      "Offices",
      "Hotels",
      "Shops",
      "Commercial buildings",
    ],
    keyFeatures: [
      "Modular construction",
      "Multiple current ratings",
      "Switch and socket combinations",
      "Flush installation options",
      "Accessory and plate compatibility",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Module size",
      "Mounting system",
      "Number of poles",
      "Protection arrangement",
    ],
    selection: [
      "Identify connected load",
      "Choose current rating",
      "Select compatible modular plate",
      "Confirm box depth",
      "Consider location-specific protection requirements",
    ],
    featured: false,
  },

  {
    id: "wiring-modular-plates",
    slug: "modular-plates",
    name: "Modular Switch Plates",
    category: "wiring-accessories",
    categoryName: "Wiring Accessories",
    image: switchPlatesImage,
    summary:
      "Front plates designed to hold modular switches, sockets and control accessories in coordinated electrical installations.",
    description:
      "Modular plates provide the visible mounting interface for switches, sockets and other modular accessories. They are available in different module capacities and finishes and must be compatible with the selected mounting box and device range.",
    applications: [
      "Residential wiring",
      "Office interiors",
      "Hotels",
      "Commercial buildings",
      "Renovation projects",
    ],
    keyFeatures: [
      "Multiple module configurations",
      "Flush mounting",
      "Accessory compatibility",
      "Different finish options",
      "Easy device replacement",
    ],
    technicalParameters: [
      "Module capacity",
      "Plate dimensions",
      "Material",
      "Mounting system",
      "Device compatibility",
    ],
    selection: [
      "Count required modules",
      "Match plate to device series",
      "Confirm box dimensions",
      "Select required finish",
      "Allow spare module positions where useful",
    ],
    featured: false,
  },
];

