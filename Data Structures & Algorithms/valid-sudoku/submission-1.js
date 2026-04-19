class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columns = {};
        const rows = {};
        const boxes = {};
        
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const row = board[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const current = row[colIndex];
                if (current === ".") {
                    continue;
                }

                const boxKey = `${Math.floor(rowIndex / 3)}, ${Math.floor(colIndex / 3)}`;

                if (columns[colIndex]?.has(current) || rows[rowIndex]?.has(current) || boxes[boxKey]?.has(current)) {
                    return false;
                }

                columns[colIndex] ??= new Set();
                rows[rowIndex] ??= new Set();
                boxes[boxKey] ??= new Set();

                columns[colIndex].add(current);
                rows[rowIndex].add(current);
                boxes[boxKey].add(current);
            }
        }

        return true;
    }
}
