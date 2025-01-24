//
// isPalindrome
// Reverses the input and returns true if it matched the phrase
// Otherwise, returns false
export const isPalindrome = (phrase: string): boolean => {
    return phrase.split('').reverse().join('') === phrase;
}


//
// validatePhrase
// Replaces any numeric, special characters or whitespace
// and returns the initial phrase to lowercase
export const validatePhrase = (phrase: string): string => {
    return phrase.replace(/[\d\s\W]+/g, '').trim().toLowerCase()
}  