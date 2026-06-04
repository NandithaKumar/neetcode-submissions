class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { //[1,2,4,6]
        let n = nums.length;
        let preP = Array(n).fill(1);
        let sufP = Array(n).fill(1);
        let result = Array(n).fill(1);

        let prefix = 1;
        for(let i = 0; i < n; i++) {
            preP[i] = prefix;
            prefix *= nums[i];
        }
        let suffix = 1;
        for(let j = n-1; j >= 0; j--) {
            sufP[j] = suffix;
            suffix *= nums[j];
        }

        for(let k = 0; k < n; k++){
            result[k] = preP[k] * sufP[k];
        }
        return result;
    }
}
