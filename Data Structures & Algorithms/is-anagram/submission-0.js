class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const sSeen = {}
        for (let i = 0; i < s.length; i++) {
            const sLetter = s[i]
            sSeen[sLetter] ??= 0;
            sSeen[sLetter] += 1;
        }

        const tSeen = {}
        for (let i = 0; i < t.length; i++) {
            const tLetter = t[i];
            if (!sSeen[tLetter]) {
                return false;
            }

            tSeen[tLetter] ??= 0;
            tSeen[tLetter] += 1;

            if (tSeen[tLetter] > sSeen[tLetter]) {
                return false;
            }
        }

        return true;
    }
}
