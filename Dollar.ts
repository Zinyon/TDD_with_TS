import { Money } from './Money';

export class Dollar extends Money {
  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
