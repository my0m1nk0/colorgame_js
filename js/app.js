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

// //Random Color Generate
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
const playBtn = document.getElementById("play");
let colors = generateColor(9);
let randomPlayColor = colors[Math.floor(Math.random() * 9)]
let colorBox = 9;
console.log(colors);
console.log(randomPlayColor);
//Play Game
playBtn.addEventListener("click",()=>{
    colorBox =9;
    colors = generateColor(colorBox);
    randomPlayColor = colors[Math.random() *6];
    for (let i =0; i< colorBox.length; i++){
        colorBox[i].style.background = colors[i];

    }

})

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

