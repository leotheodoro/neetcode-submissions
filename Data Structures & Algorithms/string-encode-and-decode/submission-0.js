class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedValue = ''
        for(const str of strs) {
            encodedValue += `${str.length}#${str}`
        }

        return encodedValue
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;  
        let len = ''
        const decoded = []
        while (i < str.length) {
            if(str[i] !== '#') {                
                len += str[i]
            }

            if(str[i] == '#') {
                len = parseInt(len)
                let word = ''
                for(let x = 0; x < len; x++) {
                    word += str[i + 1]
                    i++
                }
                decoded.push(word)
                len = ''
            }

            i++
        }

        return decoded
    }
}
