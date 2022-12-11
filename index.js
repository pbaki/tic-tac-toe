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




const Player = (name, sign) => {
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
            let squares = document.querySelectorAll(".box > div"); 
        for (let square of squares){
            square.addEventListener("click", function handler(){ 
            if (squareTracker() == ""){
                square.append(Player1.sign);
            } else if (square.innerHTML !== ""){
                square.append("");
            } else if (xTracker() < oTracker()){
                square.append(Player1.sign);
            } else if (xTracker() > oTracker()){
                square.append(Player2.sign);
            } else if ( xTracker() == oTracker()){
                square.append(Player1.sign);
            } else {
                return ""
            }
            if (playerWin() !== ""){
                square.innerHTML = "";
            }
            gameBoard.renderContent();
            playerWin();
            let congratulations = document.getElementById("congratulations");
            if (playerWin() == "Draw") {
                congratulations.innerHTML = playerWin();
            } else if (playerWin() !== ""){
                congratulations.innerHTML = playerWin() + " congratulations!";
            }
        })
        }
    }

    
    playerWin = () => {
        
        if (gameBoard.board[0][0] == "X" && gameBoard.board[0][1] == "X" && gameBoard.board[0][2] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[1][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[1][2] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[2][0] == "X" && gameBoard.board[2][1] == "X" && gameBoard.board[2][2] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][0] == "X" && gameBoard.board[1][0] == "X" && gameBoard.board[2][0] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][1] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][1] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][2] == "X" && gameBoard.board[1][2] == "X" && gameBoard.board[2][2] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][0] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][2] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][2] == "X" && gameBoard.board[1][1] == "X" && gameBoard.board[2][0] == "X"){
            return Player1.name + " win";
        } else if (gameBoard.board[0][0] == "O" && gameBoard.board[0][1] == "O" && gameBoard.board[0][2] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[1][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[1][2] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[2][0] == "O" && gameBoard.board[2][1] == "O" && gameBoard.board[2][2] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[0][0] == "O" && gameBoard.board[1][0] == "O" && gameBoard.board[2][0] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[0][1] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][1] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[0][2] == "O" && gameBoard.board[1][2] == "O" && gameBoard.board[2][2] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[0][0] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][2] == "O"){
            return Player2.name + " win";
        } else if (gameBoard.board[0][2] == "O" && gameBoard.board[1][1] == "O" && gameBoard.board[2][0] == "O"){
            return Player2.name + " win";
        } else {
            let checkall = "";
            for (let i = 0; i < gameBoard.board.length; i++){
                for (let j = 0; j < gameBoard.board[i].length; j++){
                    if (gameBoard.board[i][j] !== ""){
                        checkall += "a";
                    } 
                }
            }
            return checkall.length == 9 ? "Draw" : "";
        }

    }
    

    

    return {sign, playerPlay, name, playerWin}
}

let Player1 = Player("default1", "X");
let Player2 = Player("default2", "O");

const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const checkbox = document.querySelector("#formbutton");
checkbox.addEventListener("click", checkboxClick);

function checkboxClick(event) {
    Player1 = Player(name1.value, "X");
    Player2 = Player(name2.value, "O");
    console.log(Player1);
    event.preventDefault();
    return Player1, Player2;

}




const gameFlow = (() => {
    const start = () => {
        if (Player1.name !== "" && Player2.name !== ""){
            Player1.playerPlay()
        }

    }
    const restart = () => {
        let squares = document.querySelectorAll(".box > div");
        for (let square of squares){
            square.innerHTML = "";
            congratulations.innerHTML = "";
            for (let i = 0; i < gameBoard.board.length; i++){
                for (let j = 0; j < gameBoard.board[i].length; j++){
                    if (gameBoard.board[i][j] !== ""){
                        gameBoard.board[i][j] = "";
                    } 
                }
            }
        }
    }
    const restartbutton = document.getElementById("restartbutton");
    restartbutton.addEventListener("click", () => {
        restart()
    })
    const startbutton = document.getElementById("startbutton")
    startbutton.addEventListener("click", () => {
        start()
    })

    return {start, restart};
})();

