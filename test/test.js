'use strict';
const dc = require('../');

describe('#effectiveDamage()', () => {

  test('正常なダメージ計算ができる', () => {
    expect(dc.effectiveDamage(100, 50, 30)).toBe(83);
  });

  test('負の異常値におけるダメージ計算ができる', () => {
    expect(dc.effectiveDamage(-1, 0, 0)).toBe(0);
    expect(dc.effectiveDamage(0, -1, 0)).toBe(0);
    expect(dc.effectiveDamage(0, 0, -1)).toBe(0);
  });

  test('2000より大きい異常値におけるダメージ計算ができる', () => {
    expect(dc.effectiveDamage(2001, 0, 0)).toBe(2000);
    expect(dc.effectiveDamage(300, 2150, 0)).toBe(14);
    expect(dc.effectiveDamage(300, 2000, 2001)).toBe(300);
  });

  test('実効防御力は0未満にならない', () => {
    expect(dc.effectiveDamage(500, 100, 800)).toBe(500);
  });

  test('ダメージは小数点以下を四捨五入して整数にする', () => {
    expect(dc.effectiveDamage(620, 100, 30)).toBe(365);
  });

});