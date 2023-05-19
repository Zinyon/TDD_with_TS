import { Dollar, Franc } from '.';

export abstract class Money {
  protected amount: number;
  abstract times(amount: number): Money;
  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }

  public equals(object: Object): boolean {
    const money = object as Money;
    return this.amount === money.amount && (this as {}).constructor.name === (money as {}).constructor.name;
  }
}
