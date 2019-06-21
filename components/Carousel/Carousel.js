class Carousel {
    constructor(caro){
        this.caro = caro
        this.left = caro.querySelector('.left-button')
        this.right = caro.querySelector('.right-button')
        this.firstImg = caro.querySelector('img')

        // this.firstImg.style.display='block'
        // this.firstImg.visibility='visible'
        this.firstImg.classList.add('img-reveal')

        this.left.addEventListener('click', () => this.showImg(-1))
        this.right.addEventListener('click', () => this.showImg(1))
    }

    showImg(param) {
        const images = document.querySelectorAll('.carousel img')
        const curIndex = index

        if ((index+param>=0) && (index+param<=3)) {
            index += param
        } else if (index+param>3) {
            index = 0
        } else if (index+param<0) {
            index = 3
        }

        images.forEach(img => img.classList.remove('img-reveal'))
        images.forEach(img => img.classList.remove('img-reveal-left'))
        images.forEach(img => img.classList.remove('img-reveal-right'))

        if (curIndex<index) {
            images[index].classList.add('img-reveal-right')
        } else {
            images[index].classList.add('img-reveal-left')
        }
        
        // images.forEach(img => img.style.display='none')
        // images[index].style.display='block'
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
