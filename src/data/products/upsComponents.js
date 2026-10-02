import rectifierModulesImage from "../../assets/upsComponent/rectifierModulesImage.jpg";
import inverterModulesImage from "../../assets/upsComponent/inverterModulesImage.jpg";
import igbtPowerModulesImage from "../../assets/upsComponent/igbtPowerModulesImage.jpg";
import staticBypassSwitchesImage from "../../assets/upsComponent/staticBypassSwitchesImage.jpg";
import manualBypassSwitchesImage from "../../assets/upsComponent/manualBypassSwitchesImage.jpg";
import staticTransferSwitchImage from "../../assets/upsComponent/staticTransferSwitchImage.jpg";
import isolationTransformersImage from "../../assets/upsComponent/isolationTransformersImage.jpg";
import batteryChargersImage from "../../assets/upsComponent/batteryChargersImage.jpg";
import dspControlCardsImage from "../../assets/upsComponent/dspControlCardsImage.jpg";
import displayPanelsImage from "../../assets/upsComponent/displayPanelsImage.jpg";
import coolingFansImage from "../../assets/upsComponent/coolingFansImage.jpg";
import capacitorsImage from "../../assets/upsComponent/capacitorsImage.jpg";
import contactorsImage from "../../assets/upsComponent/contactorsImage.jpg";
import relaysImage from "../../assets/upsComponent/relaysImage.jpg";
import fusesImage from "../../assets/upsComponent/fusesImage.jpg";
import mcbImage from "../../assets/upsComponent/mcbImage.jpg";
import mccbImage from "../../assets/upsComponent/mccbImage.jpg";
import acbImage from "../../assets/upsComponent/acbImage.jpg";
import surgeProtectionDevicesImage from "../../assets/upsComponent/surgeProtectionDevicesImage.jpg";
import emiRfiFiltersImage from "../../assets/upsComponent/emiRfiFiltersImage.jpg";
import currentTransformersImage from "../../assets/upsComponent/currentTransformersImage.jpg";
import potentialTransformersImage from "../../assets/upsComponent/potentialTransformersImage.jpg";
import terminalBlocksImage from "../../assets/upsComponent/terminalBlocksImage.jpg";
import copperBusBarsImage from "../../assets/upsComponent/copperBusBarsImage.jpg";
import batteryCabinetsImage from "../../assets/upsComponent/batteryCabinetsImage.jpg";
import batteryMonitoringImage from "../../assets/upsComponent/batteryMonitoringImage.jpg";
import upsEnclosuresImage from "../../assets/upsComponent/upsEnclosuresImage.jpg";
import remoteMonitoringImage from "../../assets/upsComponent/remoteMonitoringImage.jpg";

import { makeProduct } from "../helpers.js";

