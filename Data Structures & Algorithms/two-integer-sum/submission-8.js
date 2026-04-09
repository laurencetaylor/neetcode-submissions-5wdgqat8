class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;
            if (seen[diff] !== undefined) {
                return [seen[diff], i];
            } else {
                seen[num] = i;
            }
        }
    }
}
