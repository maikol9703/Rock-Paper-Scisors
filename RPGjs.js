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
