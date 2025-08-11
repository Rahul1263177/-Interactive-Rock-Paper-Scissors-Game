let compScore=0;
let userScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //Math.random() fn always lies [0,1) exclusing 1
    //so there is no possibilty od getting answer as 3 

}

const playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    //generate the computer choice 
    const compChoice=genCompChoice();
    console.log(`comp choice = ${compChoice}`);
    if(compChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissors" ? true : false;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="paper" ? true : false;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    console.log(`U Won the Match`);
    msg.innerText=`You win your ${userChoice} beats the ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
     console.log(`U lost the Match`);   
     msg.innerText=`You lost computer ${compChoice} beats your ${userChoice} `;
     msg.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    console.log(`The game was draw`);
    msg.innerText="Game was a Draw you can play Again ";
    msg.style.backgroundColor="black";
}
//Modular fn -ante specifying the fn for each piece of code logic like now comp and playgame 

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice clicked was ",userChoice);
        playGame(userChoice);
    });
});