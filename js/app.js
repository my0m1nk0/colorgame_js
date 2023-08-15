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


//Easy Play Game
const easyBtn = document.getElementById("easy");
const chooseLevel = document.getElementById("button-game");
const showColor = document.getElementById('text-color');
const colorRow = document.getElementById("colorRow");
let colorBox=[];

easyBtn.addEventListener("click", ()=>{
chooseLevel.classList.add('d-none');
showColor.classList.remove('d-none');
colorBox.push(createElement(3))
});

//Normal Play Game
const normalBtn = document.getElementById("normal");
normalBtn.addEventListener("click", ()=>{
    chooseLevel.classList.add('d-none');
    showColor.classList.remove('d-none');
    colorBox.push(createElement(6))
});

//Hard Play Game
const hardBtn = document.getElementById("hard");
hardBtn.addEventListener("click", ()=>{
    chooseLevel.classList.add('d-none');
    showColor.classList.remove('d-none');
    colorBox.push(createElement(9))
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
//Create Element
function createElement(color){
    let colorArry = generateColor(color);
    console.log(colorArry);

    let randomPlayColor = colorArry[Math.floor(Math.random() * color)];
    console.log(randomPlayColor)
    textContent.innerText=randomPlayColor;
    for(let i =0; i<colorArry.length;i++){
        const divBox = document.createElement('div');
        divBox.classList.add('col-4')
            divBox.style.background =colorArry[i];
        divBox.addEventListener('click', function() {
           let divBgColor=divBox.style.backgroundColor;

            if(compareColors(randomPlayColor,divBgColor)){
                alert("You Won");
                location.reload();
            }else {
                alert("wrong answer");
                divBox.style.background = '';
            }
        });

        colorRow.appendChild(divBox);
    }

}


//Fail
function failGame(a){

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

//Compare Color
function compareColors(color1, color2) {
    if (!color1 || !color2) {
        return false;
    }

    // Convert color strings to RGB components
    let rgb1 = colorToRGB(color1);
    let rgb2 = colorToRGB(color2);

    // Compare RGB components
    return rgb1.red === rgb2.red && rgb1.green === rgb2.green && rgb1.blue === rgb2.blue;
}

function colorToRGB(color) {
    let rgbArray = color.match(/\d+/g);
    console.log(rgbArray)
    return {
        red: parseInt(rgbArray[0]),
        green: parseInt(rgbArray[1]),
        blue: parseInt(rgbArray[2])
    };
}

