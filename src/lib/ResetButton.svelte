<script lang="ts">
  import { Button } from "carbon-components-svelte";

  export let reset: () => void;
  export let isCorrect: boolean;
</script>

<Button on:click={reset}>
  {#if isCorrect}
    Play again
  {:else}
    Reset
  {/if}
</Button>
