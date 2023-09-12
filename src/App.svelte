<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import svelteLogo from "@/assets/svelte.svg";
  import {
    Column,
    Content,
    Grid,
    Header,
    HeaderAction,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
    Row,
    SkipToContent,
    Theme,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
  import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";

  let Main: ComponentType;
  let theme: CarbonTheme = "g90";
  let isSideNavOpen = false;
  let isOpen = false;

  onMount(async () => {
    Main = (await import(`./lib/Main.svelte`)).default;
  });
</script>

<Theme bind:theme />

<Header
  persistentHamburgerMenu={true}
  company="Complexity game"
  bind:isSideNavOpen
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <HeaderUtilities>
    <HeaderAction bind:isOpen>
      <HeaderPanelLinks>
        <HeaderPanelDivider>theme</HeaderPanelDivider>
        {#each ["white", "g10", "g80", "g90", "g100"] as value}
          <HeaderPanelLink
            on:click={() => {
              theme = value;
            }}
          >
            {value}
          </HeaderPanelLink>
        {/each}
        <HeaderPanelDivider>-</HeaderPanelDivider>
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
        <img id="svelte-logo" src={svelteLogo} alt="svelte" />

        <svelte:component this={Main} />
      </Column>
    </Row>
  </Grid>
</Content>

<style>
  #svelte-logo {
    width: 100px;
  }
</style>
