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

        const sChars = {};
        for (let i = 0; i <= s.length; i++) {
            const letter = s[i];
            sChars[letter] ??= 0;
            sChars[letter] += 1;
        }

        const tChars = {};
        for (let i = 0; i <= t.length; i++) {
            const letter = t[i];
            if (!sChars[letter]) {
                return false
            }

            tChars[letter] ??= 0;
            tChars[letter] += 1;

            if (tChars[letter] > sChars[letter]) {
                return false;
            }
        }

        return true;
    }
}
