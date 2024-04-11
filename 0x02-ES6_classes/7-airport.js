class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {String} code
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string.');
    }
    this._code = code;
  }

  get codes() {
    return this._code;
  }

  /**
   * @description
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
