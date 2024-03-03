import { CalculatorIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const CalculatorApp: App = {
  metadata: {
    name: "Calculator",
    description: "ArcOS Calculator",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: CalculatorIcon,
    appGroup: "utilities",
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "CalculatorApp",
  size: { w: 340, h: NaN },
  pos: { x: 60, y: 60 },
  minSize: { w: 340, h: NaN },
  maxSize: { w: 340, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  glass: true,
};
