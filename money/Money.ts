import { Bank, Expression, Sum } from '.';
export class Money implements Expression {
  private __amount: number;
  private __currency: string;
  constructor(amount: number, currency: string) {
    this.__amount = amount;
    this.__currency = currency;
  }

  get amount() {
    return this.__amount;
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

  public times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.__currency);
  }

  public toString() {
    return this.amount + ' ' + this.__currency;
  }

  public currency() {
    return this.__currency;
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string) {
    const rate = bank.rate(this.__currency, to);

    return new Money(this.__amount / (rate || 1), to);
  }
}
