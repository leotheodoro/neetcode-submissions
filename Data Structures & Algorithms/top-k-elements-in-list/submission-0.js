class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()

        for(let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1)
        }

        const result = []
        const entries = [...freq.entries()]
        
        entries.sort((a,b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0])
        }

        return result
    }
}
