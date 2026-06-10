class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let k = 0;
        let arr=[];
        while(k < 2) {
            for(let i=0; i < nums.length; i++){
                arr.push(nums[i]);
            }
            k++;
        }
        return arr;
    }
}
