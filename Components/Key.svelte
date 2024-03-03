<script lang="ts">
  import { Runtime } from "../ts/runtime";
  import { CalculatorKey } from "../ts/types";

  export let runtime: Runtime;
  export let key: CalculatorKey;
</script>

<button
  on:click={() => runtime.processKey(key[1])}
  class:empty={!key[0]}
  class:alt={runtime.Store.altClasses.includes(key[1])}
  class="shell-colored"
>
  {key[0]}
</button>
