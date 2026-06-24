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
        const decoded = []
        let i = 0
        while (i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++
            }

            const len = parseInt(str.slice(i, j))
            const word = str.slice(j + 1, j + 1 + len) // Aqui o 1 no caso seria pra pular o #
            decoded.push(word)

            i = j + 1 + len // Move o ponteiro direto pro início da próxima length
        }

        return decoded
    }
}
