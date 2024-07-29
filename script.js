let choices = document.querySelectorAll(".choice");
let userMsg = document.querySelector("#user-score");
let compMsg = document.querySelector("#comp-score");
let winningMsg = document.querySelector(".msg");

let userScore = 0;
let compScore = 0;

const genCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        winningMsg.style.backgroundColor = "green";
        winningMsg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        userMsg.innerText = userScore;
    }
    else{
        compScore++;
        winningMsg.style.backgroundColor = "red";
        winningMsg.innerText = `You Lose! Computer's ${compChoice} beats ${userChoice}.`;
        compMsg.innerText = compScore;
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        let compChoice = genCompChoice();

        if(userChoice === compChoice){
            winningMsg.innerText = `Game Draw! Your ${userChoice} Computer's ${compChoice}`;
            winningMsg.style.backgroundColor = "black";
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper"?false:true;
            }
            else if(userChoice === "paper"){
                userWin = compChoice === "scissors"?false:true;
            }
            else{
                userWin = compChoice === "rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
    });
});