class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        mapper = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        for char in s:
            if(char == '[' or char == '{' or char == '('):
                stack.append(char)

            if(char == ']' or char == '}' or char == ')'):
                if(not stack or stack[-1] != mapper[char]):
                    return False
                
                stack.pop()

        return len(stack) == 0