const music = document.getElementById("play");
const pause = document.getElementById("pause");
const playBtn = document.getElementById("playGame");
const loading = document.getElementById("loading");

//Play Sound
music.addEventListener('click', () => {
    backgroundSound()

    pause.removeAttribute("hidden");
    music.setAttribute("hidden", "true")

})
pause.addEventListener('click', () => {
    muteSound()

    music.removeAttribute("hidden");
    pause.setAttribute("hidden", "true")
});


//Play Game
playBtn.addEventListener('click', () => {
    playSound()
    loading.classList.remove('d-none');

    setTimeout(() => {
        window.location.href = "game.html";

    }, 4000);

});
window.addEventListener('beforeunload', () => {
    loading.classList.add('d-none');
});

// Audio Function

function playSound() {
    let audio = new Audio("../music/click-one.wav");
    audio.loop = false;
    audio.play();

}

let audio = new Audio("../music/music.mp3");
backgroundSound()

function backgroundSound() {
    audio.loop = true;
    audio.play();

}

function muteSound() {
    audio.pause();

}


