export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(dollar: Object): boolean {
    return this.amount === (dollar as Franc).amount;
  }
}
