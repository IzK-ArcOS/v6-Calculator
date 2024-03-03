import { Runtime } from "./runtime";

export function CalculatorAccelerators(runtime: Runtime) {
  return [
    ...runtime.generateKeyboardShortcuts(),
    { key: "enter", action: () => runtime.evaluate() },
    { key: "escape", action: () => runtime.Value.set("") },
  ];
}
