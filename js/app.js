const music = document.getElementById("play");
const pause = document.getElementById("pause");
const musicBg = document.getElementById("musicBG");
const textContent = document.querySelector(".text-content")
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

let colors = generateColor(9);
let randomPlayColor = colors[Math.floor(Math.random() * 9)]
let colorBox = 9;
console.log(randomPlayColor)

//Play Btn
document.addEventListener('DOMContentLoaded',()=>{

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
});

//Play Game
// playBtn.addEventListener("click",()=>{
//     colorBox =9;
//     colors = generateColor(colorBox);
//     randomPlayColor = colors[Math.random() *6];
//     for (let i =0; i< colorBox.length; i++){
//         colorBox[i].style.background = colors[i];
//
//     }
//
// })


//Fail
function failGame(a){
    a.classList.add("d-none");
//model box
    //show Try Again
}
//Generate Color
function generateColor(num){
    let colorArray=[];
    for(let i =0; i < num; i++){
        colorArray.push(randomColor());
    }
    return colorArray;
}

//Random Color
function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

