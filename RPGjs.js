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

    while (count<= 5){
        count++;
        let plays=playerSelection(prompt("choose your arm: "));
        let compTurnn=compTurn();
        if (compTurnn===plays){
            console.log("its a tie bro")
        } else if (compTurnn==="Rock" && plays==="Scissors"){
            console.log("you lost");
            scoreComp+=1;
        } else if (plays==="Rock" && compTurnn==="Scissors"){
            console.log("you win");
            scoreUser+=1;
        } else if (compTurnn==="Rock" && plays==="Paper"){
            console.log("You win");
            scoreUser+=1;
        } else if (plays==="Rock" && compTurnn==="Paper"){
            console.log("You lost");
            scoreComp+=1;
        } else if (plays==="Scissors" && compTurnn==="Paper"){
            console.log("You win");
            scoreUser+=1;
        }else if (plays==="Paper" && compTurnn==="Scissors"){
            console.log("You lost");
            scoreComp+=1;
        } else {
            console.log("error en la matrix")
        };
        
        console.log(`The current score is: \ncomputer: ${scoreComp}\nyou: ${scoreUser}`)
   
    };
    
    if (scoreComp>scoreUser){
        console.log("Uh oh, you lost ma boi")
    } else {
        console.log("ohh sweet, you won ma son")
    }   
    
}

game();