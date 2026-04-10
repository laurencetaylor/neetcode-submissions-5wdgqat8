class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};
        for (const str of strs) {
            const counts = new Array(26).fill(0);
            for (const char of str) {
                counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const key = counts.join(",");
            anagrams[key] ??= [];
            anagrams[key].push(str);
        }

        return Object.values(anagrams);
    }
}
