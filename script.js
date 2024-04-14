// 1. create a chessboard represented as a graph (array)
// (2d coordinates: spaces are represented as [x, y])

class ChessBoard {
    constructor () {
        this.board = this.generateBoard();
    }

    generateBoard () {
        let output = [];

        for (let i = 0; i<=7; i++) {
            for (let j = 0; j <= 7; j++) {
                output.push([j, i]);
            }
        }
        return output;
    }

    // 2. create a adjacency matrix representing the possible moves of a knight on any space

    generateAdjacencyList () {
        let output = [];

        this.board.forEach((square) => {
            let current = [];
            this.board.forEach((comparison) => {
                
            })
                
        })



         

    }

    //helper function: returns boolean to check whether knight can move from origin to current
    knightLogic(origin, current) {

        if (
            this.plusMinus(origin[0], current[0], 1) &&
            this.plusMinus(origin[1], current[1], 2) || 
            this.plusMinus(origin[0], current[0], 2) &&
            this.plusMinus(origin[1], current[1], 1)
        ) return true;

        else return false;
    }

    //helper function : returns boolean to check whether y equals x, plus or minus 2
    plusMinus(x, y, n) {
        if (y === x + n || y === x - n) return true;
        else return false;
    }

   


}






// 3. employ a search algorithm to output the fewest moves to a given space.
const knightMoves = function (start, end) {
    // ? 
}








// driver code

const myBoard = new ChessBoard();
console.log(myBoard.knightLogic([3, 3], [4, 1]));