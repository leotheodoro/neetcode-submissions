class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = []
        for(let i = 0; i < nums.length; i++) {
            let product = 1
            for(let j = 0; j < nums.length; j++) {
                if (j !== i) {
                    product *= nums[j]
                }
            }
            products.push(product)
        }

        return products
    }

    // Simplest solution, in O(nˆ2)
}
