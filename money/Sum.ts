import { Bank, Expression, Money } from '.';

export class Sum implements Expression {
  private __augend: Expression;
  private __addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.__augend = augend;
    this.__addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this.__augend.reduce(bank, to).amount + this.__addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public plus(addend: Expression) {
    return null;
  }
}
