class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        freq = {}

        for i in range(len(numbers)):
            if numbers[i] in freq:
                return [freq[numbers[i]] + 1, i + 1]

            freq[target - numbers[i]] = i

        
        
        