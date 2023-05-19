import { describe, expect, it } from '@jest/globals';
import { Dollar } from './Dollar';
describe('Money Test', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toStrictEqual(five.times(2));
    expect(new Dollar(15)).toStrictEqual(five.times(3));
  });

  it('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
