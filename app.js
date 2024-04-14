const board = document.querySelector('#board')
const colors = ['#e74c3c', '#f78a3b', '#dde02b', '#4bc433', '#2f60b5' , '#962fb5', '#ed18a2', '#e81328']
const SQUARES_NUMBER = 500

for (let i=0; i <SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background  = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}