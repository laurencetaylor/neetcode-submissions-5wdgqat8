class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sLetters = {};
        for (const letter of s) {
            sLetters[letter] ??= 0;
            sLetters[letter]++;
        }

        const tLetters = {};
        for (const letter of t) {
            if (sLetters[letter] === undefined) {
                return false;
            }

            tLetters[letter] ??= 0;
            tLetters[letter]++;

            if (tLetters[letter] > sLetters[letter]) {
                return false;
            }
        }

        return true;
    }
}
