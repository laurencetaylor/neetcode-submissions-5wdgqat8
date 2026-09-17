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
        for (const sChar of s) {
            sCharCounts[sChar] ??= 0;
            sCharCounts[sChar]++;
        }

        for (const tChar of t) {
            if (!sCharCounts[tChar]) {
                return false;
            }

            sCharCounts[tChar]--;
        }

        return true;
    }
}
