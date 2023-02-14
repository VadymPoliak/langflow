import { RocketLaunchIcon, LinkIcon, CpuChipIcon, LightBulbIcon, CommandLineIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  export const textColors = {
    white: "text-white",
    red: "text-red-700",
    orange: "text-orange-700",
    amber: "text-amber-700",
    yellow: "text-yellow-700",
    lime: "text-lime-700",
    green: "text-green-700",
    emerald: "text-emerald-700",
    teal: "text-teal-700",
    cyan: "text-cyan-700",
    sky: "text-sky-700",
    blue: "text-blue-700",
    indigo: "text-indigo-700",
    violet: "text-violet-700",
    purple: "text-purple-700",
    fuchsia: "text-fuchsia-700",
    pink: "text-pink-700",
    rose: "text-rose-700",
    black: "text-black-700",
    gray: "text-gray-700",
  };

  export const borderLColors = {
    white: "border-l-white",
    red: "border-l-red-500",
    orange: "border-l-orange-500",
    amber: "border-l-amber-500",
    yellow: "border-l-yellow-500",
    lime: "border-l-lime-500",
    green: "border-l-green-500",
    emerald: "border-l-emerald-500",
    teal: "border-l-teal-500",
    cyan: "border-l-cyan-500",
    sky: "border-l-sky-500",
    blue: "border-l-blue-500",
    indigo: "border-l-indigo-500",
    violet: "border-l-violet-500",
    purple: "border-l-purple-500",
    fuchsia: "border-l-fuchsia-500",
    pink: "border-l-pink-500",
    rose: "border-l-rose-500",
    black: "border-l-black-500",
    gray: "border-l-gray-500",
  };

  /* export const nodeColors = {
    prompt: "#35ADAE",
    model: "#4266BE",
    chain: "#6344BE",
    agent: "#903BBE",
    tool: "#DB3392",
    memory: "#FF3434",
  } */

  /* export const nodeColors = {
    prompt: "#36D635",
    model: "#4266BE",
    chain: "#903BBE",
    agent: "#FF3434",
    tool: "#FEBB35",
    memory: "#FFFF33",
  } */

  /* export const nodeColors = {
    prompt: "#36D635",
    model: "#35ADAE",
    chain: "#903BBE",
    agent: "#DB3392",
    tool: "#FF9135",
    memory: "#FFDC35",
  } */

  /* export const nodeColors = {
    prompt: "#36D635",
    model: "#35ADAE",
    chain: "#903BBE",
    agent: "#DB3392",
    tool: "#FF3434",
    memory: "#FF9135",
  } */

  export const nodeColors = {
    prompts: "#7C7C7C",
    llms: "#35ADAE",
    chains: "#FFDC35",
    agents: "#903BBE",
    tools: "#FF3434",
    memories: "#FF9135",
  }


  export const nodeIcons = {
    agents: RocketLaunchIcon,
    chains: LinkIcon,
    memories: CpuChipIcon,
    llms: LightBulbIcon,
    prompts: CommandLineIcon,
    tools: WrenchScrewdriverIcon,
  }
  
  export const bgColors = {
    white: "bg-white",
    red: "bg-red-100",
    orange: "bg-orange-100",
    amber: "bg-amber-100",
    yellow: "bg-yellow-100",
    lime: "bg-lime-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    teal: "bg-teal-100",
    cyan: "bg-cyan-100",
    sky: "bg-sky-100",
    blue: "bg-blue-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    purple: "bg-purple-100",
    fuchsia: "bg-fuchsia-100",
    pink: "bg-pink-100",
    rose: "bg-rose-100",
    black: "bg-black-100",
    gray: "bg-gray-100",
  };
  
  export const bgColorsHover = {
    white: "hover:bg-white",
    black: "hover:bg-black-50",
    gray: "hover:bg-gray-50",
    red: "hover:bg-red-50",
    orange: "hover:bg-orange-50",
    amber: "hover:bg-amber-50",
    yellow: "hover:bg-yellow-50",
    lime: "hover:bg-lime-50",
    green: "hover:bg-green-50",
    emerald: "hover:bg-emerald-50",
    teal: "hover:bg-teal-50",
    cyan: "hover:bg-cyan-50",
    sky: "hover:bg-sky-50",
    blue: "hover:bg-blue-50",
    indigo: "hover:bg-indigo-50",
    violet: "hover:bg-violet-50",
    purple: "hover:bg-purple-50",
    fuchsia: "hover:bg-fuchsia-50",
    pink: "hover:bg-pink-50",
    rose: "hover:bg-rose-50",
  };
  
  export const textColorsHex = {
    red: "rgb(185 28 28)",
    orange: "rgb(194 65 12)",
    amber: "rgb(180 83 9)",
    yellow: "rgb(161 98 7)",
    lime: "rgb(77 124 15)",
    green: "rgb(21 128 61)",
    emerald: "rgb(4 120 87)",
    teal: "rgb(15 118 110)",
    cyan: "rgb(14 116 144)",
    sky: "rgb(3 105 161)",
    blue: "rgb(29 78 216)",
    indigo: "rgb(67 56 202)",
    violet: "rgb(109 40 217)",
    purple: "rgb(126 34 206)",
    fuchsia: "rgb(162 28 175)",
    pink: "rgb(190 24 93)",
    rose: "rgb(190 18 60)",
  };
  
  export const bgColorsHex = {
    red: "rgb(254 226 226)",
    orange: "rgb(255 237 213)",
    amber: "rgb(254 243 199)",
    yellow: "rgb(254 249 195)",
    lime: "rgb(236 252 203)",
    green: "rgb(220 252 231)",
    emerald: "rgb(209 250 229)",
    teal: "rgb(204 251 241)",
    cyan: "rgb(207 250 254)",
    sky: "rgb(224 242 254)",
    blue: "rgb(219 234 254)",
    indigo: "rgb(224 231 255)",
    violet: "rgb(237 233 254)",
    purple: "rgb(243 232 255)",
    fuchsia: "rgb(250 232 255)",
    pink: "rgb(252 231 243)",
    rose: "rgb(255 228 230)",
  };
  
  export const taskTypeMap: { [key: string]: string } = {
    MULTICLASS_CLASSIFICATION: "Multiclass Classification",
  };
  
  const charWidths = {
    " ": 0.2,
    "!": 0.2,
    '"': 0.3,
    "#": 0.5,
    "$": 0.5,
    "%": 0.5,
    "&": 0.5,
    "(": 0.2,
    ")": 0.2,
    "*": 0.5,
    "+": 0.5,
    ",": 0.2,
    "-": 0.2,
    ".": 0.1,
    "/": 0.5,
    ":": 0.2,
    ";": 0.2,
    "<": 0.5,
    "=": 0.5,
    ">": 0.5,
    "?": 0.2,
    "@": 0.5,
    "[": 0.2,
    "\\": 0.5,
    "]": 0.2,
    "^": 0.5,
    "_": 0.2,
    "`": 0.5,
    "{": 0.2,
    "|": 0.2,
    "}": 0.2,
    "~": 0.5,
  };
  
  for (let i = 65; i <= 90; i++) {
    charWidths[String.fromCharCode(i)] = 0.6;
  }
  for (let i = 97; i <= 122; i++) {
    charWidths[String.fromCharCode(i)] = 0.5;
  }
  
  export function measureTextWidth(text: string, fontSize) {
    let wordWidth = 0;
    for (let j = 0; j < text.length; j++) {
      let char = text[j];
      let charWidth = charWidths[char] || 0.5;
      wordWidth += charWidth * fontSize;
    }
    return wordWidth;
  }
  
  export function measureTextHeight(text: string, width, fontSize) {
    const charHeight = fontSize;
    const lineHeight = charHeight * 1.5;
    const words = text.split(" ");
    let lineWidth = 0;
    let totalHeight = 0;
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let wordWidth = measureTextWidth(word, fontSize);
      if (lineWidth + wordWidth + charWidths[" "] * fontSize <= width) {
        lineWidth += wordWidth + charWidths[" "] * fontSize;
      } else {
        totalHeight += lineHeight;
        lineWidth = wordWidth;
      }
    }
    totalHeight += lineHeight;
    return totalHeight;
  }
  
  export function toCamelCase(str: string){
    return str
      .split(' ')
      .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
      .join('');
  };
  export function toFirstUpperCase(str: string){
    return str
      .split(' ')
      .map((word, index) => (word[0].toUpperCase() + word.slice(1).toLowerCase()))
      .join('');
  };

  export function snakeToNormalCase(str: string){
    return str
      .split('_')
      .map((word, index) => {if(index === 0){return word[0].toUpperCase() + word.slice(1).toLowerCase()} return word.toLowerCase()})
      .join(' ');
  };
  
  export function roundNumber(x, decimals){
    return Math.round(x * Math.pow(10, decimals))/Math.pow(10, decimals)
  }
  