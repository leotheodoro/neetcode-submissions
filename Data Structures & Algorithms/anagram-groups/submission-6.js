class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function frequencyMap(value) {
            const count = new Array(26).fill(0)

            for(const char of value) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            return count.join('#')
        }

        const anagrams = {}

        for(const value of strs) {
            const freq = frequencyMap(value)

            if(anagrams[freq]) {
                anagrams[freq].push(value)
            } else {
                anagrams[freq] = [value]
            }
        }

        return [...Object.values(anagrams)]
    }
}
