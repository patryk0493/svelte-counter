<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { fade } from "svelte/transition";
  import Button from "carbon-components-svelte/src/Button/Button.svelte";

  export let power: number;
  export let displayBits: boolean;
  export let isHintGiven: boolean;
  export let isChecked: boolean;
  export let activeId: number;
  export let toggle: (e: MouseEvent) => void;
</script>

<div transition:fade={{ duration: 100 }}>
  <Button
    data-power={power}
    on:click={toggle}
    disabled={isHintGiven}
    kind={isChecked ? "primary" : "secondary"}
  >
    {#if displayBits}
      {activeId}
    {:else}
      {Math.pow(2, power)}
    {/if}
  </Button>
</div>
