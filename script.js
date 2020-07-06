const container = document.querySelector('.container')
const text = document.querySelector('#text')



const totalTime = 7500 // 7 seconds
const breatheTime = (totalTime / 5) * 2 // this gives me 3 seconds
const holdTime = totalTime / 5 // 1.5 seconds

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breath in!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)