class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        frequency = {}

        for n in nums:
            if n in frequency:
                return True
            else:
                frequency[n] = True
            
        return False