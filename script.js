document.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`.${event.code}`);
    const btn = document.querySelector(`.${event.code.toLowerCase()}`)
    btn.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
})

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('transitionend', (event) => {
        if(event.propertyName !== 'transform') return;
        btn.classList.remove('playing');
    })
})

 // learn to work with keyboard events
 // learn to work with audio element
