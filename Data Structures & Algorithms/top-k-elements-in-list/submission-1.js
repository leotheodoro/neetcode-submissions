class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        const bucket = Array.from({length: nums.length + 1}, () => [])

        for(const i of nums) {
            if(freq[i]) {
                freq[i]++
            } else {
                freq[i] = 1
            }
        }

        for(const [key, value] of Object.entries(freq)) {
            bucket[value].push(Number(key))
        }

        const result = []
        for(let i = bucket.length - 1; i > 0; i--) {
            for(const num of bucket[i]) {
                if(result.length === k) {
                    return result
                }

                result.push(num)
            }
        }

        return result
    }
}
