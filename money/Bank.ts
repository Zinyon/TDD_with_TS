import { Expression, Money } from '.';

export class Bank {
  private __rates = new Map<string, Map<string, number>>();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    const ratesOfFrom = this.__rates.get(from);
    if (!ratesOfFrom) return 1;
    const rate = ratesOfFrom.get(to);
    return rate || 1;
  }

  addRate(from: string, to: string, rate: number) {
    const ratesOfFrom = this.__rates.get(from);

    if (ratesOfFrom) {
      ratesOfFrom.set(to, rate);
    } else {
      const map = new Map<string, number>();
      map.set(to, rate);
      this.__rates.set(from, map);
    }
  }
}
