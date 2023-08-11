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
})