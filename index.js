const gameBoard = (() => {
    const board = [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                  ];
    const renderContent = () => {
        const squares = document.querySelectorAll(".box > div");
        let counter = -1;
        for (let rows of board){
            for (let item of rows){
                counter += 1;
                squares[counter].append(item);
            }
        }
    };
    
    return {
        board,
        renderContent,
    };
})();
gameBoard.renderContent();


const gameFlow = (() => {



})();



const Player = (name) => {
    playerPlay = () => {

    }
    

    return {name}
}

const test1 = Player("X");
const test2 = Player("O");
console.log(test1.name, test2.name);
