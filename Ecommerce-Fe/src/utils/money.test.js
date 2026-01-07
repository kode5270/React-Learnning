import { it, expect, describe } from 'vitest'
import { formatMoney } from './money'

describe(' formatMoney', () => {
it('formats 1999 cents as $19.99', () => {
    expect(formatMoney(1999)).toBe('$19.99')
});

it('display 2 decimals', () => {
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');
})
})

//it is create the test,
//it ('') in the string is the name of the test
//expect is check if the result is correct
//toBe method is the result that we expected
//describe is group the test...,  i can say this same function like folder..
