import plcComponentImage from "../../assets/panelComponents/plcComponentImage.jpg";
import hmiComponentImage from "../../assets/panelComponents/hmiComponentImage.jpg";
import vfdComponentImage from "../../assets/panelComponents/vfdcomponentImage.jpg";
import softComponentImage from "../../assets/panelComponents/softComponentImage.jpg";
import mcbComponentImage from "../../assets/panelComponents/mcbComponentImage.jpg";
import mccbComponentImage from "../../assets/panelComponents/mccbComponentImage.jpg";
import acbComponentImage from "../../assets/panelComponents/acbComponentImage.jpg";
import mpcbComponentImage from "../../assets/panelComponents/mpcbComponentImage.jpg";
import rccbComponentImage from "../../assets/panelComponents/rccbComponentImage.jpg";
import elcbComponentImage from "../../assets/panelComponents/elcbComponentImage.jpg";
import contactorComponentImage from "../../assets/panelComponents/contactorComponentImage.jpg";
import overloadComponentImage from "../../assets/panelComponents/overloadComponentImage.jpg";
import timerComponentImage from "../../assets/panelComponents/timerComponentImage.jpg";
import powerComponentImage from "../../assets/panelComponents/powerComponentImage.jpg";
import ctptComponentImage from "../../assets/panelComponents/ctptComponentImage.jpg";
import energymeterComponentImage from "../../assets/panelComponents/energymeterComponentImage.jpg";
import multifunctionComponentImage from "../../assets/panelComponents/multifunctionComponentImage.jpg";
import selectorComponentImage from "../../assets/panelComponents/selectorComponentImage.jpg";
import pushComponentImage from "../../assets/panelComponents/pushComponentImage.jpg";
import indicatorComponentImage from "../../assets/panelComponents/indicatorComponentImage.jpg";
import emergencyComponentImage from "../../assets/panelComponents/emergencyComponentImage.jpg";
import terminalComponentImage from "../../assets/panelComponents/terminalComponentImage.jpg";
import copperBusComponentImage from "../../assets/panelComponents/copperBusComponentImage.jpg";
import cableComponentImage from "../../assets/panelComponents/cableComponentImage.jpg";
import dinComponentImage from "../../assets/panelComponents/dinComponentImage.jpg";
import coolingFanComponentImage from "../../assets/panelComponents/coolingFanComponentImage.jpg";
import heaterComponentImage from "../../assets/panelComponents/heaterComponentImage.jpg";
import thermostatsComponentImage from "../../assets/panelComponents/thermostatsComponentImage.jpg";
import smpsComponentImage from "../../assets/panelComponents/smpsComponentImage.jpg";
import surgeComponentImage from "../../assets/panelComponents/surgeComponentImage.jpg";

import { makeProduct } from "../helpers.js";

