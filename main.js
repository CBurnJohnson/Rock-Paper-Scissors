const game = () => {
    let pScore = 0;
    let cScore = 0;
    const scoreBoard_div = document.querySelector('.score-board');

    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options img');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // call compare hands
                    compareHands(this.id, computerChoice);
                    // Update Images
                    playerHand.src = `./assets/${this.id}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                // Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.getElementById('user-score');
        const computerScore = document.getElementById('comp-score');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const borderSelector = document.getElementById(playerChoice);
        // Update text
        const winner = document.querySelector('.winner');
        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            scoreBoard_div.classList.add('gray-glow');
            borderSelector.classList.add('gray-glow');
            setTimeout(function() {
                scoreBoard_div.classList.remove('gray-glow');
            }, 1000);
            setTimeout(function() {
                borderSelector.classList.remove('gray-glow');
            }, 1000);
            return;
        }
        // Check for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                scoreBoard_div.classList.add('green-glow');
                borderSelector.classList.add('green-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('green-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('green-glow');
                }, 1000);
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Computer Wins!';
                scoreBoard_div.classList.add('red-glow');
                borderSelector.classList.add('red-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('red-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('red-glow');
                }, 1000);
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!';
                scoreBoard_div.classList.add('red-glow');
                borderSelector.classList.add('red-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('red-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('red-glow');
                }, 1000);
                cScore++;
                updateScore();
                return;
            } else if (computerChoice === 'rock') {
                winner.textContent = 'Player Wins!';
                scoreBoard_div.classList.add('green-glow');
                borderSelector.classList.add('green-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('green-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('green-glow');
                }, 1000);
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Wins!';
                scoreBoard_div.classList.add('green-glow');
                borderSelector.classList.add('green-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('green-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('green-glow');
                }, 1000);
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!';
                scoreBoard_div.classList.add('red-glow');
                borderSelector.classList.add('red-glow');
                setTimeout(function() {
                    scoreBoard_div.classList.remove('red-glow');
                }, 1000);
                setTimeout(function() {
                    borderSelector.classList.remove('red-glow');
                }, 1000);
                cScore++;
                updateScore();
                return;
            }
        }
    };

    // Call all the inner functions
    startGame();
    playMatch();
};

// Start the game
game();
