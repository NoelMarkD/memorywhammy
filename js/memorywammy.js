document.addEventListener('DOMContentLoaded', () => {
let gameStarted = false;
let gameWin = false;
   //card options
    const cardArray = [
        {
            name: 'mouse',
            img: 'media/mighty-mouse.jpeg',
        },
        {
            name: 'mouse',
            img: 'media/mighty-mouse.jpeg',
        },
        {
            name: 'whammy',
            img: 'media/Whammy.gif',
        },
        {
            name: 'whammy',
            img: 'media/Whammy.gif',
        },
        {
            name: 'duck',
            img: 'media/darkduck.png',
        },
        {
            name: 'duck',
            img: 'media/darkduck.png',
        },
        {
            name: 'foghorne',
            img: 'media/foghorne.jpg',
        },
        {
            name: 'foghorne',
            img: 'media/foghorne.jpg',
        },
        {
            name: 'turtle',
            img: 'media/ninja-turtle.jpg',
        },
        {
            name: 'turtle',
            img: 'media/ninja-turtle.jpg',
        },
        {
            name: 'mutt',
            img: 'media/Dynomutt_001.jpg',
        },
        {
            name: 'mutt',
            img: 'media/Dynomutt_001.jpg',
        }
        
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []; 
    var cardsChosenId = [];
    var cardsWon = [];
    
    

    
    //create board
    function createBoard() {
       

        // <div class="memory-card" id="cardId">
        //     <img class="front-face" id="whammy" src="media/Whammy.gif" >
        //     <img class="back-face" src="media/logo.jpg" >
        // </div>

        for (let i = 0; i < cardArray.length; i++) {
            var cardContainer = document.createElement('div');  
            cardContainer.classList = 'memory-card';
            var card = document.createElement('img')
            card.setAttribute('src', 'media/logo.jpg')
            card.setAttribute('data-id', i)
            card.classList= 'answerCard front-face'
            cardContainer.appendChild(card)
            grid.appendChild(cardContainer)
        }
        let cards = document.querySelectorAll('.answerCard')
        console.log(cards)
        cards.forEach(el => {
            el.addEventListener('click', flipCard)
        })

    }

    //check for matches
    function checkForMatch(e) {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        
        const optionTwoId = cardsChosenId[1]
        console.log(optionOneId, optionTwoId);
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match')
            // cards[optionOneId].setAttribute('src', 'media/mighty-mouse.jpeg, media/Whammy.gif, media/darkduck.png, media/foghorne.jpg, media/ninja-turtle.jpg, media/Dynomutt_001.jpg')
            // cards[optionTwoId].setAttribute('src', 'media/mighty-mouse.jpeg, media/Whammy.gif, media/darkduck.png, media/foghorne.jpg, media/ninja-turtle.jpg, media/Dynomutt_001.jpg')
            cardsWon.push(cardsChosen[0])
            console.log(cardsWon);
            // e.target.removeEventListner('click', flipCard)
        } else {
            cards[optionOneId].setAttribute('src', 'media/logo.jpg')
            cards[optionTwoId].setAttribute('src', 'media/logo.jpg')
            // alert('Sorry, try again')
        }

        if (cardsChosen[0] === ('src', 'madia/whammy.gif')) {
            cardsWon.push('src', 'media/logo.jpg')
            // } else {
            //     (optionOneId || optionTwoId === 'whammy') {
            //         reset(board);
            //     }
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            gameWin = true;
            alert ('Congratulations! You Win!')

        }
    }

    //flip your card
    function flipCard(e) {
        // console.log('ran');
        var cardId = this.getAttribute('data-id')
        if (!cardsWon.includes(cardArray[cardId].name)) {
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            console.log(cardsChosen);
            this.setAttribute('src', cardArray[cardId].img)
            console.log(cardId);
            if (cardsChosen.length === 2) {
                setTimeout(()=>{checkForMatch(e)}, 500)
            }

        }

    //timer
    var timeLeft = 30;
    var elem = document.getElementById('some_div');
    if (!gameStarted) {
        gameStarted = true;
        var timerId = setInterval(countdown, 1000);
    }
    
    function countdown() {
        if (!gameWin) {
            if (timeLeft == -1) {
                alert ('Sorry, You Lose.');
                clearTimeout(timerId);
                location.reload();

                
            } else {
              elem.innerHTML = timeLeft + ' seconds remaining';
              timeLeft--;
            }
            
            
        } else {
            clearTimeout(timerId); 
        }
    }

    // start game
    document.getElementById("startGame").addEventListener("click", function () {
        // timeLeft = 30
        // createBoard();
        location.reload()
    });
 

  

    }

    createBoard()
})


 
