import {describe, it, expect} from 'vitest';
import {proximo} from './proximo.js';

describe('proximo()', async () =>  {

it('deve retornar 1 ao receber 0', () => {
    expect(proximo(0)).toBe(1);
});

it('deve retornar 3 ao receber 1', () => {
    expect(proximo(1)).toBe(3);
});

it('deve retornar 1 ao receber 0', () => {
    expect(proximo(2)).toBe(5);
});

it('deve retornar 1 ao receber 0', () => {
    expect(proximo(3)).toBe(4);
});

it('deve retornar 1 ao receber 0', () => {
    expect(proximo(4)).toBe(6);
});

}
