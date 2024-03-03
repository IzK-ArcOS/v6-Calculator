<script lang="ts">
  import Function from "./Components/Function.svelte";
  import Key from "./Components/Key.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let runtime: Runtime;

  const { Value } = runtime;
</script>

<input type="text" class="display" readonly value={$Value} placeholder="0" />
<div class="keys">
  {#each runtime.keys as key}
    {#if !key[0].startsWith("%%")}
      <Key {key} {runtime} />
    {:else}
      <Function {key} {runtime} />
    {/if}
  {/each}
</div>
