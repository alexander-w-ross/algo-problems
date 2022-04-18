export function assert<T>(array1: T[], array2: T[], message = "") {
  console.assert(
    array1.length === array2.length &&
      array1.every((a1, i) => a1 === array2[i]),
    message
  );
}
