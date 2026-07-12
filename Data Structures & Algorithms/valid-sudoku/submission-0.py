class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        columns = defaultdict(set)
        boxes = defaultdict(set)

        for row in range(9):
            for col in range(9):
                current = board[row][col]
                if current == '.':
                    continue

                if current in rows[row] or current in columns[col] or current in boxes[(row//3, col//3)]:
                    return False

                rows[row].add(current)
                columns[col].add(current)
                boxes[(row//3, col//3)].add(current)
                
        return True
        