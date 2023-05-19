import { Dollar, Franc } from '.';

export abstract class Money {
  abstract times(amount: number): Money;
  protected amount: number;
  protected _currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  public equals(object: Object): boolean {
    const money = object as Money;
    return this.amount === money.amount && (this as {}).constructor.name === (money as {}).constructor.name;
  }

  currency() {
    return this._currency;
  }
}
