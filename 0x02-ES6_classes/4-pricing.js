import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /*
   * @param {int} amount
  */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /*
   * @param {Currency} currency
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a class');
    }
  }

  get currency() {
    return this._currency;
  }

  /*
   * @method - returns the attributes in the following format amount currency_name (currency_code).
  */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /*
   * @method - return the amount multiplied by the conversion rate.
  */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
