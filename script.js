// 1. create a chessboard represented as a graph (2D array)
// (2d coordinates: spaces are represented as [x, y])

class ChessBoard {
    constructor () {
        this.board = this.generateBoard();
    }

    generateBoard () {
        let output = [];

        for (let i = 0; i<=7; i++) {
            let currentRow = [];
            for (let j = 0; j <= 7; j++) {
                currentRow.push([j, i]);
            }
            output.push(currentRow);
        }
        return output;
    }


    

    // 2. create a adjacency matrix representing the possible moves of a knight on any space




}






// 3. employ a search algorithm to output the fewest moves to a given space.
const knightMoves = function (start, end) {
    // ? 
}








// driver code

const myBoard = new ChessBoard();
console.log(myBoard.board);