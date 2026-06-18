class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const store = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(store.has(nums[i])) {
                return true
            }

            store.set(nums[i], true)
        }

        return false
    }
}
