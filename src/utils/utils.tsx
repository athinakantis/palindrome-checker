export const isPalindrome = (phrase : string): boolean => {
    return phrase.split('').reverse().join('') === phrase;
}