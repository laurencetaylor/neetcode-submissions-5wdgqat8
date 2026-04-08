class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      // have an obj with key of value and value of index
      // start at first num, check each next num for hitting target, adding to hash as we go
      // if no match, move the second num, use obj to immediately check for value which matches
      // if no match, continue

      const map = {};
      for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        const desired = target - num;
        if (map[desired] && map[desired] !== i) {
            return [i, map[desired]];
        } 

        for (let j = i + 1; j <= nums.length; j++) {
            const jNum = nums[j];
            if ((num + jNum) === target) {
                return [i, j];
            } else {
                map[jNum] = j;
            }
        } 
      }
    }
}
