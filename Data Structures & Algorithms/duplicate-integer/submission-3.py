class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        frequency = {}

        for value in nums:
            if value in frequency:
                return True

            frequency[value] = True

        return False