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

let userScore=0;
let compScore=0;
let finalP="";

const results=document.querySelector("#results");
const scores=document.querySelector("#scores")
const pFinal=document.createElement("p");

const pUser=document.createElement("p");
pUser.textContent=`User's score: ${userScore}`;
pUser.classList.add("uScoreCl");
pUser.classList.add("score");
scores.appendChild(pUser)

const pComp=document.createElement("p");
pComp.textContent=`Comp's score: ${compScore}`;
pComp.classList.add("cScoreCl");
pComp.classList.add("score");
scores.appendChild(pComp);

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", letsgo);
});

const question=document.createElement("p");
question.textContent="Do you want to continue?";

const quesButton2=document.createElement("button");
quesButton2.textContent="No";
quesButton2.addEventListener("click",noResponse)

const quesButton1=document.createElement("button");
quesButton1.textContent="Yes";
quesButton1.addEventListener("click",restartGame);

function letsgo(e) {

        let buttonAttri = e.target.getAttribute("data-key");

        
        let plays=playerSelection(buttonAttri);
        let compTurnn=compTurn();

        if (compTurnn===plays){
            console.log("its a tie bro");
        } else if (compTurnn==="Rock" && plays==="Scissors"){
            compScore+=1;
            pComp.textContent=`Comp's score: ${compScore}`;
    
        } else if (plays==="Rock" && compTurnn==="Scissors"){
            userScore+=1;
            pUser.textContent=`User's score: ${userScore}`;
            
        } else if (compTurnn==="Rock" && plays==="Paper"){
            userScore+=1;
            pUser.textContent=`User's score: ${userScore}`;
            
        } else if (plays==="Rock" && compTurnn==="Paper"){
            compScore+=1;
            pComp.textContent=`Comp's score: ${compScore}`;
            
        } else if (plays==="Scissors" && compTurnn==="Paper"){
            userScore+=1;
            pUser.textContent=`User's score: ${userScore}`;
            
        }else if (plays==="Paper" && compTurnn==="Scissors"){
            compScore+=1;
            pComp.textContent=`Comp's score: ${compScore}`;
        
        } else {
            console.log("error en la matrix")
    };

    if (userScore===5 || compScore===5){

        if (userScore>compScore){
            finalP.textContent="You won";
        } else{
            finalP.textContent="You lose";
        };
        

        buttons.forEach(button => {
            button.removeEventListener("click", letsgo);
        });


        results.appendChild(question);

        
        results.appendChild(quesButton1);

        
        results.appendChild(quesButton2);

        pFinal.textContent=finalP.textContent;

        results.appendChild(pFinal);

    };

};

function restartGame(){

    userScore=0;
    compScore=0;
    pComp.textContent=`Comp's score: ${compScore}`;
    pUser.textContent=`Comp's score: ${compScore}`;
    finalP.textContent="";

    results.removeChild(question);
    results.removeChild(quesButton1)
    results.removeChild(quesButton2);

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
    button.addEventListener("click", letsgo);
});
}

function noResponse(){
    firstChild=results.firstChild
    while (firstChild){
        results.removeChild(firstChild);
        firstChild=results.firstChild;
    }
    const socialP=document.createElement("p");
    socialP.textContent=`You can have more fun at: github.com/maikol9703 \nRefresh if you wanna continue.`;
    results.appendChild(socialP);
}

