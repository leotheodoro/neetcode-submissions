class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_value = ""
        for value in strs:
            encoded_value += f"{len(value)}#{value}"

        return encoded_value


    def decode(self, s: str) -> List[str]:
        i = 0
        decoded = []
        while(i < len(s)):
            j = i
            while s[j] != '#':
                j += 1
            
            length = int(s[i:j])
            value = s[j + 1: j + 1 + length]
            decoded.append(value)

            i = j + length + 1

        return decoded
