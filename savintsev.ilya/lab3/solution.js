export function findEquilibriumIndex(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('findEquilibriumIndex works only with arrays');
  }
  if (arr.length < 3) {
    return -1;
  }
  let left = 0;
  let right = 0;
  for (let el of arr) {
    right += el;
  }
  right -= arr[0];
  for (let i = 1; i < arr.length - 1; ++i) {
    left += arr[i - 1];
    right -= arr[i];
    if (left === right) {
      return i;
    }
  }
  return -1;
}
