let roundScore, activePlayer, gamePlaying, num, backCardNum, add;

num = 13;
/*
scores = [0,0];
roundScore = 0;
activePlayer = 0; //change this to 0 or 1
*/

init ();

function disable (className) {
    document.getElementsByClassName(className)[0].disabled = true;
}

function check () {
    if (roundScore > 20) {
        document.getElementById('name-' + activePlayer).textContent = roundScore === 21 ? 'Winner!' : 'Loser!';
        querySelectorCards();
        document.getElementsByClassName(`player-${activePlayer}-panel`)[0].classList.add(roundScore === 21 ? 'winner' : 'loser');
        document.getElementsByClassName(`player-${activePlayer}-panel`)[0].classList.remove('active');
        gamePlaying = false;
        return;
    }
}


let hitClicks = 0;
document.getElementsByClassName('btn-hit')[0].addEventListener('click', () => {
    hitClicks += 1;

    // Random number
    const cardNum = Math.floor(Math.random() * 13) + 1;

    if (gamePlaying && cardNum !== 1) {
        // Display the result
        const cardDOM = document.getElementById('card-' + hitClicks);
        cardDOM.style.display = 'block';
        cardDOM.src = `./cards/card-${cardNum}.jpg`;
        roundScore += cardNum;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

        check();
    } else if (cardNum === 1) {
        const cardDOM = document.getElementById('card-' + hitClicks);
        cardDOM.style.display = 'block';
        cardDOM.src = `./cards/card-${cardNum}.jpg`;

        document.getElementById('one-' + activePlayer).onclick = () => {
            add = 1;
            addRoundScore();
            // must disable all other functions

            check();
        };
        document.getElementById('eleven-' + activePlayer).onclick = () => {
            add = 11;
            addRoundScore();
            // must disable all other functions
            check();
        };
    }
});


document.getElementsByClassName('btn-hold')[0].addEventListener('click', () => {
    if (gamePlaying) {
        // check if the player won the game
        check();
        nextPlayer();
    }
});

function querySelectorCards () {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
}

function nextPlayer () {
    // next player
    // ternary operator
    roundScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // roundScore = 0;

    // document.getElementById('current-0').textContent = '0';
    // document.getElementById('current-1').textContent = '0';

    // switching active classes
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.getElementsByClassName('player-0-panel')[0].classList.toggle('active');
    document.getElementsByClassName('player-1-panel')[0].classList.toggle('active');

    // making card disappear with a 1
    // -- turn off -- querySelectorCards();
}

document.getElementsByClassName('btn-new')[0].addEventListener('click', init);


function init () {
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    for (let i = 1; i < 11; i++) {
        document.getElementById('card-' + i).style.display = 'none';
    }

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementsByClassName('player-0-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-0-panel')[0].classList.add('active');


    document.getElementsByClassName('btn-flip')[0].onclick = function() {
        const backCardNum = Math.floor(Math.random() * 13) + 1;


        // display result on back card
        const backCardDOM = document.getElementById('card-back-' + activePlayer);
        backCardDOM.style.display = 'block';
        backCardDOM.src = `./cards/card-${backCardNum}.jpg`;

        if (backCardNum === 1) {
            document.getElementById('one-' + activePlayer).onclick = () => {
                add = 1;
                addRoundScore();

            // must disable all other functions
            };
            document.getElementById('eleven-' + activePlayer).onclick = () => {
                add = 11;
                addRoundScore();

            // must disable all other functions
            };
        } else {
            roundScore += backCardNum;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }

        // disableFlip();
        return backCardNum;
    };
}


function addRoundScore () {
    roundScore += add;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
}
