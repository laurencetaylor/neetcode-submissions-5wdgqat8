class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (indexes[target - num] !== undefined) {
                return [indexes[target - num], i];
            } else {
                indexes[num] = i;
            }
        }
    }
}
