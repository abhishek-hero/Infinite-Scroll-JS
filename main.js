let container = document.querySelector('.container')

const loadImages = async (numPages = 25) => {

    let i = 0;

    while (i < numPages) {
        let response = await fetch('https://dog.ceo/api/breeds/image/random')

        let data = await response.json()

        const img = document.createElement('img')

        img.src = `${data.message}`
        container.appendChild(img)

        i++
    }
}

loadImages()

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll', () => {
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})