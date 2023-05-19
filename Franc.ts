import { Money } from './Money';

export class Franc extends Money {
  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
