class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        store = {}
        for index in range(len(nums)):
            if(nums[index] in store):
                return [store[nums[index]], index]
            
            store[target - nums[index]] = index

        return []