export const upsComponentProducts = [
  makeProduct({
    id: "upscomp-rectifier-modules",
    name: "UPS Rectifier Modules",
    category: "components",
    categoryName: "UPS Components",
    image: rectifierModulesImage,
    summary:
      "Power-conversion modules that convert incoming AC power into the DC bus supply used by compatible UPS systems.",
    description:
      "The rectifier is a fundamental UPS power-conversion stage. It accepts the specified AC input and produces a controlled DC output for the DC link and battery-charging system. Replacement selection must match the UPS topology, control system, electrical rating, mechanical mounting and communication interface.",
    applications: [
      "UPS rectifier replacement",
      "UPS service and refurbishment",
      "Modular UPS maintenance",
      "Critical-power system repair",
    ],
    keyFeatures: [
      "AC-to-DC power conversion",
      "UPS-specific module construction",
      "Controlled DC-bus operation",
      "Model-dependent monitoring and protection",
      "Replacement-oriented selection",
    ],
    technicalParameters: [
      "AC input voltage",
      "DC output voltage",
      "Rated current",
      "Rated power",
      "Cooling method",
      "Communication/interface type",
      "Mechanical dimensions",
    ],
    selection: [
      "UPS make and model",
      "Original module rating",
      "DC bus voltage",
      "Connector and mounting arrangement",
      "Control-system compatibility",
    ],
  }),

  makeProduct({
    id: "upscomp-inverter-modules",
    name: "UPS Inverter Modules",
    category: "components",
    categoryName: "UPS Components",
    image: inverterModulesImage,
    summary:
      "UPS inverter power modules that convert the DC link energy into regulated AC output for the connected load.",
    description:
      "An inverter module forms the output power-conversion stage of compatible UPS equipment. It uses switching devices and control electronics to synthesize the required AC waveform from the DC bus. Replacement requires matching power rating, DC-link voltage, output topology, cooling arrangement and controller compatibility.",
    applications: [
      "UPS inverter replacement",
      "Modular UPS servicing",
      "Power-stage repair",
      "Critical-load UPS maintenance",
    ],
    keyFeatures: [
      "DC-to-AC conversion",
      "Controlled output waveform",
      "Power-stage protection",
      "Module-based serviceability",
      "UPS-specific control integration",
    ],
    technicalParameters: [
      "DC input voltage",
      "AC output voltage",
      "Output current",
      "Power rating",
      "Switching technology",
      "Cooling arrangement",
      "Control interface",
    ],
    selection: [
      "UPS model",
      "DC-link voltage",
      "Required output capacity",
      "Existing inverter module specification",
      "Cooling and mounting compatibility",
    ],
  }),

  makeProduct({
    id: "upscomp-igbt-power-modules",
    name: "UPS IGBT Power Modules",
    category: "components",
    categoryName: "UPS Components",
    image: igbtPowerModulesImage,
    summary:
      "Insulated-gate bipolar transistor power modules used in high-frequency UPS switching stages.",
    description:
      "IGBT power modules contain semiconductor switching devices used in UPS rectifier or inverter power stages. They are selected according to voltage, current, switching requirements, thermal characteristics and mechanical mounting. Semiconductor replacement should be performed only with a component approved for the specific UPS design.",
    applications: [
      "UPS inverter repair",
      "UPS rectifier repair",
      "Power-electronics servicing",
      "Industrial UPS refurbishment",
    ],
    keyFeatures: [
      "High-power semiconductor switching",
      "High-frequency switching capability",
      "Integrated power-device package",
      "Thermal-management requirement",
      "Application-specific replacement",
    ],
    technicalParameters: [
      "Collector-emitter voltage",
      "Continuous collector current",
      "Pulse current",
      "Switching frequency",
      "Power dissipation",
      "Thermal resistance",
      "Module mounting dimensions",
    ],
    selection: [
      "Original semiconductor part number",
      "Voltage and current ratings",
      "Switching characteristics",
      "Gate-drive compatibility",
      "Thermal interface and mounting",
    ],
  }),

  makeProduct({
    id: "upscomp-static-bypass-switches",
    name: "UPS Static Bypass Switches",
    category: "components",
    categoryName: "UPS Components",
    image: staticBypassSwitchesImage,
    summary:
      "Solid-state bypass switching assemblies used to transfer compatible UPS loads to an alternate AC source.",
    description:
      "A static bypass switch provides a rapid electronic path between the UPS load and the bypass supply under defined operating conditions. It is commonly used when the UPS is overloaded, faulted or undergoing a controlled transfer. Voltage, current, semiconductor arrangement and control compatibility must match the original system.",
    applications: [
      "UPS bypass circuits",
      "Critical power systems",
      "UPS maintenance",
      "High-availability installations",
    ],
    keyFeatures: [
      "Solid-state switching",
      "Fast bypass transfer capability",
      "High-current construction",
      "UPS controller integration",
      "Application-specific protection",
    ],
    technicalParameters: [
      "Bypass voltage",
      "Continuous current",
      "Short-duration current",
      "Phase configuration",
      "Semiconductor type",
      "Control interface",
      "Cooling arrangement",
    ],
    selection: [
      "UPS make and model",
      "Bypass current rating",
      "Input/output phase arrangement",
      "Existing control interface",
      "Fault-current requirements",
    ],
  }),

  makeProduct({
    id: "upscomp-manual-bypass-switches",
    name: "UPS Manual Bypass Switches",
    category: "components",
    categoryName: "UPS Components",
    image: manualBypassSwitchesImage,
    summary:
      "Mechanically operated bypass equipment that provides a controlled maintenance path around compatible UPS equipment.",
    description:
      "A manual maintenance bypass allows authorized personnel to isolate the UPS while maintaining a defined supply path to the load, subject to the electrical design and operating procedure. Correct interlocking and switching sequence are essential to prevent unsafe parallel or incorrect source conditions.",
    applications: [
      "UPS maintenance",
      "Service bypass arrangements",
      "Critical-load electrical distribution",
      "UPS replacement work",
    ],
    keyFeatures: [
      "Mechanical source isolation",
      "Maintenance bypass functionality",
      "Visible switching arrangement",
      "Interlocking options",
      "High-current switchgear construction",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Number of poles",
      "Source configuration",
      "Interlocking arrangement",
      "Short-circuit withstand capability",
    ],
    selection: [
      "UPS capacity",
      "Bypass source architecture",
      "Load current",
      "Number of poles",
      "Required mechanical/electrical interlocking",
    ],
  }),

  makeProduct({
    id: "upscomp-static-transfer-switch",
    name: "UPS Static Transfer Switch",
    category: "components",
    categoryName: "UPS Components",
    image: staticTransferSwitchImage,
    summary:
      "Fast electronic transfer equipment for switching a critical load between two qualified AC power sources.",
    description:
      "A static transfer switch monitors two independent AC sources and transfers the connected load between them when the preferred source becomes unsuitable, provided the source conditions meet the switching criteria. It is particularly useful where redundant upstream power paths are part of the facility architecture.",
    applications: [
      "Data centres",
      "Critical IT distribution",
      "Telecommunication systems",
      "Dual-source equipment",
      "High-availability facilities",
    ],
    keyFeatures: [
      "Dual-source architecture",
      "Electronic transfer switching",
      "Source monitoring",
      "Fast transfer capability",
      "Critical-load distribution",
    ],
    technicalParameters: [
      "Source voltage",
      "Continuous load current",
      "Number of phases",
      "Transfer threshold",
      "Transfer timing",
      "Source synchronization requirements",
    ],
    selection: [
      "Two-source availability",
      "Load current",
      "Phase configuration",
      "Source compatibility",
      "Required transfer performance",
    ],
  }),

  makeProduct({
    id: "upscomp-isolation-transformers",
    name: "UPS Isolation Transformers",
    category: "components",
    categoryName: "UPS Components",
    image: isolationTransformersImage,
    summary:
      "Isolation transformer assemblies used where electrical isolation, voltage transformation or grounding-related system requirements call for transformer coupling.",
    description:
      "An isolation transformer separates the primary and secondary windings electrically while transferring energy magnetically. In UPS installations it can provide a defined voltage transformation or isolation point when required by the system design. Transformer sizing must account for load type, inrush, harmonic content and thermal conditions.",
    applications: [
      "UPS input/output isolation",
      "Sensitive electronic loads",
      "Electrical system voltage conversion",
      "Industrial control power",
    ],
    keyFeatures: [
      "Galvanic isolation",
      "Voltage transformation options",
      "Defined secondary arrangement",
      "Industrial-duty construction",
      "Application-specific impedance selection",
    ],
    technicalParameters: [
      "Primary voltage",
      "Secondary voltage",
      "kVA rating",
      "Frequency",
      "Connection/vector arrangement",
      "Impedance",
      "Insulation class",
    ],
    selection: [
      "Required voltage ratio",
      "Connected kVA",
      "Load harmonic profile",
      "Installation environment",
      "Grounding arrangement",
    ],
  }),

  makeProduct({
    id: "upscomp-battery-chargers",
    name: "UPS Battery Chargers",
    category: "components",
    categoryName: "UPS Components",
    image: batteryChargersImage,
    summary:
      "Battery-charging assemblies designed to restore and maintain the charge of compatible UPS battery banks.",
    description:
      "The battery charger supplies controlled DC current to the UPS battery system while maintaining the battery at the voltage required by the selected charging strategy. Charger characteristics must match battery chemistry, series configuration, battery capacity and UPS control logic.",
    applications: [
      "UPS battery replacement",
      "Charger fault repair",
      "Battery-bank maintenance",
      "Critical backup systems",
    ],
    keyFeatures: [
      "Controlled DC charging",
      "Battery-maintenance operation",
      "Protection against abnormal charging conditions",
      "UPS controller integration",
      "Battery-chemistry-dependent configuration",
    ],
    technicalParameters: [
      "DC output voltage",
      "Maximum charging current",
      "Battery-bank voltage",
      "Battery capacity compatibility",
      "Charging profile",
      "Input supply",
      "Protection functions",
    ],
    selection: [
      "Battery chemistry",
      "Number of series batteries",
      "Battery Ah capacity",
      "UPS model",
      "Required recharge time",
    ],
  }),

  makeProduct({
    id: "upscomp-dsp-control-cards",
    name: "UPS DSP Control Cards",
    category: "components",
    categoryName: "UPS Components",
    image: dspControlCardsImage,
    summary:
      "Digital control boards responsible for coordinating power-conversion functions, measurement and protection in compatible UPS systems.",
    description:
      "Digital signal processor based control cards execute the control algorithms used by modern UPS power stages. They process voltage, current and status feedback and generate control commands for the switching system. Firmware, connector arrangement and calibration data can be specific to the UPS platform.",
    applications: [
      "UPS control-board replacement",
      "Digital UPS servicing",
      "Power-stage control repair",
      "System refurbishment",
    ],
    keyFeatures: [
      "Digital power-control processing",
      "Voltage and current feedback handling",
      "Protection logic",
      "Communication with UPS subsystems",
      "Model-specific firmware support",
    ],
    technicalParameters: [
      "Controller/DSP type",
      "Firmware version",
      "Supply voltage",
      "Feedback inputs",
      "Communication interfaces",
      "Connector configuration",
      "Supported UPS model",
    ],
    selection: [
      "Exact UPS model",
      "Original control-card part number",
      "Firmware compatibility",
      "Connector layout",
      "Calibration requirements",
    ],
  }),

  makeProduct({
    id: "upscomp-display-panels",
    name: "UPS Display Panels",
    category: "components",
    categoryName: "UPS Components",
    image: displayPanelsImage,
    summary:
      "Local user-interface assemblies for viewing UPS status, measurements, alarms and operating information.",
    description:
      "The display panel provides the operator interface for a compatible UPS. Depending on the design, it may show input and output measurements, battery status, alarms, operating mode and maintenance information. Replacement displays must match the UPS controller, communication bus and mechanical front-panel arrangement.",
    applications: [
      "UPS HMI replacement",
      "Front-panel refurbishment",
      "UPS service work",
      "Critical-power monitoring",
    ],
    keyFeatures: [
      "Local UPS status display",
      "Electrical measurement presentation",
      "Alarm indication",
      "Operator navigation",
      "Model-specific communication interface",
    ],
    technicalParameters: [
      "Display technology",
      "Screen size",
      "Supply voltage",
      "Communication interface",
      "Connector type",
      "Mechanical dimensions",
      "Supported UPS firmware",
    ],
    selection: [
      "UPS model",
      "Original display part number",
      "Communication protocol",
      "Front-panel dimensions",
      "Firmware compatibility",
    ],
  }),

  makeProduct({
    id: "upscomp-cooling-fans",
    name: "UPS Cooling Fans",
    category: "components",
    categoryName: "UPS Components",
    image: coolingFansImage,
    summary:
      "Cooling fan assemblies used to remove heat from UPS power electronics and maintain suitable component operating temperatures.",
    description:
      "UPS semiconductor devices, magnetic components and other power-stage parts generate heat during operation. Cooling fans maintain the required airflow through the equipment. Replacement fans must match airflow, static pressure, voltage, current, dimensions, connector and monitoring characteristics.",
    applications: [
      "UPS fan replacement",
      "Preventive UPS maintenance",
      "Thermal-system repair",
      "Power-electronics cooling",
    ],
    keyFeatures: [
      "Forced-air cooling",
      "UPS-compatible mounting options",
      "Continuous-duty operation",
      "Alarm/tachometer options on selected fans",
      "Thermal protection support",
    ],
    technicalParameters: [
      "Supply voltage",
      "Rated current",
      "Airflow",
      "Static pressure",
      "Fan dimensions",
      "Rotation speed",
      "Connector type",
    ],
    selection: [
      "Original fan specification",
      "Required airflow",
      "Available mounting space",
      "Supply voltage",
      "Fan-monitoring interface",
    ],
  }),

  makeProduct({
    id: "upscomp-capacitors",
    name: "UPS DC Link and AC Capacitors",
    category: "components",
    categoryName: "UPS Components",
    image: capacitorsImage,
    summary:
      "Power capacitors used in UPS DC-link, filtering and output power stages according to the original electrical design.",
    description:
      "Capacitors are used throughout UPS power electronics for energy buffering, ripple reduction, filtering and waveform control. DC-link and AC filter capacitors operate under defined electrical and thermal stresses, so replacements must match capacitance, voltage, ripple current, construction and temperature requirements.",
    applications: [
      "UPS DC-link maintenance",
      "AC filter replacement",
      "Power-stage refurbishment",
      "UPS preventive maintenance",
    ],
    keyFeatures: [
      "Power-electronic filtering",
      "DC-link energy buffering",
      "High ripple-current construction where required",
      "Application-specific electrical ratings",
      "Temperature-rated options",
    ],
    technicalParameters: [
      "Capacitance",
      "Rated voltage",
      "Ripple current",
      "Frequency",
      "Temperature rating",
      "ESR",
      "Terminal configuration",
    ],
    selection: [
      "Original capacitor specification",
      "DC or AC application",
      "Voltage rating",
      "Ripple-current requirement",
      "Physical dimensions and terminals",
    ],
  }),

  makeProduct({
    id: "upscomp-contactors",
    name: "UPS Contactors",
    category: "components",
    categoryName: "UPS Components",
    image: contactorsImage,
    summary:
      "Electromechanical switching devices used in UPS input, output, bypass and battery-related circuits where contactor switching is specified.",
    description:
      "Contactors provide electrically controlled switching of power circuits. In UPS equipment they may be used for source connection, bypass control, battery isolation or other defined switching functions. Coil voltage, contact configuration, utilization category and current rating must correspond to the original application.",
    applications: [
      "UPS input switching",
      "Battery isolation circuits",
      "Bypass switching",
      "Maintenance and replacement work",
    ],
    keyFeatures: [
      "Electromagnetic actuation",
      "Power-contact switching",
      "Auxiliary-contact options",
      "Multiple coil-voltage choices",
      "Panel-mountable construction",
    ],
    technicalParameters: [
      "Rated operational current",
      "Coil voltage",
      "Number of poles",
      "Auxiliary contacts",
      "Utilization category",
      "Rated insulation voltage",
    ],
    selection: [
      "Existing contactor part number",
      "Load current",
      "Coil/control voltage",
      "Number of poles",
      "Switching duty",
    ],
  }),

  makeProduct({
    id: "upscomp-relays",
    name: "UPS Control Relays",
    category: "components",
    categoryName: "UPS Components",
    image: relaysImage,
    summary:
      "Control relays for switching low-power control circuits, alarms, interlocks and status signals in UPS systems.",
    description:
      "Control relays electrically isolate or route control signals between different parts of a UPS control system. They can operate alarms, interlocks, status contacts and auxiliary circuits. Contact rating, coil voltage and contact arrangement are essential when selecting a replacement.",
    applications: [
      "UPS control circuits",
      "Alarm outputs",
      "Interlock circuits",
      "Status indication",
      "Auxiliary switching",
    ],
    keyFeatures: [
      "Electrical control switching",
      "Multiple contact arrangements",
      "Coil-voltage options",
      "Isolation between control circuits",
      "Socket or PCB mounting options",
    ],
    technicalParameters: [
      "Coil voltage",
      "Contact configuration",
      "Contact current",
      "Contact voltage",
      "Mounting type",
      "Electrical life",
    ],
    selection: [
      "Original relay type",
      "Coil voltage",
      "Contact arrangement",
      "Contact load",
      "Socket or PCB compatibility",
    ],
  }),

  makeProduct({
    id: "upscomp-fuses",
    name: "UPS Power Fuses",
    category: "components",
    categoryName: "UPS Components",
    image: fusesImage,
    summary:
      "Current-limiting protection devices used to protect UPS power circuits and semiconductor assemblies against excessive current.",
    description:
      "Power fuses interrupt abnormal current conditions when the current exceeds the fuse's defined operating characteristics. Semiconductor-protection fuses may require very specific clearing performance and physical dimensions. Fuse replacement should always follow the UPS manufacturer's specified rating and application.",
    applications: [
      "Semiconductor protection",
      "UPS input protection",
      "DC-link protection",
      "Battery circuit protection",
    ],
    keyFeatures: [
      "Fast fault-current interruption options",
      "Semiconductor protection variants",
      "High interrupting capability",
      "Multiple mounting formats",
      "Application-specific time-current characteristics",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Interrupting rating",
      "Fuse characteristic",
      "Physical size",
      "Mounting type",
      "Pre-arcing characteristics",
    ],
    selection: [
      "Original fuse part number",
      "Circuit voltage",
      "Normal operating current",
      "Fault level",
      "Semiconductor protection requirement",
    ],
  }),

  makeProduct({
    id: "upscomp-mcb",
    name: "UPS Miniature Circuit Breakers",
    category: "components",
    categoryName: "UPS Components",
    image: mcbImage,
    summary:
      "Low-voltage miniature circuit breakers used for branch-circuit protection in UPS-associated control and distribution circuits.",
    description:
      "MCBs provide thermal and magnetic protection against overload and short-circuit conditions in appropriately rated low-voltage circuits. They can protect auxiliary supplies, control circuits and smaller distribution feeders. Selection requires attention to rated current, curve, pole configuration and breaking capacity.",
    applications: [
      "UPS auxiliary circuits",
      "Control supplies",
      "Small distribution feeders",
      "Lighting and service circuits",
    ],
    keyFeatures: [
      "Overload protection",
      "Short-circuit protection",
      "Compact DIN-rail mounting",
      "Single and multi-pole configurations",
      "Multiple trip characteristics",
    ],
    technicalParameters: [
      "Rated current",
      "Rated voltage",
      "Number of poles",
      "Breaking capacity",
      "Trip characteristic",
      "Frequency",
    ],
    selection: [
      "Circuit design current",
      "Prospective fault current",
      "Pole requirement",
      "Trip curve",
      "Upstream/downstream coordination",
    ],
  }),

  makeProduct({
    id: "upscomp-mccb",
    name: "UPS Moulded Case Circuit Breakers",
    category: "components",
    categoryName: "UPS Components",
    image: mccbImage,
    summary:
      "Moulded case circuit breakers for higher-current UPS distribution, feeder and protection applications.",
    description:
      "MCCBs provide adjustable or fixed protection for larger low-voltage circuits than typical miniature breakers. In UPS installations they may serve as input, output, bypass or battery-related protective devices depending on the electrical design. Breaking capacity and protection coordination must be established from the site's fault level.",
    applications: [
      "UPS incomers",
      "UPS output feeders",
      "Bypass distribution",
      "Battery and DC protection where specified",
      "Main electrical panels",
    ],
    keyFeatures: [
      "Higher current ratings",
      "Thermal-magnetic or electronic trip options",
      "Adjustable protection on selected models",
      "Auxiliary and alarm contacts",
      "Panel mounting",
    ],
    technicalParameters: [
      "Rated current",
      "Rated voltage",
      "Breaking capacity",
      "Trip-unit type",
      "Number of poles",
      "Short-time withstand characteristics",
    ],
    selection: [
      "Full-load current",
      "Fault level",
      "Cable ampacity",
      "Selective coordination requirement",
      "Trip-unit characteristics",
    ],
  }),

  makeProduct({
    id: "upscomp-acb",
    name: "UPS Air Circuit Breakers",
    category: "components",
    categoryName: "UPS Components",
    image: acbImage,
    summary:
      "Low-voltage air circuit breakers for high-current UPS incomer, bypass and distribution applications.",
    description:
      "ACBs are used where high-current switching and protection are required in low-voltage switchboards. Electronic trip units can provide configurable long-time, short-time, instantaneous and earth-fault protection depending on the selected device. Coordination with upstream and downstream switchgear is essential in critical UPS systems.",
    applications: [
      "Large UPS incomers",
      "Main low-voltage switchboards",
      "Bypass sources",
      "Critical power distribution",
      "High-current feeders",
    ],
    keyFeatures: [
      "High-current switching",
      "Electronic protection options",
      "Adjustable protection settings",
      "Withdrawable and fixed versions",
      "Auxiliary and communication accessories",
    ],
    technicalParameters: [
      "Frame current",
      "Rated operational voltage",
      "Breaking capacity",
      "Trip-unit functions",
      "Number of poles",
      "Withstand rating",
      "Mounting arrangement",
    ],
    selection: [
      "Maximum demand current",
      "Available short-circuit current",
      "Protection coordination",
      "Required incomer/bypass arrangement",
      "Fixed or withdrawable construction",
    ],
  }),

  makeProduct({
    id: "upscomp-spd",
    name: "UPS Surge Protection Devices",
    category: "components",
    categoryName: "UPS Components",
    image: surgeProtectionDevicesImage,
    summary:
      "Surge protective devices used to limit transient overvoltage reaching UPS-connected electrical equipment.",
    description:
      "SPDs provide a controlled path for transient surge energy so that the voltage seen by protected equipment can be limited to an appropriate level. Correct SPD selection depends on the system earthing arrangement, voltage, expected surge environment, discharge-current requirements and upstream protection.",
    applications: [
      "UPS input protection",
      "UPS output distribution",
      "Control-panel protection",
      "Communication equipment protection",
      "Building electrical distribution",
    ],
    keyFeatures: [
      "Transient overvoltage protection",
      "Multiple SPD types",
      "Status indication on selected models",
      "Replaceable cartridge options",
      "Coordination with upstream protection",
    ],
    technicalParameters: [
      "Maximum continuous operating voltage",
      "Nominal discharge current",
      "Maximum discharge current",
      "Voltage protection level",
      "SPD type",
      "Pole configuration",
    ],
    selection: [
      "System voltage",
      "Earthing arrangement",
      "Installation location",
      "Expected surge environment",
      "Required discharge-current rating",
    ],
  }),

  makeProduct({
    id: "upscomp-emi-rfi-filters",
    name: "UPS EMI/RFI Filters",
    category: "components",
    categoryName: "UPS Components",
    image: emiRfiFiltersImage,
    summary:
      "Electromagnetic and radio-frequency interference filters used to reduce conducted high-frequency noise in compatible UPS power paths.",
    description:
      "EMI/RFI filters use combinations of inductive and capacitive elements to attenuate unwanted conducted high-frequency noise. In UPS systems they can be used at defined input or output locations to support electromagnetic compatibility. The filter must be selected for the actual line configuration and current.",
    applications: [
      "UPS input filtering",
      "UPS output filtering",
      "Industrial electronic equipment",
      "Electromagnetic compatibility improvement",
    ],
    keyFeatures: [
      "Common-mode noise attenuation",
      "Differential-mode filtering",
      "Power-line installation",
      "Application-specific current rating",
      "EMC-oriented design",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Frequency range",
      "Insertion-loss characteristics",
      "Leakage current",
      "Phase configuration",
    ],
    selection: [
      "Noise-frequency range",
      "Line configuration",
      "Load current",
      "Allowable leakage current",
      "UPS manufacturer requirements",
    ],
  }),

  makeProduct({
    id: "upscomp-ct",
    name: "UPS Current Transformers",
    category: "components",
    categoryName: "UPS Components",
    image: currentTransformersImage,
    summary:
      "Current transformers used for electrical measurement, feedback, metering and protection within compatible UPS systems.",
    description:
      "A current transformer converts a high primary current into a lower secondary current suitable for measurement and control circuits. In UPS equipment, CT signals can be used for regulation, protection, metering and monitoring. Ratio, burden, accuracy and physical construction must match the circuit.",
    applications: [
      "UPS current feedback",
      "Power measurement",
      "Protection circuits",
      "Energy monitoring",
      "UPS control systems",
    ],
    keyFeatures: [
      "Current measurement isolation",
      "Defined transformation ratio",
      "Measurement and protection classes",
      "Multiple mounting arrangements",
      "Control-system integration",
    ],
    technicalParameters: [
      "Primary current",
      "Secondary current",
      "Transformation ratio",
      "Accuracy class",
      "Burden",
      "Insulation level",
      "Frequency",
    ],
    selection: [
      "Primary current range",
      "Required accuracy",
      "Connected burden",
      "Physical installation",
      "Measurement or protection application",
    ],
  }),

  makeProduct({
    id: "upscomp-pt",
    name: "UPS Potential Transformers",
    category: "components",
    categoryName: "UPS Components",
    image: potentialTransformersImage,
    summary:
      "Voltage transformers used to provide isolated, scaled voltage signals for measurement and control circuits.",
    description:
      "Potential transformers reduce higher system voltage to a defined secondary voltage that can be safely processed by measurement and control electronics. UPS applications can include voltage sensing, metering and protection. The transformation ratio, accuracy, burden and insulation level must correspond to the original circuit.",
    applications: [
      "UPS voltage feedback",
      "Voltage measurement",
      "Protection systems",
      "Control circuits",
      "Electrical monitoring",
    ],
    keyFeatures: [
      "Voltage transformation",
      "Electrical isolation",
      "Measurement-oriented accuracy",
      "Defined secondary output",
      "Compact control-system integration",
    ],
    technicalParameters: [
      "Primary voltage",
      "Secondary voltage",
      "Transformation ratio",
      "Accuracy class",
      "Burden",
      "Insulation level",
      "Frequency",
    ],
    selection: [
      "System voltage",
      "Required secondary voltage",
      "Accuracy requirement",
      "Connected burden",
      "Physical mounting arrangement",
    ],
  }),

  makeProduct({
    id: "upscomp-terminal-blocks",
    name: "UPS Terminal Blocks",
    category: "components",
    categoryName: "UPS Components",
    image: terminalBlocksImage,
    summary:
      "Terminal blocks for organized termination and distribution of power, control and signal wiring within UPS equipment.",
    description:
      "Terminal blocks provide a structured connection point for field and internal wiring. They can separate power, control, signal and communication circuits and make service work easier when correctly labelled. Current rating, conductor size, insulation rating and mounting method must suit the circuit.",
    applications: [
      "UPS control wiring",
      "Field cable termination",
      "Signal distribution",
      "Maintenance and commissioning",
      "Panel wiring",
    ],
    keyFeatures: [
      "DIN-rail mounting options",
      "Clear circuit identification",
      "Multiple connection technologies",
      "Jumper and accessory options",
      "Organized serviceable wiring",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Conductor cross-section",
      "Number of levels",
      "Pitch",
      "Mounting method",
    ],
    selection: [
      "Wire size",
      "Circuit current",
      "Voltage rating",
      "Number of terminals",
      "Required accessories",
    ],
  }),

  makeProduct({
    id: "upscomp-copper-bus-bars",
    name: "UPS Copper Bus Bars",
    category: "components",
    categoryName: "UPS Components",
    image: copperBusBarsImage,
    summary:
      "Copper busbar assemblies for high-current electrical interconnection inside UPS and associated distribution equipment.",
    description:
      "Busbars provide low-impedance electrical paths for high-current distribution. In UPS systems they may connect rectifier, inverter, bypass, output or battery-related circuits depending on the architecture. Busbar dimensions and clearances must be engineered according to current, temperature rise, fault withstand and insulation requirements.",
    applications: [
      "UPS power distribution",
      "Battery distribution",
      "Input/output switchgear",
      "Critical power panels",
      "High-current interconnections",
    ],
    keyFeatures: [
      "High-current conduction",
      "Low-resistance connection path",
      "Custom fabrication options",
      "Insulation and support arrangements",
      "Engineered fault withstand",
    ],
    technicalParameters: [
      "Copper grade",
      "Width and thickness",
      "Continuous current",
      "Short-circuit withstand",
      "Temperature rise",
      "Insulation clearance",
      "Surface finish",
    ],
    selection: [
      "Continuous load current",
      "Fault-current level",
      "Available enclosure space",
      "Required clearances",
      "Connection-hole arrangement",
    ],
  }),

  makeProduct({
    id: "upscomp-battery-cabinets",
    name: "UPS Battery Cabinets",
    category: "components",
    categoryName: "UPS Components",
    image: batteryCabinetsImage,
    summary:
      "Dedicated cabinets for safely arranging and protecting batteries connected to UPS backup systems.",
    description:
      "Battery cabinets provide a structured enclosure for battery strings and associated interconnections. Cabinet design must account for battery dimensions, weight, ventilation requirements, cable routing, isolation and maintenance access. The cabinet must be matched to the battery chemistry and installation environment.",
    applications: [
      "UPS battery banks",
      "Server-room backup systems",
      "Commercial UPS installations",
      "Industrial backup power",
    ],
    keyFeatures: [
      "Organized battery arrangement",
      "Protected cable routing",
      "Maintenance access",
      "Battery-string identification",
      "Application-specific ventilation",
    ],
    technicalParameters: [
      "Battery quantity",
      "Battery dimensions",
      "Cabinet load capacity",
      "Nominal DC voltage",
      "Ventilation arrangement",
      "Cable-entry arrangement",
      "Enclosure dimensions",
    ],
    selection: [
      "Battery model and dimensions",
      "Number of batteries",
      "Battery-bank voltage",
      "Available floor space",
      "Ventilation requirements",
    ],
  }),

  makeProduct({
    id: "upscomp-battery-monitoring",
    name: "UPS Battery Monitoring System",
    category: "components",
    categoryName: "UPS Components",
    image: batteryMonitoringImage,
    summary:
      "Battery monitoring equipment for measuring selected electrical and health indicators across UPS battery strings.",
    description:
      "Battery monitoring systems collect measurements from individual batteries or strings to help identify imbalance, abnormal voltage, temperature or other conditions. Monitoring capability varies by architecture. The system should be selected according to the battery technology, number of blocks and required communication platform.",
    applications: [
      "UPS battery health monitoring",
      "Critical-power maintenance",
      "Data-centre battery supervision",
      "Battery performance trending",
    ],
    keyFeatures: [
      "Individual or string-level monitoring",
      "Voltage measurement",
      "Temperature monitoring options",
      "Alarm generation",
      "Remote communication options",
    ],
    technicalParameters: [
      "Number of monitored batteries",
      "Voltage measurement range",
      "Temperature inputs",
      "Communication interface",
      "Alarm thresholds",
      "Data logging capability",
    ],
    selection: [
      "Battery chemistry",
      "Number of battery blocks",
      "Required monitoring depth",
      "Communication protocol",
      "Existing UPS monitoring architecture",
    ],
  }),

  makeProduct({
    id: "upscomp-ups-enclosures",
    name: "UPS Enclosures",
    category: "components",
    categoryName: "UPS Components",
    image: upsEnclosuresImage,
    summary:
      "Electrical and mechanical enclosures designed to house compatible UPS power, control and protection assemblies.",
    description:
      "UPS enclosures provide the physical structure required to protect internal electrical assemblies and provide controlled access for service. Enclosure selection considers equipment dimensions, heat dissipation, cable entry, protection level and installation environment.",
    applications: [
      "UPS assembly",
      "UPS refurbishment",
      "Custom power-electronics cabinets",
      "Industrial electrical installations",
    ],
    keyFeatures: [
      "Equipment protection",
      "Cable-entry provisions",
      "Service access",
      "Cooling arrangement",
      "Custom internal mounting",
    ],
    technicalParameters: [
      "Enclosure dimensions",
      "Material",
      "IP protection level",
      "Cooling arrangement",
      "Cable-entry method",
      "Mounting plate dimensions",
    ],
    selection: [
      "Internal equipment size",
      "Heat dissipation",
      "Installation environment",
      "Required IP rating",
      "Cable-entry requirements",
    ],
  }),

  makeProduct({
    id: "upscomp-remote-monitoring",
    name: "UPS Remote Monitoring Systems",
    category: "components",
    categoryName: "UPS Components",
    image: remoteMonitoringImage,
    summary:
      "Communication and monitoring solutions that provide remote visibility of UPS operating status, measurements and alarms.",
    description:
      "Remote monitoring systems connect compatible UPS equipment to a local network, building-management platform or monitoring server. Depending on the interface, operators can view electrical measurements, battery status, alarms and event information remotely. Compatibility with the UPS communication port and network architecture is essential.",
    applications: [
      "Data-centre monitoring",
      "Remote UPS supervision",
      "Multi-site maintenance",
      "Network operations",
      "Critical infrastructure monitoring",
    ],
    keyFeatures: [
      "Remote status visibility",
      "Alarm and event reporting",
      "Network communication",
      "Centralized monitoring options",
      "Maintenance-oriented data access",
    ],
    technicalParameters: [
      "Communication interface",
      "Network protocol",
      "Supported UPS models",
      "Monitoring parameters",
      "Alarm outputs",
      "Data-logging capability",
    ],
    selection: [
      "UPS communication interface",
      "Required network protocol",
      "Number of monitored UPS units",
      "Monitoring platform",
      "Remote-access requirements",
    ],
  }),
];

