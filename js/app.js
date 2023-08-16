const music = document.getElementById("play");
const pause = document.getElementById("pause");
const musicBg = document.getElementById("musicBG");
music.addEventListener('click',()=>{
    musicBg.play();

    pause.removeAttribute("hidden");
    music.setAttribute("hidden","true")

})
pause.addEventListener('click',()=>{
    musicBg.pause();

    music.removeAttribute("hidden");
    pause.setAttribute("hidden","true")
});




//Play Btn
    const playBtn = document.getElementById("playGame");
    const loading = document.getElementById("loading");


    playBtn.addEventListener('click', () => {
        loading.classList.remove('d-none');
        setTimeout(() => {
            window.location.href = "game.html";

        }, 4000);

    });
    window.addEventListener('beforeunload', () => {
        loading.classList.add('d-none');
});

