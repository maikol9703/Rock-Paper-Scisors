console.log("Welcome to this game, are you ready?");
let optionslist=["Rock", "Paper", "Scissors"];

function compTurn(){
    let randomoption=optionslist[(Math.floor(Math.random() * optionslist.length))];
    return(randomoption);
}

function playerSelection(playsel){
    let plays=playsel.charAt(0).toUpperCase() + playsel.slice(1).toLowerCase();
    return (plays);
}

function game(){
    let count=0;
    let scoreComp=0;
    let scoreUser=0;
    if (scoreComp>scoreUser){
        console.log("Uh oh, you lost ma boi")
    } else {
        console.log("ohh sweet, you won ma son")
    }   
    
}

game();