class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const zeroIndexes = new Set();

        // Product without multiplying zeroes
        const product = nums.reduce((acc, num, i) => {
            if (num === 0) {
                zeroIndexes.add(i);
                return acc;
            } else {
                return acc * num;
            }
        }, 1);

        return nums.map((num, i) => {
            if (zeroIndexes.size > 1) {
                return 0;
            }

            if (zeroIndexes.size === 1) {
                return zeroIndexes.has(i) ? product : 0;
            } else {
                return product / num;
            }
        });
    }
}
