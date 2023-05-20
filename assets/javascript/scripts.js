// players

const player1 = {
    name: "",
    score: 0,
    roundWin:[0,0,0],
    choice: "",
}

const player2 = {
    name: "",
    score: 0,
    roundWin:[0,0,0],
    choice: "",
}

// lose conditions

const loseConditions = {
    rock:["paper", "spock"],
    paper:["scissors", "lizard"],
    scissors:["rock", "spock"],
    lizard:["rock", "scissors"],
    spock:["paper", "lizard"]
}


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    beginTimer();   

    player1ChoicePrint();

    player2ChoicePrint();


    function player2ChoicePrint() {
        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("value") === "rock2" || "paper2" || "scissors2" || "lizard2" || "spock2") {
                    let player2Choice = this.getAttribute("value");
                    switch (player2Choice) {
                        case "rock2":
                            p2Choice = "rock";
                            break;
                        case "scissors2":
                            p2Choice = "scissors";
                            break;
                        case "paper2":
                            p2Choice = "paper";
                            break;
                        case "lizard2":
                            p2Choice = "lizard";
                            break;
                        case "spock2":
                            p2Choice = "spock";
                            break;
                    };
                    document.getElementById("p2Choice").innerHTML = "Player 2 has chosen: " + p2Choice;
                    player2.choice = p2Choice;
                    // console.log(p2choice);
                };
            });
        };
    }

    function player1ChoicePrint() {
        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("value") === "rock1" || "paper1" || "scissors1" || "lizard1" || "spock1") {
                    let player1Choice = this.getAttribute("value");
                    switch (player1Choice) {
                        case "rock1":
                            p1Choice = "rock";
                            break;
                        case "scissors1":
                            p1Choice = "scissors";
                            break;
                        case "paper1":
                            p1Choice = "paper";
                            break;
                        case "lizard1":
                            p1Choice = "lizard";
                            break;
                        case "spock1":
                            p1Choice = "spock";
                            break;
                    };
                    document.getElementById("p1Choice").innerHTML = "Player 1 has chosen: " + p1Choice;
                    player1.choice = p1Choice;
                };
            });
        };
    }

    function beginTimer() {
        for (let button of buttons) {
            button.addEventListener("click", function beginTimerCount () {
                let countdown = setInterval(function () {
                    // buttons.removeEventListener("click", beginTimerCount);
                    let timerElement = document.getElementById('timer');
                    let currentTime = timerElement.innerHTML;
                    currentTime--;
                    timerElement.innerHTML = currentTime;
                    if (currentTime < 1) {
                        clearInterval(countdown);
                        disableButtons();
                        winConditions();
                    };
                }, 1000);
            });
        };
    }

    function disableButtons() {
        for(let button of buttons){
        button.disabled = true;
        }
    };

    function winConditions() {
        let round = document.getElementById("round");
        let winner = document.getElementById("winner");

        if (player1.choice === player2.choice) {
            winner.innerHTML = "DRAW";
            round.innerHTML++;
        } else if (loseConditions[player1.choice].includes(player2.choice)) {
            winner.innerHTML = "PLAYER 2 WINS";
            round.innerHTML++;
            player2.score++;
        } else {
            winner.innerHTML = "PLAYER 1 WINS";
            round.innerHTML++;  
            player1.score++;
        };
    };

    function playerRoundWinCounter() {
        
    }
})











// dynamic font refactor
// const myDiv = document.getElementById("myDiv");

// function adjustFontSize() {
//   const divWidth = myDiv.offsetWidth;
//   const fontSize = divWidth / 10; // Adjust the factor to your preference
//   myDiv.style.fontSize = `${fontSize}px`;
// }


// fontRefactor();
// window.addEventListener("resize", fontRefactor);
// })
