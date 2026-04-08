class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const seen = {};
       for (const num of nums) {
            if (seen[num]) {
                return true;
            } else {
                seen[num] = true;
            }
       } 

       return false;
    }
}
