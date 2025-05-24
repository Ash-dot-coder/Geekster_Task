class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  // To enable addition with +
  valueOf() {
    return this.arr.reduce((sum, num) => sum + num, 0);
  }

  // To enable string conversion
  toString() {
    return `[${this.arr.join(",")}]`;
  }
}
