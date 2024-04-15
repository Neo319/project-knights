// 1. create a chessboard represented as a graph (array)
// (2d coordinates: spaces are represented as [x, y])

class ChessBoard {
    constructor () {
        this.board = this.generateBoard();
        this.adjacency = this.generateAdjacencyList();
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
                if (this.knightLogic(square, comparison)) {
                    current.push(comparison);
                }
            })
            output.push(current); 
        })
        return output;
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

    //helper function: returns index of an array on the chessboard
    findIndex (arr) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.arraysAreEqual(this.board[i], arr)) { //comparing the arrays
                return i; //returns index of square
            }
        }
        throw new Error ("looking for a space that does not exist");
    }

    // helper function: how the index of a space is found
    arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    //helper function: checks that array contain only values from 0-7
    isValidSpace (arr) {
        if (
            !(Array.isArray(arr)) || // must be array
            arr.length !== 2// of length 2
        ) return false
        else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 0 || arr[i] > 7) {
                    return false;
                }
            }
            return true;
        }
    }

    //helper function: printing the path that is found
    printPath(path) {
        console.log("You made it in " + path.length + " moves! Here's your path:");
        path.forEach((step) => {
            console.log(step);
        })
    }

    // 3. employ a search algorithm to output the fewest moves to a given space.
    knightMoves (start, end) {
        
        //first: check 
        if (
            !this.isValidSpace(start) || 
            !this.isValidSpace(end)
        ) throw new Error ("invalid space");
        
        //initialize queue with path containing only the starting node
        let queue = [[start, start]]; 


        //breadth-first search
        for (let i = 0; i < 10000; i++) { //loops limited to 10,000 to avoid crash
            let current;
            let path;
            [current, path] = queue.shift(); //dequeue current

            
            //if current node is the end, return the path
            if (this.arraysAreEqual(current, end)) {
                console.log("-------------------FOUND--------------------");
                console.log(i + " loops completed")
                this.printPath(path);
                return path;
            }

            // index of the array representing the current space
            let squareIndex = this.findIndex(current); 
            
            //enqueue all child nodes
            let childNodes = this.adjacency[squareIndex];

            if (childNodes) {
                childNodes.forEach((square) => {
                    let newPath; 
                    
                    if (queue.length > 0) {
                        newPath = path.concat([square]) //append the child node to the current path
                    } else {
                        newPath = [path, square]
                    }
                    queue.push([square, newPath]); //enqueue new node alond with its path
                })
            }
        }
        console.log("-------------------NOT FOUND------------------");
        return null;
    }
    
    
}







// driver code

const myBoard = new ChessBoard();

// console.log(myBoard.board);
// console.log(myBoard.adjacency);

// console.log(myBoard.findIndex([6, 5]))

myBoard.knightMoves([0, 0], [7, 7]);
