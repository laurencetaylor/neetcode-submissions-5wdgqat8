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

        const sCharCounts = {};
        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            sCharCounts[sChar] ??= 0;
            sCharCounts[sChar]++;
        }

        const tCharCounts = {};
        for (let i = 0; i < t.length; i++) {
            const tChar = t[i];
            if (!sCharCounts[tChar]) {
                return false;
            }

            tCharCounts[tChar] ??= 0;
            tCharCounts[tChar]++;

            if (tCharCounts[tChar] > sCharCounts[tChar]) {
                return false;
            }
        }

        return true;
    }
}
