export class Pair {
  private __from: string;
  private __to: string;

  constructor(from: string, to: string) {
    this.__from = from;
    this.__to = to;
  }

  public equals(object: Object) {
    const pair = object as Pair;
    return this.__from === pair.__from && this.__to === pair.__to;
  }

  public hashCode() {
    return 0;
  }
}
