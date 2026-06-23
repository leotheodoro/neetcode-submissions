class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function frequencyMap(value) {
            const count = new Array(26).fill(0)

            for (const char of value) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            return count.join('#')
        }

        const anagrams = {}

        for(let i = 0; i < strs.length; i++) {
            const freq = frequencyMap(strs[i])

            if(anagrams[freq]) {
                anagrams[freq].push(strs[i])
            } else {
                anagrams[freq] = [strs[i]]
            }
        }

        return [...Object.values(anagrams)]
    }
}
