import { Money } from '.';

export class Franc extends Money {
  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
