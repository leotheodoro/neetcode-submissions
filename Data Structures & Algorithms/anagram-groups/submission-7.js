class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function frequencyMap (str) {
            const count = new Array(26).fill(0)

            for(const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            return count.join('#')
        }

        const anagrams = {}

        for(const str of strs) {
            const freq = frequencyMap(str)

            if(anagrams[freq]) {
                anagrams[freq].push(str)
            } else {
                anagrams[freq] = [str]
            }
        }

        return Object.values(anagrams)
    }
}
