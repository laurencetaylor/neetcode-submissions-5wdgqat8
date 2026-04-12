class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequenciesByNumber = {};
        const results = Array.from({length: nums.length + 1}, () => []);
        for (const num of nums) {
            frequenciesByNumber[num] ??= 0;
            frequenciesByNumber[num]++
        }

        for (const [num, frequency] of Object.entries(frequenciesByNumber)) {
            results[frequency].push(num);
        }

        const result = [];
        for (let i = results.length - 1; i >= 0; i--) {
            if (result.length >= k) {
                return result;
            }

            result.push(...results[i]);
        }
    }
}
