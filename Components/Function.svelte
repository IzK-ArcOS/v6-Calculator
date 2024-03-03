<script lang="ts">
  import { Runtime } from "../ts/runtime";
  import { CalculatorKey } from "../ts/types";

  export let runtime: Runtime;
  export let key: CalculatorKey;
</script>

<button on:click={runtime.Functions[key[0]][1]} class={runtime.Functions[key[1]][2]}>
  {runtime.Functions[key[1]][0]}
</button>
