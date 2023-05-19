export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(dollar: Object): boolean {
    return this.amount === (dollar as Dollar).amount;
  }
}
