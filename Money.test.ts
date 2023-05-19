import { describe, expect, it } from '@jest/globals';
import { Money, Bank, Sum } from '.';

describe('Money Test', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(five.times(2));
    expect(Money.dollar(15)).toStrictEqual(five.times(3));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toStrictEqual(five.times(2));
    expect(Money.franc(15)).toStrictEqual(five.times(3));
  });

  it('test currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  it('test simple addition', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toStrictEqual(reduced);
  });

  it('test plus returns sum', () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;
    expect(five).toBe(sum.augend);
    expect(five).toBe(sum.addend);
  });

  it('test reduce sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(7)).toStrictEqual(result);
  });

  it('test reduce money', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1)).toStrictEqual(result);
  });
});
