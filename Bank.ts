import { Expression, Money } from '.';
import { Pair } from './Pair';

export class Bank {
  private __rates = new Map<Pair, number>();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    const rate = this.__rates.get(new Pair(from, to));
    return rate as number;
  }

  addRate(from: string, to: string, rate: number) {
    this.__rates.set(new Pair(from, to), rate);
  }
}
