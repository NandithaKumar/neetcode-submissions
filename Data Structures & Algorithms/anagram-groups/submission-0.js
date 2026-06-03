class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let word of strs) {
            let key = word.split('').sort().join('');
            if(!map[key]) {
                map[key] = [word];
            } else {
                map[key].push(word);
            }
        }

        return Object.values(map);
    }
}
