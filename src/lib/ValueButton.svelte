<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let power: number;
  export let base: number;
  export let displayBits: boolean;
  export let activeId: number;
  export let toggle: MouseEventHandler<HTMLButtonElement>;
</script>

<button data-power={power} on:click={toggle} class:active={!!activeId}>
  {#if displayBits}
    {activeId}
  {:else}
    {base}<sup>{power}</sup>
  {/if}
</button>
