<script lang="ts">
  import {
    binaryToDecimal,
    decimalToBinary,
    emptyArray,
    generateRandom,
    generateRandomNonZero,
  } from "../utils/utils";
  import ResetButton from "./ResetButton.svelte";
  import ValueButton from "./ValueButton.svelte";

  export let powersCount = 4;
  export let displayBits = true;

  let moves = 0;
  let hintsLeft = powersCount;
  let hints = emptyArray(powersCount);
  let active = emptyArray(powersCount);

  $: powers = active.map((_, index) => powersCount - 1 - index);
  $: goal = generateRandomNonZero(Math.pow(2, powersCount));
  $: isCorrect = currentValue === goal;
  $: currentValue = binaryToDecimal(active);
  $: binarySolution = decimalToBinary(goal, active.length);
  $: document.title = `cplx:  ${goal}: ${currentValue} | complexity game`;

  function tryToggle(
    event: MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement;
    }
  ) {
    if (isCorrect) return;
    moves++;
    const index =
      active.length - 1 - Number(event.currentTarget.dataset["power"]);
    active[index] = active[index] === 0 ? 1 : 0;
  }

  function reset() {
    moves = 0;
    hintsLeft = powersCount;
    hints = emptyArray(powersCount);
    active = emptyArray(powersCount);
    goal = generateRandomNonZero(Math.pow(2, powersCount));
  }

  function handlePowersCountInput(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    const inputElement = e.target as HTMLInputElement;
    const value = Number(inputElement.value);
    if (value < 1) return;
    powersCount = value;
    reset();
  }

  function giveHint() {
    const index = generateRandom(active.length);
    if (hints[index]) {
      giveHint();
      return;
    }
    moves++;
    hintsLeft--;
    hints[index] = 1;
    active[index] = binarySolution[index];
  }
</script>

<main>
  <label for="powers-count"> Powers count </label>
  <input
    id="powers-count"
    type="number"
    class="powers-count"
    value={powersCount}
    on:input={handlePowersCountInput}
  />
  <br />

  <ResetButton {reset} {isCorrect} />

  <button disabled={hintsLeft <= 0 || isCorrect} on:click={giveHint}
    >Give a hint ({hintsLeft})
  </button>

  <button on:click={() => (displayBits = !displayBits)}>
    Display
    {displayBits ? "powers" : "bits"}
  </button>

  {#if isCorrect}
    <h1>🚀 You won! ✅</h1>
  {:else}
    <h1>Your goal is <b>{goal}</b>, but you got: {currentValue}</h1>
  {/if}

  <div class:won={isCorrect} class="list">
    {#each powers as power, i}
      <ValueButton
        activeId={!hints[i] ? active[i] : binarySolution[i]}
        toggle={tryToggle}
        {power}
        {displayBits}
        isHintGiven={!!hints[i]}
      />
    {/each}
  </div>

  <h1>You made {moves} move/s</h1>
</main>
