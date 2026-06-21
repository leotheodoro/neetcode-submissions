class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map()

        for(let i = 0; i < strs.length; i ++) {
            const sorted = strs[i].split("").sort().join("")
            
            if(!anagrams.has(sorted)) {
                anagrams.set(sorted, [])
            } 

            anagrams.get(sorted).push(strs[i])
        }

        return [...anagrams.values()]
    }
}
