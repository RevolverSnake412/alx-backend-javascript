class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * @param {number} size
   */
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  /**
   * @param {number} size
  */
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  /**
   *
   * @param {*} hint
   * @returns size if number, location if string.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}

export default HolbertonClass;
