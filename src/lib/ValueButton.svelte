<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { fade } from "svelte/transition";

  export let power: number;
  export let displayBits: boolean;
  export let isHintGiven: boolean;
  export let isChecked: boolean;
  export let activeId: number;
  export let toggle: MouseEventHandler<HTMLButtonElement>;
</script>

<button
  transition:fade={{ duration: 100 }}
  data-power={power}
  on:click={toggle}
  disabled={isHintGiven}
  class:checked={isChecked}
>
  {#if displayBits}
    {activeId}
  {:else}
    {Math.pow(2, power)}
  {/if}
</button>

<style>
  .checked {
    color: #959affa3;
  }
</style>
