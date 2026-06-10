class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxLen = 0;
        for(let num of set) {
            let len = 1;
            if(!set.has(num-1)) {
                while(set.has(++num)) {
                    len++;
                }
                maxLen = Math.max(maxLen, len);
            }
        }
        return maxLen;
    }
}
