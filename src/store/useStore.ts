import { derived, get, writable } from "svelte/store";
import {
  emptyArray,
  generateRandomNonZero,
  binaryToDecimal,
  decimalToBinary,
  generateRandom,
} from "@/utils/utils";

const storeCreator = (power: number) => {
  const powersCount = writable(power);
  const displayBits = writable(true);

  const baseStore = writable({
    moves: 0,
    hintsLeft: power,
    hints: emptyArray(power),
    active: emptyArray(power),
  });

  const goal = derived([powersCount], ([$powersCount]) =>
    generateRandomNonZero(Math.pow(2, $powersCount)),
  );
  const powers = derived(baseStore, ({ active }) =>
    active.map((_, index, a) => a.length - 1 - index),
  );
  const currentValue = derived(baseStore, ($store) =>
    binaryToDecimal($store.active),
  );
  const isCorrect = derived(
    [goal, currentValue],
    ([$goal, $currentValue]) => $goal === $currentValue,
  );
  const binarySolution = derived([baseStore, goal], ([$store, $goal]) =>
    decimalToBinary($goal, $store.active.length),
  );
  const noHintsLeft = derived(baseStore, ($store) => $store.hintsLeft === 0);

  const giveHint = () => {
    const { active, hints } = get(baseStore);
    const index = generateRandom(active.length);
    if (hints[index]) {
      giveHint();
      return;
    }
    baseStore.update((store) => {
      store.moves += 1;
      store.hintsLeft -= 1;
      store.hints[index] = 1;
      store.active[index] = get(binarySolution)[index];
      return store;
    });
  };

  const reset = () => {
    const powersCountValue = get(powersCount);
    baseStore.update((state) => {
      state.moves = 0;
      state.hintsLeft = powersCountValue;
      state.hints = emptyArray(powersCountValue);
      state.active = emptyArray(powersCountValue);
      return state;
    });
  };

  return {
    subscribe: baseStore.subscribe,
    set: baseStore.set,
    // ? writable
    displayBits,
    powersCount,
    // ? derived - reactive
    isCorrect,
    currentValue,
    powers,
    binarySolution,
    goal,
    noHintsLeft,
    // ? Actions
    toggleDisplayBits: () => {
      displayBits.update((value) => !value);
    },
    reset,
    giveHint,
    tryToggle: (value: number) => {
      baseStore.update((state) => {
        const index = state.active.length - 1 - value;
        state.moves += 1;
        state.active[index] = state.active[index] === 0 ? 1 : 0;
        return state;
      });
    },
    setPowersCount: (value: number) => {
      powersCount.set(value);
      reset();
    },
  };
};

export const store = storeCreator(8);
