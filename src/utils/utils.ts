export function generateRandomNonZero(maxLimit: number): number {
  const rand = Math.random() * maxLimit;
  const generatedValue = Math.floor(rand);
  return generatedValue === 0
    ? generateRandomNonZero(maxLimit)
    : generatedValue;
}

export function emptyArray(length: number) {
  return new Array<number>(length).fill(0);
}

/** chat-gpt ♥️ */
export function decimalToBinary(number: number, length: number): Array<number> {
  if (number < 0 || length <= 0) {
    throw new Error(
      "Number must be non-negative and length must be greater than 0.",
    );
  }
  let binaryString = number.toString(2);
  while (binaryString.length < length) {
    binaryString = "0" + binaryString;
  }
  return binaryString.split("").map(Number);
}

export function binaryToDecimal(array: Array<number>): number {
  return array.reduce((prev, curr, index) => {
    const val = curr === 1 ? Math.pow(2, array.length - 1 - index) : 0;
    return prev + val;
  }, 0);
}

export function generateRandom(maxLimit: number): number {
  const rand = Math.random() * maxLimit;
  return Math.floor(rand);
}
