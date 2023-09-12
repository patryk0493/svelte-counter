<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import ResetButton from "@/lib/ResetButton.svelte";
  import { store } from "@/store/useStore";
  import {
    Button,
    ButtonSet,
    FormGroup,
    NumberInput,
  } from "carbon-components-svelte";

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
    answers,
    movesCount,
    hintsLeft,
    hints,
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

  function handlePowersCountInput(e: CustomEvent<number | null>) {
    const value = Number(e.detail);
    if (value < 1) return;
    store.setPowersCount(value);
  }
</script>

<header>
  <FormGroup>
    <NumberInput
      label="Powers count"
      id="powers-count"
      type="number"
      class="powers-count"
      value={$powersCount}
      min={1}
      max={10}
      on:input={handlePowersCountInput}
    />
  </FormGroup>

  <FormGroup>
    <ResetButton reset={store.reset} isCorrect={$isCorrect} />

    <Button disabled={$hintsLeft <= 0 || $isCorrect} on:click={store.giveHint}
      >Give a hint ({$hintsLeft})
    </Button>

    <Button on:click={store.toggleDisplayBits}>
      Display
      {$displayBits ? "powers" : "bits"}
    </Button>
  </FormGroup>
</header>

<main>
  {#key $isCorrect || $noHintsLeft || $goal}
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

  <ButtonSet>
    {#each $powers as power, index (index)}
      <div animate:flip>
        <svelte:component
          this={ValueButton}
          activeId={!$hints[index] ? $answers[index] : $binarySolution[index]}
          isChecked={!!$hints[index] || $hints[index] !== $answers[index]}
          toggle={tryToggle}
          {power}
          displayBits={$displayBits}
          isHintGiven={!!$hints[index]}
        />
      </div>
    {/each}
  </ButtonSet>

  <h1>You made {$movesCount} move/s</h1>
</main>
