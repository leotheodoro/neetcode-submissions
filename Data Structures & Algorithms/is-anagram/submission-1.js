class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const freq = new Map

        if(s.length !== t.length) {
            return false
        }

        for(let i = 0; i < s.length; i++) {
            freq.set(s[i], (freq.get(s[i]) ?? 0) + 1)
            freq.set(t[i], (freq.get(t[i]) ?? 0) - 1)
        }

        for(const count of freq.values()) {
            if(count !== 0) {
                return false
            }
        }

         return true
    }
}
