import { Expression } from '.';
import { Sum } from './Sum';

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

  public times(multiplier: number) {
    return new Money(this.amount * multiplier, this.__currency);
  }

  public toString() {
    return this.amount + ' ' + this.__currency;
  }

  public currency() {
    return this.__currency;
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public reduce(to: string) {
    return this;
  }
}
