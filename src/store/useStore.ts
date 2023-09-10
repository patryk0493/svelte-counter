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
  const answers = writable(emptyArray(power));
  const movesCount = writable(power);
  const hintsLeft = writable(power);
  const goal = writable(generateRandomNonZero(Math.pow(2, power)));
  const hints = writable(emptyArray(power));

  const powers = derived(powersCount, ($powersCount) =>
    emptyArray($powersCount).map((_, index) => $powersCount - 1 - index),
  );
  const currentValue = derived(answers, ($active) => binaryToDecimal($active));
  const isCorrect = derived(
    [goal, currentValue],
    ([$goal, $currentValue]) => $goal === $currentValue,
  );
  const binarySolution = derived([answers, goal], ([$active, $goal]) =>
    decimalToBinary($goal, $active.length),
  );
  const noHintsLeft = derived(hintsLeft, ($hintsLeft) => $hintsLeft === 0);

  const giveHint = () => {
    const hintsValue = get(hints);
    const activeValue = get(answers);
    const index = generateRandom(activeValue.length);
    if (hintsValue[index]) {
      giveHint();
      return;
    }
    hintsLeft.update(state => state - 1);
    hints.update((state) => {
      state[index] = 1;
      return state;
    });
    movesCount.update(state => state + 1);
    answers.update((state) => {
      state[index] = get(binarySolution)[index];
      return state;
    });
  };

  const reset = () => {
    const powersCountValue = get(powersCount);
    hintsLeft.set(powersCountValue);
    hints.set(emptyArray(powersCountValue));
    goal.set(generateRandomNonZero(Math.pow(2, powersCountValue)))
    movesCount.set(0);
    answers.set(emptyArray(powersCountValue));
  };

  return {
    // ? writable
    displayBits,
    powersCount,
    answers,
    movesCount,
    hintsLeft,
    hints,
    // ? derived - reactive
    isCorrect,
    currentValue,
    powers,
    binarySolution,
    goal,
    noHintsLeft,
    // ? Actions
    toggleDisplayBits: () => {
      displayBits.update((state) => !state);
    },
    reset,
    giveHint,
    tryToggle: (value: number) => {
      const index = get(answers).length - 1 - value;
      movesCount.update(state => state + 1);
      answers.update((state) => {
        state[index] = state[index] === 0 ? 1 : 0;
        return state;
      });
    },
    setPowersCount: (state: number) => {
      powersCount.set(state);
      reset();
    },
  };
};

export const store = storeCreator(8);
