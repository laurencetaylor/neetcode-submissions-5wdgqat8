class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;
            if (numToIndex[diff] !== undefined) {
                return [numToIndex[diff], i];
            } else {
                numToIndex[num] = i;
            }
        }
    }
}
