'use strict';
import { expect, jest, test } from '@jest/globals';

const { isPalindrome, formatPhrase } = require('../src/utils/utils');

describe('isPalindrome correctly asseses if a phrase is a palindrome or not', () => {
  const testCases = [
    'racecar',
    'ma`am',
    'Ah, Satan sees Natasha',
    'A Toyota`s a Toyota',
    'Do geese see God?',
    'Egad, a base tone denotes a bad age',
    'Lisa Bonet ate no basil',
    'No X in Mr. R. M. Nixon',
    'Oh no! Don Ho!',
    'Sit on a potato pan, Otis!',
    'UFO tofu',
    'Was it a car or a cat I saw?',
    'pap',
    'aba'
  ];

  test.each(testCases)('%s returns true', (phrase) => {
    expect(isPalindrome(phrase)).toBe(true);
  });
});

describe('Format phrase successfully removes special characters and transforms to lowercase', () => {
  const testCases = [
    ['ma`am', 'maam'],
    ['Ah, Satan sees Natasha', 'ahsatanseesnatasha'],
    ['A Toyota`s a Toyota', 'atoyotasatoyota'],
    ['Do geese see God?', 'dogeeseseegod'],
    ['Egad, a base tone denotes a bad age', 'egadabasetonedenotesabadage'],
    ['Lisa Bonet ate no basil', 'lisabonetatenobasil'],
    ['No X in Mr. R. M. Nixon', 'noxinmrrmnixon'],
    ['Oh no! Don Ho!', 'ohnodonho'],
    ['Sit on a potato pan, Otis!', 'sitonapotatopanotis'],
    ['UFO tofu', 'ufotofu'],
    ['Was it a car or a cat I saw?', 'wasitacaroracatisaw']
];


    test.each(testCases)('%s formatted is %s', (a,b) => {
      expect(formatPhrase(a)).toBe(b)
    })
})