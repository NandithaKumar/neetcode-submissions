class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i = 0; i < nums.length; i++) {
            let elem = target - nums[i];
            if(map[elem] != undefined) {
                return [map[elem], i];
            }
            map[nums[i]] = i;
        }
    }
}
