class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map()

        for(let i = 0; i < strs.length; i ++) {
            const sorted = strs[i].split("").sort().join("")

            if(anagrams.has(sorted)) {
                const arr = anagrams.get(sorted)
                anagrams.set(sorted, [...arr, strs[i]])
            } else {
                anagrams.set(sorted, [strs[i]])
            }
        }

        const result = []
        for(const value of anagrams.values()) {
            result.push(value)
        }

        return result
    }
}
