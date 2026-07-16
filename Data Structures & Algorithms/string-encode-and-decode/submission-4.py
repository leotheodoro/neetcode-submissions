class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded = ''
        for val in strs:
            encoded += f"{len(val)}#{val}"

        return encoded

    def decode(self, s: str) -> List[str]:
        i = 0
        decoded = []

        while i < len(s):
            j = i

            while s[j] != '#':
                j += 1

            length = int(s[i:j])
            end_word = j + 1 + length
            value = s[j + 1:end_word]
            decoded.append(value)

            i = end_word

        return decoded
