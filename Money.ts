import { Expression } from '.';

export class Money implements Expression {
  protected amount: number;
  protected _currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public equals(object: Object): boolean {
    const money = object as Money;
    return this.amount === money.amount && this.currency() === money.currency();
  }

  public times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }

  public toString() {
    return this.amount + ' ' + this._currency;
  }

  currency() {
    return this._currency;
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this._currency);
  }
}
