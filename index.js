const gameBoard = (() => {
    const board = [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                  ];
    const renderContent = () => {
        const squares = document.querySelectorAll(".box > div");
        let counter = 0;
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                if (board[i][j] == ""){
                    board[i][j] = squares[counter].innerHTML;
                }
                counter += 1;
            }
        }
        return board;
    };
    
    return {
        board,
        renderContent,
    };
})();
gameBoard.renderContent();




const Player = (sign) => {
    squareTracker = () => {
        const squares = document.querySelectorAll(".box > div");
        let tracker = "";
        for (let square of squares){
            tracker += square.innerHTML;
        }
        return tracker;
    }

    xTracker = () => {
        const squares = document.querySelectorAll(".box > div");
        let xTracker =  0;
        for (let square of squares){
            if (square.innerHTML == "X"){
                xTracker += 1;
            } else {
                xTracker += 0;
            }
        }
        return xTracker;
    }
    oTracker = () => {
        const squares = document.querySelectorAll(".box > div");
        let oTracker =  0;
        for (let square of squares){
            if (square.innerHTML == "O"){
                oTracker += 1;
            } else {
                oTracker += 0;
            }
        }
        return oTracker;
    }
    playerPlay = () => {
        const squares = document.querySelectorAll(".box > div");
        for (let square of squares){
            square.addEventListener("click", () => { 
            if (squareTracker() == ""){
                square.append(test1.sign);
            } else if (square.innerHTML !== ""){
                square.append("");
            } else if (xTracker() < oTracker()){
                square.append(test1.sign);
            } else if (xTracker() > oTracker()){
                square.append(test2.sign);
            } else if ( xTracker() == oTracker()){
                square.append(test1.sign);
            } else {
                return ""
            }
            gameBoard.renderContent();
            playerWin();
        })
        }
    }
    playerWin = () => {
        
        if (gameBoard.board[0][0] == "X" && gameBoard.board[0][1] == "X" && gameBoard.board[0][2] == "X"){
            console.log("X win")
        } else if (gameBoard.board[1][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[1][2] == "X"){
            console.log("X win")
        } else if (gameBoard.board[2][0] == "X" && gameBoard.board[2][1] == "X" && gameBoard.board[2][2] == "X"){
            console.log("X win")
        } else if (gameBoard.board[0][0] == "X" && gameBoard.board[1][0] == "X" && gameBoard.board[2][0] == "X"){
            console.log("X win")
        } else if (gameBoard.board[0][1] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][1] == "X"){
            console.log("X win")
        } else if (gameBoard.board[0][2] == "X" && gameBoard.board[1][2] == "X" && gameBoard.board[2][2] == "X"){
            console.log("X win")
        } else if (gameBoard.board[0][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][2] == "X"){
            console.log("X win")
        } else if (gameBoard.board[0][2] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][0] == "X"){
            console.log("X win")
        } 
        if (gameBoard.board[0][0] == "O" && gameBoard.board[0][1] == "O" && gameBoard.board[0][2] == "O"){
            console.log("O win")
        } else if (gameBoard.board[1][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[1][2] == "O"){
            console.log("O win")
        } else if (gameBoard.board[2][0] == "O" && gameBoard.board[2][1] == "O" && gameBoard.board[2][2] == "O"){
            console.log("O win")
        } else if (gameBoard.board[0][0] == "O" && gameBoard.board[1][0] == "O" && gameBoard.board[2][0] == "O"){
            console.log("O win")
        } else if (gameBoard.board[0][1] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][1] == "O"){
            console.log("O win")
        } else if (gameBoard.board[0][2] == "O" && gameBoard.board[1][2] == "O" && gameBoard.board[2][2] == "O"){
            console.log("O win")
        } else if (gameBoard.board[0][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][2] == "O"){
            console.log("O win")
        } else if (gameBoard.board[0][2] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][0] == "O"){
            cnsole.log("O win")
        } 
    }

    

    return {sign, playerPlay, }
}

const test1 = Player("X");
const test2 = Player("O");
test1.playerPlay()
console.log(test1.sign, test2.sign);




const gameFlow = (() => {



})();