export const automationComponentProducts = [
  {
    id: "panelcomp-plc",
    slug: "plc",
    name: "PLC",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: plcComponentImage,
    summary:
      "Programmable logic controller for executing deterministic industrial control logic and coordinating machine or process operations.",
    description:
      "A PLC is an industrial controller that reads field inputs, executes a programmed control sequence and updates outputs. PLC systems can be expanded with digital I/O, analog modules, communication modules and remote I/O according to application requirements.",
    applications: [
      "Machine automation",
      "Process control",
      "Motor sequencing",
      "Pump automation",
      "Industrial production lines",
    ],
    keyFeatures: [
      "Programmable control logic",
      "Industrial-duty construction",
      "Digital and analog I/O",
      "Communication expansion",
      "Diagnostic capabilities",
    ],
    technicalParameters: [
      "CPU type",
      "Program memory",
      "Digital I/O",
      "Analog I/O",
      "Communication ports",
      "Expansion capacity",
    ],
    selection: [
      "Prepare I/O list",
      "Select required CPU performance",
      "Determine analog requirements",
      "Choose communication protocols",
      "Allow future expansion",
    ],
    featured: true,
  },

  {
    id: "panelcomp-hmi",
    slug: "hmi",
    name: "Industrial HMI",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: hmiComponentImage,
    summary:
      "Industrial human-machine interface for visualizing process data and providing operator controls.",
    description:
      "An industrial HMI provides a graphical interface to PLCs and other controllers. Operators can view measurements, machine states, alarms and process screens and can issue authorized commands. Selection depends on display size, communication protocol, environmental requirements and software capability.",
    applications: [
      "Machine control",
      "Process automation",
      "Pump stations",
      "Production lines",
      "Industrial monitoring",
    ],
    keyFeatures: [
      "Touchscreen interface",
      "PLC communication",
      "Alarm display",
      "Graphical process screens",
      "User-access options",
    ],
    technicalParameters: [
      "Screen size",
      "Resolution",
      "Supply voltage",
      "Communication interfaces",
      "IP rating",
      "Operating temperature",
    ],
    selection: [
      "Determine display size",
      "Identify controller protocol",
      "Assess environment",
      "Define required screen complexity",
      "Check panel cut-out dimensions",
    ],
    featured: true,
  },

  {
    id: "panelcomp-vfd",
    slug: "vfd",
    name: "Variable Frequency Drive",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: vfdComponentImage,
    summary:
      "Electronic motor drive for controlling AC motor speed, acceleration, deceleration and torque.",
    description:
      "A VFD varies the frequency and voltage supplied to an AC motor to control its operating speed. Modern drives provide programmable acceleration, protection, feedback and communication functions. Correct sizing should be based primarily on motor current and duty rather than motor kW alone.",
    applications: [
      "Pump speed control",
      "Fan speed control",
      "Conveyors",
      "HVAC",
      "Process machinery",
    ],
    keyFeatures: [
      "Variable-speed operation",
      "Programmable acceleration",
      "Motor protection",
      "Analog and digital references",
      "Industrial communication options",
    ],
    technicalParameters: [
      "Motor current",
      "Motor power",
      "Input voltage",
      "Output frequency range",
      "Overload rating",
      "Control interface",
    ],
    selection: [
      "Use motor FLA for sizing",
      "Identify load torque type",
      "Check starting and overload duty",
      "Define speed-control method",
      "Assess harmonic and EMC requirements",
    ],
    featured: true,
  },

  {
    id: "panelcomp-soft-starter",
    slug: "soft-starter",
    name: "Soft Starter",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: softComponentImage,
    summary:
      "Semiconductor motor starter that controls voltage during motor acceleration and reduces electrical and mechanical starting stress.",
    description:
      "A soft starter gradually controls the voltage applied to a suitable AC motor during starting. It is primarily intended for controlled acceleration and reduced starting-current demand rather than continuous speed control. Motor current, starting duty and bypass arrangement determine the appropriate device.",
    applications: [
      "Pumps",
      "Fans",
      "Compressors",
      "Conveyors",
      "Industrial motors",
    ],
    keyFeatures: [
      "Controlled motor starting",
      "Reduced starting-current demand",
      "Adjustable ramp time",
      "Motor protection",
      "Bypass options",
    ],
    technicalParameters: [
      "Motor FLA",
      "Motor power",
      "Supply voltage",
      "Overload class",
      "Starting time",
      "Control voltage",
    ],
    selection: [
      "Check motor FLA",
      "Determine starting frequency",
      "Assess load inertia",
      "Select overload class",
      "Determine bypass requirement",
    ],
    featured: false,
  },

  {
    id: "panelcomp-mcb",
    slug: "mcb",
    name: "Miniature Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: mcbComponentImage,
    summary:
      "Compact circuit breaker for overload and short-circuit protection of low-current electrical circuits.",
    description:
      "MCBs provide automatic interruption of circuits during defined overload and short-circuit conditions. They are commonly installed on DIN rails in distribution and control panels. The breaker rating and trip characteristic must be coordinated with conductor capacity and expected fault current.",
    applications: [
      "Control panels",
      "Lighting circuits",
      "Auxiliary power",
      "Small feeders",
      "Building distribution",
    ],
    keyFeatures: [
      "Thermal overload protection",
      "Magnetic short-circuit protection",
      "DIN-rail mounting",
      "Multiple pole configurations",
      "Multiple trip curves",
    ],
    technicalParameters: [
      "Rated current",
      "Rated voltage",
      "Breaking capacity",
      "Trip curve",
      "Number of poles",
      "Frequency",
    ],
    selection: [
      "Determine circuit design current",
      "Check cable ampacity",
      "Calculate fault level",
      "Choose trip curve",
      "Coordinate with upstream protection",
    ],
    featured: false,
  },

  {
    id: "panelcomp-mccb",
    slug: "mccb",
    name: "Moulded Case Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: mccbComponentImage,
    summary:
      "Higher-current low-voltage circuit breaker for feeder and distribution protection.",
    description:
      "MCCBs are used for larger feeders and incomers where the current rating and breaking capacity exceed typical MCB applications. Depending on the model, protection can use thermal-magnetic or electronic trip units. Adjustable settings can help achieve selective coordination.",
    applications: [
      "LT panels",
      "PCCs",
      "MCCs",
      "Industrial feeders",
      "Commercial distribution",
    ],
    keyFeatures: [
      "High-current protection",
      "Thermal-magnetic options",
      "Electronic trip options",
      "Adjustable protection settings",
      "Auxiliary accessories",
    ],
    technicalParameters: [
      "Frame current",
      "Rated current",
      "Breaking capacity",
      "Trip-unit type",
      "Pole count",
      "Rated voltage",
    ],
    selection: [
      "Calculate feeder current",
      "Determine short-circuit level",
      "Select trip-unit type",
      "Coordinate with downstream breakers",
      "Check cable ampacity",
    ],
    featured: false,
  },

  {
    id: "panelcomp-acb",
    slug: "acb",
    name: "Air Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: acbComponentImage,
    summary:
      "High-current low-voltage circuit breaker used for main incomers, bus couplers and large feeders.",
    description:
      "ACBs are designed for high-current switching and protection in low-voltage switchboards. Electronic trip units can provide multiple protection functions and adjustable settings. Fixed and withdrawable constructions are available depending on the switchboard design.",
    applications: [
      "Main LT incomers",
      "PCC panels",
      "MCC panels",
      "Bus couplers",
      "Large industrial feeders",
    ],
    keyFeatures: [
      "High current capability",
      "Electronic protection",
      "Adjustable trip functions",
      "Withdrawable options",
      "Auxiliary and communication accessories",
    ],
    technicalParameters: [
      "Frame size",
      "Rated current",
      "Breaking capacity",
      "Trip-unit functions",
      "Pole count",
      "Mounting arrangement",
    ],
    selection: [
      "Determine maximum demand",
      "Obtain fault-current level",
      "Define protection settings",
      "Check selectivity",
      "Choose fixed or withdrawable construction",
    ],
    featured: true,
  },

  {
    id: "panelcomp-mpcb",
    slug: "mpcb",
    name: "Motor Protection Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: mpcbComponentImage,
    summary:
      "Motor protection circuit breaker combining overload and short-circuit protection for suitable low-voltage motors.",
    description:
      "An MPCB is designed specifically for motor circuits and provides adjustable thermal overload protection with magnetic short-circuit protection. It is commonly combined with a contactor in motor starter assemblies. The adjustment range should cover the motor's actual full-load current.",
    applications: [
      "Motor starters",
      "Pumps",
      "Fans",
      "Compressors",
      "Small industrial machinery",
    ],
    keyFeatures: [
      "Motor-specific overload protection",
      "Short-circuit protection",
      "Adjustable current range",
      "Compact panel mounting",
      "Contactor integration",
    ],
    technicalParameters: [
      "Current adjustment range",
      "Rated voltage",
      "Breaking capacity",
      "Trip class",
      "Pole count",
      "Motor duty",
    ],
    selection: [
      "Read motor nameplate current",
      "Select matching adjustment range",
      "Check prospective fault current",
      "Coordinate with contactor",
      "Verify motor starting conditions",
    ],
    featured: false,
  },

  {
    id: "panelcomp-rccb",
    slug: "rccb",
    name: "Residual Current Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: rccbComponentImage,
    summary:
      "Residual-current protective device intended to disconnect a circuit when leakage current exceeds its specified threshold.",
    description:
      "An RCCB monitors the current relationship between live conductors and detects residual current caused by leakage to earth. It is primarily intended for protection against electric shock and certain earth-leakage conditions, but it does not replace overcurrent protection unless the device is specifically designed to combine both functions.",
    applications: [
      "Residential distribution",
      "Commercial electrical panels",
      "Wet-area circuits",
      "Socket circuits",
      "Electrical safety systems",
    ],
    keyFeatures: [
      "Residual-current detection",
      "Rapid disconnection",
      "Multiple sensitivity options",
      "Single-phase and three-phase configurations",
      "Test-button functionality",
    ],
    technicalParameters: [
      "Rated current",
      "Rated voltage",
      "Residual operating current",
      "Pole configuration",
      "Type of residual-current detection",
      "Short-circuit protection requirement",
    ],
    selection: [
      "Determine system voltage",
      "Select rated current",
      "Choose residual-current sensitivity",
      "Identify leakage-current waveform/type",
      "Provide separate overcurrent protection where required",
    ],
    featured: false,
  },

  {
    id: "panelcomp-elcb",
    slug: "elcb",
    name: "Earth Leakage Circuit Breaker",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: elcbComponentImage,
    summary:
      "Earth-leakage protection device for detecting abnormal leakage conditions and disconnecting the associated circuit.",
    description:
      "Earth-leakage protection devices are used to reduce the risk associated with insulation faults and leakage currents. Modern installations commonly use residual-current sensing devices; exact terminology and protection method should be verified against the selected product. Selection must consider the electrical system and required trip sensitivity.",
    applications: [
      "Distribution boards",
      "Commercial installations",
      "Residential electrical systems",
      "Industrial control circuits",
      "Safety-critical circuits",
    ],
    keyFeatures: [
      "Earth-leakage detection",
      "Automatic circuit disconnection",
      "Test function on supported devices",
      "Multiple sensitivity options",
      "Panel integration",
    ],
    technicalParameters: [
      "Rated current",
      "Rated voltage",
      "Leakage sensitivity",
      "Pole configuration",
      "Detection type",
    ],
    selection: [
      "Identify electrical-system arrangement",
      "Determine required leakage sensitivity",
      "Select current rating",
      "Coordinate with upstream protection",
      "Verify compatibility with connected loads",
    ],
    featured: false,
  },

  {
    id: "panelcomp-contactors",
    slug: "contactors",
    name: "Electrical Contactors",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: contactorComponentImage,
    summary:
      "Electromagnetic switching devices for frequent control of motors, heaters and other electrical loads.",
    description:
      "Contactors are electrically operated switches designed for repeated switching of power circuits. Selection depends on the load category, motor current, switching frequency and coil voltage. Auxiliary contacts can provide feedback and interlocking functions.",
    applications: [
      "Motor starters",
      "Pump panels",
      "Lighting control",
      "Heating systems",
      "Automation panels",
    ],
    keyFeatures: [
      "Electromagnetic operation",
      "Main power contacts",
      "Auxiliary contacts",
      "Multiple coil voltages",
      "Motor-duty options",
    ],
    technicalParameters: [
      "Operational current",
      "Coil voltage",
      "Utilization category",
      "Pole count",
      "Auxiliary contacts",
      "Rated insulation voltage",
    ],
    selection: [
      "Determine load type",
      "Use motor FLA for motor applications",
      "Select utilization category",
      "Match coil/control voltage",
      "Check switching frequency",
    ],
    featured: true,
  },

  {
    id: "panelcomp-overload-relays",
    slug: "overload-relays",
    name: "Thermal Overload Relays",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: overloadComponentImage,
    summary:
      "Motor overload protection devices that detect sustained overcurrent and trip the motor control circuit.",
    description:
      "Thermal overload relays protect motors against prolonged overcurrent conditions that can cause excessive heating. They are normally coordinated with a contactor and adjusted according to the motor's full-load current and application requirements.",
    applications: [
      "Motor starter panels",
      "Pumps",
      "Fans",
      "Compressors",
      "Industrial machinery",
    ],
    keyFeatures: [
      "Motor overload protection",
      "Adjustable current range",
      "Manual or automatic reset options",
      "Auxiliary contacts",
      "Contactor integration",
    ],
    technicalParameters: [
      "Current adjustment range",
      "Trip class",
      "Control voltage",
      "Auxiliary contacts",
      "Mounting compatibility",
    ],
    selection: [
      "Read motor nameplate FLA",
      "Select suitable adjustment range",
      "Choose trip class",
      "Coordinate with contactor",
      "Set according to motor and manufacturer guidance",
    ],
    featured: false,
  },

  {
    id: "panelcomp-timers",
    slug: "timers",
    name: "Industrial Timers",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: timerComponentImage,
    summary:
      "Time-control relays for sequencing, delayed switching and timed operation in electrical control circuits.",
    description:
      "Industrial timers provide programmable delays or timed output functions for control sequences. Different timer modes can support delayed energization, delayed de-energization, cyclic operation and pulse timing. The required mode and timing range should be established before selection.",
    applications: [
      "Star-delta starters",
      "Pump control",
      "Automation sequences",
      "Lighting control",
      "Machine control",
    ],
    keyFeatures: [
      "Adjustable timing ranges",
      "Multiple timing modes",
      "DIN-rail or panel mounting",
      "Relay output contacts",
      "Control-sequence integration",
    ],
    technicalParameters: [
      "Timing range",
      "Supply voltage",
      "Output contact rating",
      "Timing mode",
      "Mounting type",
    ],
    selection: [
      "Define required timing function",
      "Determine minimum and maximum delay",
      "Match control voltage",
      "Check output contact rating",
      "Select appropriate mounting style",
    ],
    featured: false,
  },

  {
    id: "panelcomp-power-relays",
    slug: "power-relays",
    name: "Power Relays",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: powerComponentImage,
    summary:
      "Electromechanical relays for switching auxiliary and moderate-power electrical circuits from control signals.",
    description:
      "Power relays provide electrical isolation between a control signal and the switched circuit. They are useful when a PLC, controller or low-power switch needs to operate a higher-current auxiliary load. Coil voltage and contact rating must match the control and load circuits.",
    applications: [
      "PLC output interfaces",
      "Control panels",
      "Alarm circuits",
      "Auxiliary switching",
      "Industrial automation",
    ],
    keyFeatures: [
      "Electrical isolation",
      "Multiple contact arrangements",
      "Coil-voltage options",
      "Higher contact ratings than signal relays",
      "DIN-rail and socket options",
    ],
    technicalParameters: [
      "Coil voltage",
      "Contact voltage",
      "Contact current",
      "Number of contacts",
      "Mounting arrangement",
    ],
    selection: [
      "Determine control voltage",
      "Calculate load current",
      "Check AC/DC load type",
      "Select contact configuration",
      "Provide suppression where required",
    ],
    featured: false,
  },

  {
    id: "panelcomp-ct-pt",
    slug: "ct-pt",
    name: "CT and PT",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: ctptComponentImage,
    summary:
      "Instrument transformers used to scale current and voltage for metering and protection systems.",
    description:
      "Current transformers and potential/voltage transformers provide electrically isolated measurement signals for meters, protection relays and control systems. Correct ratio, burden, accuracy class and insulation level are essential for reliable measurement and protection.",
    applications: [
      "Electrical metering",
      "Protection relays",
      "Power panels",
      "Energy monitoring",
      "Switchgear",
    ],
    keyFeatures: [
      "Measurement isolation",
      "Defined transformation ratios",
      "Metering and protection classes",
      "Multiple mounting arrangements",
      "Integration with meters and relays",
    ],
    technicalParameters: [
      "CT primary/secondary ratio",
      "PT primary/secondary voltage",
      "Accuracy class",
      "Burden",
      "Insulation level",
      "Frequency",
    ],
    selection: [
      "Determine primary current/voltage",
      "Select required secondary values",
      "Choose metering or protection class",
      "Calculate connected burden",
      "Verify insulation requirements",
    ],
    featured: true,
  },

  {
    id: "panelcomp-energy-meters",
    slug: "energy-meters",
    name: "Energy Meters",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: energymeterComponentImage,
    summary:
      "Electrical energy meters for measuring and recording energy consumption in distribution and control panels.",
    description:
      "Energy meters measure electrical parameters and accumulate energy consumption over time. Depending on the model, they can provide voltage, current, power, power factor, frequency and energy measurements. CT-operated meters are used when the measured current exceeds the meter's direct-input capability.",
    applications: [
      "LT panels",
      "Commercial buildings",
      "Industrial energy monitoring",
      "Sub-metering",
      "Power-management systems",
    ],
    keyFeatures: [
      "Energy measurement",
      "Voltage and current measurement",
      "Power-factor measurement",
      "Digital display",
      "Communication options on selected models",
    ],
    technicalParameters: [
      "Voltage input",
      "Current input",
      "CT ratio",
      "Accuracy class",
      "Measurement parameters",
      "Communication interface",
    ],
    selection: [
      "Determine direct or CT-operated measurement",
      "Select phase configuration",
      "Define required measurements",
      "Select accuracy",
      "Specify communication requirements",
    ],
    featured: false,
  },

  {
    id: "panelcomp-multifunction-meters",
    slug: "multifunction-meters",
    name: "Multifunction Power Meters",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: multifunctionComponentImage,
    summary:
      "Digital panel meters that display multiple electrical parameters from a common measurement system.",
    description:
      "Multifunction meters consolidate several electrical measurements into one panel-mounted instrument. Depending on the model, the meter can display phase voltage, line voltage, current, active power, reactive power, apparent power, power factor and energy.",
    applications: [
      "LT panels",
      "PCCs",
      "MCCs",
      "Industrial power monitoring",
      "Energy-management systems",
    ],
    keyFeatures: [
      "Multiple electrical measurements",
      "Digital display",
      "CT/PT input compatibility",
      "Alarm/output options",
      "Communication options",
    ],
    technicalParameters: [
      "Measurement voltage",
      "CT input",
      "PT input",
      "Accuracy",
      "Communication protocol",
      "Auxiliary supply",
    ],
    selection: [
      "List required electrical parameters",
      "Determine CT/PT ratios",
      "Choose accuracy",
      "Select display size",
      "Define communication requirements",
    ],
    featured: false,
  },

  {
    id: "panelcomp-selector-switches",
    slug: "selector-switches",
    name: "Selector Switches",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: selectorComponentImage,
    summary:
      "Rotary selector switches for choosing operating modes, control sources or circuit states in electrical panels.",
    description:
      "Selector switches provide manual selection between predefined control states. Common arrangements include Hand-Off-Auto, Local-Remote and source-selection functions. Contact configuration and maintained or spring-return operation must match the control sequence.",
    applications: [
      "Motor control panels",
      "Generator panels",
      "Automation systems",
      "Pump control",
      "Industrial machinery",
    ],
    keyFeatures: [
      "Multiple switch positions",
      "Maintained and spring-return options",
      "Auxiliary contact blocks",
      "Panel mounting",
      "Clear position indication",
    ],
    technicalParameters: [
      "Number of positions",
      "Contact configuration",
      "Contact rating",
      "Operator type",
      "Mounting diameter",
      "Maintained/spring return",
    ],
    selection: [
      "Define required operating states",
      "Determine contact count",
      "Select switching duty",
      "Check panel cut-out",
      "Choose maintained or spring-return operation",
    ],
    featured: false,
  },

  {
    id: "panelcomp-push-buttons",
    slug: "push-buttons",
    name: "Industrial Push Buttons",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: pushComponentImage,
    summary:
      "Panel-mounted push buttons for manual commands such as start, stop, reset and acknowledge.",
    description:
      "Push buttons provide momentary operator inputs to contactor circuits, PLCs and other control systems. They are available with different contact arrangements and operator colors or markings. Selection should consider voltage, current, environmental protection and required contact configuration.",
    applications: [
      "Motor control panels",
      "Machine control",
      "PLC panels",
      "Pump stations",
      "Industrial equipment",
    ],
    keyFeatures: [
      "Momentary operator action",
      "NO/NC contact options",
      "Illuminated variants",
      "Multiple operator styles",
      "Panel mounting",
    ],
    technicalParameters: [
      "Contact configuration",
      "Contact rating",
      "Operator diameter",
      "Illumination voltage",
      "IP rating",
      "Mounting method",
    ],
    selection: [
      "Determine control voltage",
      "Select NO/NC contacts",
      "Define operator function",
      "Check environmental rating",
      "Confirm panel cut-out size",
    ],
    featured: false,
  },

  {
    id: "panelcomp-indicator-lamps",
    slug: "indicator-lamps",
    name: "Panel Indicator Lamps",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: indicatorComponentImage,
    summary:
      "Visual status indicators for showing power, run, trip, fault and other operating states on electrical panels.",
    description:
      "Indicator lamps provide immediate visual feedback from control circuits. LED indicators are commonly used because of their low power consumption and long service life. The lamp voltage, mounting size and circuit function must match the panel design.",
    applications: [
      "Control panels",
      "Motor starters",
      "Distribution panels",
      "Generator panels",
      "Automation systems",
    ],
    keyFeatures: [
      "LED indication options",
      "Multiple supply voltages",
      "Panel-mounted construction",
      "Multiple indication colors",
      "Low power consumption",
    ],
    technicalParameters: [
      "Supply voltage",
      "Lamp type",
      "Mounting diameter",
      "IP rating",
      "Power consumption",
    ],
    selection: [
      "Define indication function",
      "Match control voltage",
      "Select mounting size",
      "Choose required visual indication",
      "Check panel cut-out",
    ],
    featured: false,
  },

  {
    id: "panelcomp-emergency-stop",
    slug: "emergency-stop",
    name: "Emergency Stop Switch",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: emergencyComponentImage,
    summary:
      "Emergency-stop operator for rapidly initiating a defined safety stop sequence on compatible machinery and control systems.",
    description:
      "Emergency-stop devices provide a clearly identifiable means of initiating a safety-related stop function when an unsafe condition occurs. The device itself is only one part of the safety system; the complete safety circuit, reset arrangement and stopping category must be engineered according to the machine risk assessment.",
    applications: [
      "Industrial machinery",
      "Conveyor systems",
      "Production lines",
      "Pump and process systems",
      "Automation equipment",
    ],
    keyFeatures: [
      "Highly visible operator",
      "Positive-action contact options",
      "Twist or pull reset mechanisms",
      "Safety-circuit integration",
      "Panel or enclosure mounting",
    ],
    technicalParameters: [
      "Contact configuration",
      "Contact rating",
      "Operator diameter",
      "Reset method",
      "Mounting type",
      "Environmental rating",
    ],
    selection: [
      "Perform machine risk assessment",
      "Define required safety circuit",
      "Select contact configuration",
      "Determine reset method",
      "Verify safety-system compatibility",
    ],
    featured: true,
  },

  {
    id: "panelcomp-terminal-blocks",
    slug: "terminal-blocks",
    name: "Terminal Blocks",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: terminalComponentImage,
    summary:
      "Modular connection terminals for organized termination of control, signal and power wiring inside electrical panels.",
    description:
      "Terminal blocks provide structured and serviceable electrical connections between field cables and internal panel wiring. Variants include feed-through, fuse, disconnect, earth and multi-level terminals. Correct selection depends on conductor size, current, voltage and required accessories.",
    applications: [
      "Control panels",
      "PLC panels",
      "Instrumentation panels",
      "Distribution boards",
      "Industrial automation",
    ],
    keyFeatures: [
      "DIN-rail mounting",
      "Modular construction",
      "Multiple conductor sizes",
      "Earth and fuse terminal options",
      "Identification accessories",
    ],
    technicalParameters: [
      "Rated voltage",
      "Rated current",
      "Conductor size",
      "Pitch",
      "Mounting type",
      "Number of levels",
    ],
    selection: [
      "Determine conductor size",
      "Check circuit current",
      "Select terminal type",
      "Calculate required terminal count",
      "Specify markers and jumpers",
    ],
    featured: false,
  },

  {
    id: "panelcomp-copper-bus-bars",
    slug: "copper-bus-bars",
    name: "Copper Bus Bars",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: copperBusComponentImage,
    summary:
      "Copper busbar material and assemblies for high-current distribution within electrical switchboards and control panels.",
    description:
      "Copper busbars provide low-impedance current paths between incomers, breakers and outgoing feeders. Their dimensions and support spacing must be selected based on continuous current, temperature rise, short-circuit forces and required clearances.",
    applications: [
      "LT panels",
      "PCCs",
      "MCCs",
      "Distribution boards",
      "Industrial switchgear",
    ],
    keyFeatures: [
      "High-current conduction",
      "Low electrical resistance",
      "Custom cut and drilled options",
      "Insulation/support options",
      "Suitable for engineered switchboards",
    ],
    technicalParameters: [
      "Copper grade",
      "Cross-sectional dimensions",
      "Continuous current",
      "Short-circuit withstand",
      "Temperature rise",
      "Support spacing",
    ],
    selection: [
      "Calculate continuous current",
      "Determine fault withstand requirement",
      "Select cross-section",
      "Verify enclosure clearances",
      "Design appropriate supports",
    ],
    featured: true,
  },

  {
    id: "panelcomp-cable-glands",
    slug: "cable-glands",
    name: "Cable Glands",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: cableComponentImage,
    summary:
      "Cable-entry accessories used to mechanically secure and seal cables entering electrical panels and enclosures.",
    description:
      "Cable glands provide mechanical retention and, depending on the design, environmental sealing and strain relief at an enclosure cable entry. Selection depends on cable diameter, cable construction, thread type, enclosure IP requirement and installation environment.",
    applications: [
      "Electrical panels",
      "Junction boxes",
      "Industrial enclosures",
      "Outdoor switchgear",
      "Cable termination systems",
    ],
    keyFeatures: [
      "Cable retention",
      "Strain relief",
      "Environmental sealing options",
      "Metallic and non-metallic variants",
      "Multiple thread standards",
    ],
    technicalParameters: [
      "Cable diameter range",
      "Thread size",
      "Material",
      "IP rating",
      "Armoured/unarmoured compatibility",
      "Operating temperature",
    ],
    selection: [
      "Measure cable outer diameter",
      "Identify armoured or unarmoured cable",
      "Select thread standard",
      "Determine required IP rating",
      "Check enclosure entry dimensions",
    ],
    featured: false,
  },

  {
    id: "panelcomp-din-rails",
    slug: "din-rails",
    name: "DIN Rails",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: dinComponentImage,
    summary:
      "Standardized mounting rails for installing modular electrical and automation components inside control panels.",
    description:
      "DIN rails provide a standardized mechanical mounting surface for terminal blocks, relays, MCBs, interface modules, power supplies and other compatible devices. Rail type, material and length must be selected according to the installed equipment and panel construction.",
    applications: [
      "Control panels",
      "Automation cabinets",
      "Distribution boards",
      "PLC panels",
      "Instrumentation panels",
    ],
    keyFeatures: [
      "Standard modular mounting",
      "Quick component installation",
      "Multiple rail profiles",
      "Galvanized or stainless options",
      "Easy panel organization",
    ],
    technicalParameters: [
      "Rail profile",
      "Length",
      "Material",
      "Thickness",
      "Mounting-hole arrangement",
    ],
    selection: [
      "Identify compatible component profile",
      "Calculate required rail length",
      "Choose material",
      "Plan mounting spacing",
      "Allow service clearance",
    ],
    featured: false,
  },

  {
    id: "panelcomp-cooling-fans",
    slug: "panel-cooling-fans",
    name: "Panel Cooling Fans",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: coolingFanComponentImage,
    summary:
      "Ventilation fans for removing heat from electrical and automation control panels.",
    description:
      "Panel cooling fans create forced airflow through an enclosure to reduce internal temperature. They are commonly paired with intake filters and exhaust arrangements. Fan capacity must be calculated from the internal heat load and the acceptable temperature rise.",
    applications: [
      "VFD panels",
      "PLC panels",
      "MCC panels",
      "Automation cabinets",
      "Industrial control enclosures",
    ],
    keyFeatures: [
      "Forced-air enclosure cooling",
      "Filter-fan arrangements",
      "Thermostat-controlled operation",
      "Multiple airflow capacities",
      "Panel-mounted installation",
    ],
    technicalParameters: [
      "Supply voltage",
      "Airflow",
      "Fan dimensions",
      "Power consumption",
      "Noise level",
      "Filter compatibility",
    ],
    selection: [
      "Estimate panel heat load",
      "Determine allowable temperature rise",
      "Calculate required airflow",
      "Select fan and filter size",
      "Consider ambient temperature",
    ],
    featured: false,
  },

  {
    id: "panelcomp-heaters",
    slug: "panel-heaters",
    name: "Panel Heaters",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: heaterComponentImage,
    summary:
      "Anti-condensation heaters used inside electrical enclosures to control moisture during low-temperature or high-humidity conditions.",
    description:
      "Panel heaters maintain the enclosure temperature above the point where condensation could form on electrical components. They are normally controlled by a thermostat or hygrostat and are especially useful where outdoor or humid conditions create condensation risk.",
    applications: [
      "Outdoor electrical panels",
      "Substation cabinets",
      "Industrial enclosures",
      "Instrumentation cabinets",
      "Control panels in humid environments",
    ],
    keyFeatures: [
      "Anti-condensation heating",
      "Compact enclosure mounting",
      "Thermostat control",
      "DIN-rail options",
      "Multiple heating capacities",
    ],
    technicalParameters: [
      "Heating power",
      "Supply voltage",
      "Mounting type",
      "Surface temperature",
      "Control method",
    ],
    selection: [
      "Assess enclosure volume",
      "Determine ambient temperature",
      "Assess humidity and condensation risk",
      "Select heating power",
      "Pair with suitable thermostat",
    ],
    featured: false,
  },

  {
    id: "panelcomp-thermostats",
    slug: "panel-thermostats",
    name: "Panel Thermostats",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: thermostatsComponentImage,
    summary:
      "Temperature-control devices for switching panel heaters or cooling equipment according to enclosure temperature.",
    description:
      "Panel thermostats monitor enclosure temperature and switch connected heating or cooling equipment at configured thresholds. Correct installation requires separation between heating and cooling controls where both functions are used.",
    applications: [
      "Electrical enclosures",
      "PLC cabinets",
      "Outdoor panels",
      "Automation cabinets",
      "Control-system thermal management",
    ],
    keyFeatures: [
      "Adjustable temperature threshold",
      "Compact panel mounting",
      "Heating or cooling control",
      "Mechanical or electronic options",
      "DIN-rail or enclosure mounting",
    ],
    technicalParameters: [
      "Temperature range",
      "Contact rating",
      "Supply requirement",
      "Mounting method",
      "Switching differential",
    ],
    selection: [
      "Determine enclosure operating temperature",
      "Select switching range",
      "Check connected heater/fan current",
      "Choose mounting style",
      "Set appropriate control differential",
    ],
    featured: false,
  },

  {
    id: "panelcomp-smps",
    slug: "smps",
    name: "Industrial SMPS",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: smpsComponentImage,
    summary:
      "Switch-mode power supply for converting AC or DC input into regulated DC control voltage for automation and electrical panels.",
    description:
      "Industrial SMPS units provide regulated DC power for PLCs, sensors, relays, communication equipment and other control components. The power supply should be sized with sufficient capacity for normal load, startup current and future expansion.",
    applications: [
      "PLC panels",
      "Automation cabinets",
      "Relay control circuits",
      "Instrumentation systems",
      "Industrial communication equipment",
    ],
    keyFeatures: [
      "Regulated DC output",
      "DIN-rail mounting options",
      "Overload protection",
      "Short-circuit protection",
      "Industrial operating temperature ranges",
    ],
    technicalParameters: [
      "Input voltage",
      "Output voltage",
      "Output current",
      "Power rating",
      "Efficiency",
      "Protection functions",
    ],
    selection: [
      "Calculate total DC load",
      "Allow startup margin",
      "Check input supply",
      "Select output voltage",
      "Consider future expansion",
    ],
    featured: true,
  },

  {
    id: "panelcomp-spd",
    slug: "panel-spd",
    name: "Panel Surge Protection Device",
    category: "automation-components",
    categoryName: "Automation & Control Components",
    image: surgeComponentImage,
    summary:
      "Surge protective device for limiting transient overvoltage in electrical distribution and control panels.",
    description:
      "Panel SPDs divert transient surge energy away from sensitive equipment. Correct SPD selection depends on the electrical system configuration, earthing arrangement, installation location, expected surge exposure and required discharge capability.",
    applications: [
      "Control panels",
      "PLC panels",
      "Distribution boards",
      "Instrumentation panels",
      "Industrial automation systems",
    ],
    keyFeatures: [
      "Transient overvoltage protection",
      "DIN-rail mounting",
      "Status indication options",
      "Replaceable-module options",
      "Multiple system configurations",
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
      "Identify system earthing arrangement",
      "Determine installation location",
      "Select SPD type",
      "Check expected surge environment",
      "Coordinate upstream protection",
    ],
    featured: false,
  },
];

