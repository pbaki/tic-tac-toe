const gameBoard = (() => {
    const board = [
                    ["1", "2", "3"],
                    ["4", "5", "6"],
                    ["7", "8", "9"],
                  ];
    const squares = document.querySelectorAll(".box > div");
    let counter = -1;
        for (let rows of board){
            for (let item of rows){
                counter += 1;
                squares[counter].append(item);
            }
}
    return {
        board,
        squares
        
    };
})();
console.log(gameBoard.board);
console.log(gameBoard.squares);


const gameFlow = (() => {



})();



const Player = (name) => {


    return {name};
}

