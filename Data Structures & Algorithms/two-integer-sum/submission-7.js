class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const diff = target - a;
            if (seen[diff] !== undefined) {
                return [seen[diff], i];
            }

            seen[a] = i;
        }
    }
}
