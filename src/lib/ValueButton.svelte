<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { fade } from "svelte/transition";

  export let power: number;
  export let displayBits: boolean;
  export let isHintGiven: boolean;
  export let activeId: number;
  export let toggle: MouseEventHandler<HTMLButtonElement>;
</script>

<button
  transition:fade
  data-power={power}
  on:click={toggle}
  disabled={isHintGiven}
>
  {#if displayBits}
    {activeId}
  {:else}
    2<sup>{power}</sup>
  {/if}
</button>
