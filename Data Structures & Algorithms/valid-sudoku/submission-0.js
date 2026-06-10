class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //Iterate row
        for(let row = 0; row < 9; row++) {
            for(let i = 0; i < 9; i++) {
                if(board[row][i] === ".") continue;
                for(let j = i + 1; j < 9; j++) {
                    if(board[row][j] === ".") continue;
                    console.log("Comparing values: ",board[row][i],"===", board[row][j]);
                    if(board[row][i] === board[row][j]) {
                        return false;
                    }
                }
            }
        }
        //Iterate column
        for(let col = 0; col < 9; col++) {
            for(let i = 0; i < 9; i++) {
                if(board[i][col] === ".") continue
                for(let j = i + 1; j < 9; j++) {
                    if(board[j][col] === ".") continue
                    console.log("Comparing values: ",board[i][col],"===", board[j][col]);
                    if(board[i][col] === board[j][col]) {
                        return false;
                    }
                }
            }
        }
        //Iterate 3 * 3 Boxes
        for(let rs = 0; rs < 9; rs += 3) {
            for(let cs = 0; cs < 9; cs += 3) {
                let values = [];
                for(let r = rs; r < rs + 3; r++) {
                    for(let c = cs; c < cs + 3; c++) {
                        if(board[r][c] === ".") continue;
                        values.push(board[r][c]);
                    }
                    
                }    
                console.log("Values Array: ", values);
                    for(let i = 0; i < values.length; i++) {
                        for(let j = i + 1; j < values.length; j++) {
                            if(values[i] === values[j]) {
                                return false;
                            }
                        }
                    }       
            }
        }
        
        return true;

    }
}
