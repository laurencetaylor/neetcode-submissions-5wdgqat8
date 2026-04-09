class Solution {
    isAnagram(a, b) {
        return a.split("").sort().join("") === b.split("").sort().join("");
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = {};
        for (const str of strs) {
            // iterate through seen keys
            // if one of the existing keys is an anagram, push to its value and break inner loop
            // if none found, add new key with str in value array
            let added = false;
            for (const key of Object.keys(seen)) {
                if (this.isAnagram(str, key)) {
                    seen[key].push(str);
                    added = true;
                    break;
                }
            }

            if (!added) {
                seen[str] = [str];
            }
        }

        return Object.values(seen);
    }
}
