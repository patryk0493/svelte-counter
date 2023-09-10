<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import svelteLogo from "@/assets/svelte.svg";

  let Main: ComponentType;

  onMount(async () => {
    Main = (await import(`./lib/Main.svelte`)).default;
  });
</script>

<img id="svelte-logo" src={svelteLogo} alt="svelte" />

<svelte:component this={Main} />

<style>
  #svelte-logo {
    width: 100px;
  }
</style>
