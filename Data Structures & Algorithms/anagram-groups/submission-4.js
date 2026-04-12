class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        for (const str of strs) {
            const values = new Array(26).fill(0);
            for (const letter of str) {
                const index = letter.charCodeAt(0) - "a".charCodeAt(0);
                values[index]++;
            }

            const key = values.join(",");
            groups[key] ??= [];
            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
