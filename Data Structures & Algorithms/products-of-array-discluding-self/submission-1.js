class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length);
        const prefix = new Array(nums.length);
        const postfix = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            const prev = prefix[i - 1];
            const current = nums[i];
            if (prev !== undefined) {
                prefix[i] = prev * current;
            } else {
                prefix[i] = current;
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            const prev = postfix[i + 1];
            const current = nums[i];
            if (prev !== undefined) {
                postfix[i] = prev * current;
            } else {
                postfix[i] = current;
            } 
        }

        for (let i = 0; i < nums.length; i++) {
            const prev = i > 0 ? prefix[i - 1] : 1;
            const post = i < nums.length - 1 ? postfix[i + 1] : 1;
            result[i] = prev * post;
        }

        return result;
    }
}
