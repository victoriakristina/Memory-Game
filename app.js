document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'angelPanda',
            img: 'images/angelPanda.jpg'
        },
        {
            name: 'angelPanda',
            img: 'images/angelPanda.jpg'
        },
        {
            name: 'dropPanda',
            img: 'images/dropPanda.jpg'
        },
        {
            name: 'dropPanda',
            img: 'images/dropPanda.jpg'
        },
        {
            name: 'lovePanda',
            img: 'images/angelPanda.jpg'
        },
        {
            name: 'lovePanda',
            img: 'images/angelPanda.jpg'
        },
        
        {
            name: 'pandaRose',
            img: 'images/pandaRose.jpg'
        },
        {
            name: 'pandaRose',
            img: 'images/pandaRose.jpg'
        },
        {
            name: 'pandaTree',
            img: 'images/pandaTree.jpg'
        },
        {
            name: 'pandaTree',
            img: 'images/pandaTree.jpg'
        },
        {
            name: 'ElefantFe1',
            img: 'images/ElefantFe1.jpg'
        },
        {
            name: 'ElefantFe1',
            img: 'images/ElefantFe1.jpg'
        }
      
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

     //create your board
     function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/backCard.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
     }


//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosen[1]

    if (optionOneId == optionTwoId) {
   cards[optionOneId].setAttribute('src', 'images/backCard.jpg')
   cards[optionTwoId].setAttribute('src', 'images/backCard.jpg')
   alert('You have clicked the same image!')
    }

    else if (cardsChosen[0] === cardsChosen[1]) {
        ('You found a match')
    cards[optionOneId].setAttribute('src', 'images/whiteCard.jpg')
    cards[optionTwoId].setAttribute('src', 'images/whiteCard.jpg')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
     } else {
        cards[optionOneId].setAttribute('src', 'images/backCard.jpg')
        cards[optionTwoId.setAttribute('src', 'images/backCard.jpg')]
    alert('Sorry, try again')
   }
   
     cardsChosen = []
     cardsChosenId = []
     resultDisplay.textContent = cardsWon.length
     if (cardsWon.length === cardArray.length/2) {
     resultDisplay.textContent = 'Congratulations! You found them all!'  
     }
   }


//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard(grid)

})
