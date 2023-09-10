<script lang="ts">
  import { onMount, type ComponentType } from "svelte";

  let Main: ComponentType;

  onMount(async () => {
    Main = (await import(`./lib/Main.svelte`)).default;
  });
</script>

<svelte:component this={Main} />
