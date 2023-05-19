import { Money } from '.';

export class Dollar extends Money {
  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
