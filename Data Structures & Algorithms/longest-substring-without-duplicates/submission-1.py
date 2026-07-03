class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if(not s):
            return 0

        left, right = 0, 0
        _max = 1
        counter = {}
        counter[s[0]] = 1
        

        while right < len(s) - 1:
            right += 1
            if(counter.get(s[right])):
                counter[s[right]] += 1
            else:
                counter[s[right]] = 1

            while counter[s[right]] == 2:
                counter[s[left]] -= 1
                left += 1

            _max = max(_max, right - left + 1) # Por causa do index 0

        return _max
        
        