<script lang="ts">
  import ResetButton from "./ResetButton.svelte";
  import ValueButton from "./ValueButton.svelte";

  let powersCount = 4;
  let displayBits = false;
  let moves = 0;
  let base = 2;

  $: active = emptyArray();
  $: powers = emptyArray().map((_, index) => powersCount - index - 1);
  $: goal = generateRandom(Math.pow(base, powersCount));
  $: isCorrect = currentValue === goal;
  $: currentValue = active.reduce((prev, curr, index) => {
    const val = curr === 1 ? Math.pow(base, active.length - 1 - index) : 0;
    return prev + val;
  }, 0);

  let emptyArray = () => new Array<number>(powersCount).fill(0);

  function toggle(
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
    active = emptyArray();
    goal = generateRandom(Math.pow(base, powersCount));
  }

  function generateRandom(maxLimit: number): number {
    const rand = Math.random() * maxLimit;
    const generatedValue = Math.floor(rand);
    return generatedValue === 0 ? generateRandom(maxLimit) : generatedValue;
  }
</script>

<main>
  <label for="powers-count"> Powers count </label>
  <input
    id="powers-count"
    type="number"
    class="powers-count"
    value={powersCount}
    on:input={(e) => {
      const value = Number(e.data);
      if (value < 1) return;
      powersCount = value;
      reset();
    }}
  />
  <br />

  <ResetButton {reset} {isCorrect} />

  <button on:click={() => (displayBits = !displayBits)}>
    display
    {#if displayBits}
      powers
    {:else}
      bits
    {/if}
  </button>

  {#if isCorrect}
    <h1>🚀 You won! ✅</h1>
  {:else}
    <h1>Your goal is <b>{goal}</b>, but you got: {currentValue}</h1>
  {/if}

  <div class:won={isCorrect} class="list">
    {#each powers as power, i}
      <ValueButton activeId={active[i]} {base} {toggle} {power} {displayBits} />
    {/each}
  </div>

  <h1>You made {moves} move/s</h1>
</main>
