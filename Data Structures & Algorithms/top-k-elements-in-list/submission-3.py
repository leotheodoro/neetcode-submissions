class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)
        bucket = [[] for _ in range(len(nums) + 1)]

        for num in nums:
            freq[num] += 1

        for num, count in freq.items():
            bucket[count].append(num)

        result = []
        for i in range(len(bucket) - 1, 0, -1):
            for num in bucket[i]:
                if len(result) == k:
                    return result
                result.append(num)

        return result