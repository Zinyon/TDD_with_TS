import { describe, expect, it } from '@jest/globals';
import { Dollar } from './Dollar';
import { Franc } from './Franc';
describe('Money Test', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toStrictEqual(five.times(2));
    expect(new Dollar(15)).toStrictEqual(five.times(3));
  });

  it('test equality', () => {
    const dollar1 = new Dollar(5);
    const dollar2 = new Dollar(5);
    const equal = dollar1.equals(dollar2);

    expect(equal).toBe(true);
    // expect(dollar.equals(new Dollar(6))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five = new Franc(5);
    expect(new Franc(10)).toBe(five.times(2));
    expect(new Franc(15)).toBe(five.times(3));
  });
});
