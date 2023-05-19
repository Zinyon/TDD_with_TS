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
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(new Franc(5).equals(new Dollar(5))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five = new Franc(5);
    expect(new Franc(10)).toBe(five.times(2));
    expect(new Franc(15)).toBe(five.times(3));
  });
});
