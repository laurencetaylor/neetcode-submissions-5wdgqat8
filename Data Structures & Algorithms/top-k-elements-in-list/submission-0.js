class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequenciesByNum = {};
        for (const num of nums) {
            frequenciesByNum[num] ??= 0;
            frequenciesByNum[num]++;
        }

        const sorted = Object.entries(frequenciesByNum).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

        return sorted.slice(0, k).map(([key]) => key);
    }
}
