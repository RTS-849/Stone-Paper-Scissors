let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let usershowscore = document.querySelector("#user-score");
let compshowscore = document.querySelector("#comp-score");


const showScore = (userWin) =>{
    if(userWin == true)
    {
        userScore++;
        // console.log(userScore);
        usershowscore.innerText = userScore;
    }else{
        compScore++;
        
        compshowscore.innerText = compScore;
    }
};


const gencompchoices = () => {
    const option = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3);
    return option[random];

};

const DrawGame = () => {
    msg.innerText = "Game was Draw! Play again."
    msg.style.backgroundColor = "#023047";

    
}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin)
    {
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else
      {  msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${compchoice} beats Your ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log('Users Choice =', userChoice)
    //computer generated choices
    const compchoice = gencompchoices();
    console.log("Comp Choice =", compchoice);

    if (userChoice === compchoice) {
        DrawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else
        {
            // rock , paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
        showScore(userWin);
    };

};


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});

