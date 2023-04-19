console.log("hola mf");
let optionslist=["Rock", "Paper", "Scissors"];

function compTurn(){
    let randomoption=optionslist[(Math.floor(Math.random() * optionslist.length))];
    return(randomoption);
}

