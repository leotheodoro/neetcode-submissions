class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        def frequency_map(value):
            count = [0] * 26
            for char in value:
                index = ord(char) - ord('a')
                count[index] += 1
            return '#'.join(map(str, count))

        anagrams = defaultdict(list)

        for s in strs:
            key = frequency_map(s)
            anagrams[key].append(s)

        return list(anagrams.values())