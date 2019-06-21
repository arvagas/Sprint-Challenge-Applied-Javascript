class Carousel {
    constructor(caro){
        this.caro = caro
        this.left = caro.querySelector('.left-button')
        this.right = caro.querySelector('.right-button')
        this.firstImg = caro.querySelector('img')
        this.images = caro.querySelectorAll('img')

        this.firstImg.style.display='block'

        this.left.addEventListener('click', () => this.showImgLeft())
        this.right.addEventListener('click', () => this.showImgRight())
    }

    showImgLeft() {
        if (index - 1 >= 0) {
            index--
        } else {
            index = 3
        }
    }

    showImgRight() {
        if (index + 1 <= 3) {
            index++
        } else {
            index = 0
        }
    }
}

let index = 0
let carousel = new Carousel(document.querySelector('.carousel'))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
