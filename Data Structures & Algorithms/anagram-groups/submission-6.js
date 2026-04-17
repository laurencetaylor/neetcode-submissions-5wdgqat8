class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = {};
        for (const str of strs) {
            const keyArray = new Array(26).fill(0);
            for (const letter of str) {
                const index = letter.charCodeAt(0) - "a".charCodeAt(0);
                keyArray[index]++;
            }
            const key = keyArray.join(",");
            grouped[key] ??= [];
            grouped[key].push(str);
        }

        return Object.values(grouped);
    }
}
