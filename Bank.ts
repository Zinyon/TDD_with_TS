import { Expression, Money } from '.';

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
