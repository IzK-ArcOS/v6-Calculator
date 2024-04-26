import { Runtime } from "./runtime";

// Keyboard shortcuts to send to the AcceleratorHandler
export function CalculatorAccelerators(runtime: Runtime) {
  return [
    ...runtime.generateKeyboardShortcuts(),
    { key: "enter", action: () => runtime.evaluate() },
    { key: "escape", action: () => runtime.Value.set("") },
  ];
}
