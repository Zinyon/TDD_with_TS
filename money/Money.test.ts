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
    expect(five).toBe(sum['__augend']);
    expect(five).toBe(sum['__addend']);
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

  it('test reduce money different currency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1)).toStrictEqual(result);
  });

  it('test identity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toBe(1);
  });

  it('test different currency rate', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const rate = bank.rate('CHF', 'USD');

    expect(rate).toBe(2);
  });

  it('test mixed addition', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(Money.dollar(10)).toStrictEqual(result);
  });

  it('test sum plus money', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(15)).toStrictEqual(result);
  });

  it('test sum times', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).times(2);
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(20)).toStrictEqual(result);
  });
});
