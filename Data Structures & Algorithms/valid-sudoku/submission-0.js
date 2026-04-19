class Solution {
    getBoxNum(colIndex, rowIndex) {
        if (colIndex < 3) {
            if (rowIndex < 3) {
                return 0;
            }

            if (rowIndex < 6) {
                return 1;
            }

            if (rowIndex < 9) {
                return 2;
            }
        }

        if (colIndex < 6) {
            if (rowIndex < 3) {
                return 3;
            }

            if (rowIndex < 6) {
                return 4;
            }

            if (rowIndex < 9) {
                return 5;
            }
        }
        
        if (colIndex < 9) {
            if (rowIndex < 3) {
                return 6;
            }

            if (rowIndex < 6) {
                return 7;
            }

            if (rowIndex < 9) {
                return 8;
            }
        }
    }

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let colNum = 0;
        const columns = Array.from({ length: 9 }).reduce((acc) => {
            acc[colNum] = new Set();
            colNum++;

            return acc;
        } , {});

        let rowNum = 0;
        const rows = Array.from({ length: 9 }).reduce((acc) => {
            acc[rowNum] = new Set();
            rowNum++;

            return acc;
        } , {});

        let boxNum = 0;
        const boxes = Array.from({ length: 9 }).reduce((acc) => {
            acc[boxNum] = new Set();
            boxNum++;

            return acc;
        }, {});

        
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const row = board[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const current = row[colIndex];
                if (current === ".") {
                    continue;
                }

                const boxNum = this.getBoxNum(parseInt(colIndex), parseInt(rowIndex));
                if (columns[colIndex].has(current) || rows[rowIndex].has(current) || boxes[boxNum].has(current)) {
                    return false;
                }

                columns[colIndex].add(current);
                rows[rowIndex].add(current);
                boxes[boxNum].add(current);
            }
        }

        return true;
    }
}
