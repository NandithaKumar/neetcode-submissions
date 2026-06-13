class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        /*let p1 = 0;
        let k = 0;
        for(let p2 = 1; p2 < nums.lemgth; p2++) {
            if(nums[p1] === val) {
                nums[p1] = nums[p2];
            } while(nums[p1] !== val){
                p1++;
                k++;
            }
        }
        return k;*/

        let k = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}
