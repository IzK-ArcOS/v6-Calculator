<script lang="ts">
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let runtime: Runtime;

  const { Value } = runtime;
</script>

<input type="text" class="display" readonly value={$Value} placeholder="0" />
<div class="keys">
  {#each runtime.keys as key}
    {#if !key[0].startsWith("%%")}
      <button
        on:click={() => runtime.processKey(key[1])}
        class:empty={!key[0]}
        class:alt={runtime.Store.altClasses.includes(key[1])}
        class="shell-colored"
      >
        {key[0]}
      </button>
    {:else}
      <button on:click={runtime.Functions[key[0]][1]} class={runtime.Functions[key[1]][2]}>
        {runtime.Functions[key[1]][0]}
      </button>
    {/if}
  {/each}
</div>
