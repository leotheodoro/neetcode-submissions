class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const store = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(store.has(nums[i])) {
                return [store.get(nums[i]), i]
            }

            store.set(target - nums[i], i)
        }

        return []
    }
}
