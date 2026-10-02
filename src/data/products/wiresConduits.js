import wireandcablesImage from "../../assets/Wires/wireandcablesImage.jpg";
import pvcImage from "../../assets/Wires/pvcImage.jpg";

import { makeProduct } from "../helpers.js";

export const wireConduitProducts = [
  {
    id: "wire-wires-cables",
    slug: "wires-and-cables",
    name: "Electrical Wires and Cables",
    category: "wires-conduits",
    categoryName: "Wires & Conduits",
    image: wireandcablesImage,
    summary:
      "Electrical conductors and cable assemblies for power distribution, lighting, control and equipment connections.",
    description:
      "Electrical wires and cables carry electrical power or signals between distribution equipment, control panels, machines and end-use points. Selection depends on conductor material, cross-sectional area, insulation system, installation method, ambient conditions, voltage drop and permissible current-carrying capacity.",
    applications: [
      "Residential wiring",
      "Commercial electrical installations",
      "Industrial power distribution",
      "Control circuits",
      "Equipment connections",
    ],
    keyFeatures: [
      "Copper and aluminium conductor options",
      "Multiple conductor sizes",
      "Different insulation constructions",
      "Single-core and multicore options",
      "Power and control cable applications",
    ],
    technicalParameters: [
      "Conductor material",
      "Conductor cross-sectional area",
      "Number of cores",
      "Rated voltage",
      "Insulation type",
      "Current-carrying capacity",
      "Operating temperature",
    ],
    selection: [
      "Calculate design current",
      "Check installation method",
      "Calculate permissible voltage drop",
      "Consider ambient and grouping conditions",
      "Select appropriate conductor and insulation",
    ],
    featured: true,
  },

  {
    id: "wire-pvc-conduits",
    slug: "pvc-conduits",
    name: "PVC Electrical Conduits",
    category: "wires-conduits",
    categoryName: "Wires & Conduits",
    image: pvcImage,
    summary:
      "PVC conduit systems for routing and protecting electrical wiring in concealed and exposed installations.",
    description:
      "PVC conduits provide mechanical protection and organized routing for electrical conductors. They can be installed within walls, ceilings or suitable exposed locations depending on the conduit type and installation environment. Conduit diameter should provide adequate space for the intended cable arrangement.",
    applications: [
      "Residential wiring",
      "Commercial buildings",
      "Office installations",
      "Industrial auxiliary wiring",
      "Concealed electrical installations",
    ],
    keyFeatures: [
      "Non-metallic construction",
      "Corrosion resistance",
      "Lightweight installation",
      "Multiple diameter options",
      "Compatible bends and accessories",
    ],
    technicalParameters: [
      "Nominal diameter",
      "Wall thickness",
      "Conduit type",
      "Operating temperature",
      "Installation method",
      "Cable-fill capacity",
    ],
    selection: [
      "Calculate cable quantity",
      "Determine cable outside diameters",
      "Select conduit diameter",
      "Check bend and routing requirements",
      "Verify suitability for installation environment",
    ],
    featured: false,
  },
];

