<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import ResetButton from "@/lib/ResetButton.svelte";
  import { store } from "@/store/useStore";

  let ValueButton: ComponentType;

  onMount(async () => {
    ValueButton = (await import(`./ValueButton.svelte`)).default;
  });

  const {
    isCorrect,
    currentValue,
    powers,
    binarySolution,
    goal,
    powersCount,
    displayBits,
    noHintsLeft,
  } = store;

  $: document.title = `cplx:  ${$goal}: ${$currentValue} | complexity game`;

  function tryToggle(
    event: MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement;
    },
  ) {
    const value = Number(event.currentTarget.dataset["power"]);
    if ($isCorrect) return;
    store.tryToggle(value);
  }

  function handlePowersCountInput(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const inputElement = e.target as HTMLInputElement;
    const value = Number(inputElement.value);
    if (value < 1) return;
    store.setPowersCount(value);
  }
</script>

<header>
  <label for="powers-count"> Powers count </label>
  <input
    id="powers-count"
    type="number"
    class="powers-count"
    value={$powersCount}
    min="1"
    max="10"
    on:input={handlePowersCountInput}
  />
  <br />

  <ResetButton reset={store.reset} isCorrect={$isCorrect} />

  <button
    disabled={$store.hintsLeft <= 0 || $isCorrect}
    on:click={store.giveHint}
    >Give a hint ({$store.hintsLeft})
  </button>

  <button on:click={store.toggleDisplayBits}>
    Display
    {$displayBits ? "powers" : "bits"}
  </button>
</header>

<main>
  {#key $isCorrect || $noHintsLeft}
    <h1 in:fade>
      {#if $noHintsLeft}
        You used all of hints!
      {:else if $isCorrect}
        🚀 You won! ✅
      {:else}
        Your goal is <b>{$goal}</b>, but you got: {$currentValue}
      {/if}
    </h1>
  {/key}

  <div class:won={$isCorrect} class="list">
    {#each $powers as power, index (index)}
      <div animate:flip>
        <svelte:component
          this={ValueButton}
          activeId={!$store.hints[index]
            ? $store.active[index]
            : $binarySolution[index]}
          toggle={tryToggle}
          {power}
          displayBits={$displayBits}
          isHintGiven={!!$store.hints[index]}
        />
      </div>
    {/each}
  </div>

  <h1>You made {$store.moves} move/s</h1>
</main>
