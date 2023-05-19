import { Bank, Money } from '.';

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
