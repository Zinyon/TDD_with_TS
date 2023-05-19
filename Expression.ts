import { Money } from '.';

export interface Expression {
  reduce(to: string): Money;
}
