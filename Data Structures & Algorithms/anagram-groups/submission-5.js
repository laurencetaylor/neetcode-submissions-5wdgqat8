class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = {};
        for (const str of strs) {
            const key = new Array(26).fill(0);
            for (const letter of str) {
                const index = letter.charCodeAt(0) - "a".charCodeAt(0);
                key[index]++;
            }

            (grouped[key.join(",")] ??= []).push(str);
        }

        return Object.values(grouped);
    }
}
