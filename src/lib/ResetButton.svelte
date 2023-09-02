<script lang="ts">
  export let reset: () => void;
  export let isCorrect: boolean;
</script>

<button on:click={reset}>
  {#if isCorrect}
    Play again
  {:else}
    Reset
  {/if}
</button>
