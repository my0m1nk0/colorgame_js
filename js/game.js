//Home Menu
const playHome = document.getElementById("play-home");
const playMenu = document.getElementById('play-menu');
//Easy Play Game
const easyBtn = document.getElementById("easy");
const chooseLevel = document.getElementById("button-game");
const showColor = document.getElementById('text-color');
const colorRow = document.getElementById("colorRow");
const textContent = document.querySelector(".text-content");
const normalBtn = document.getElementById("normal");
const hardBtn = document.getElementById("hard");
// modal
const modal = document.getElementById('modal');
const home = document.getElementById('home');
const continueGame = document.getElementById('continue');
const wrongAns = document.getElementById("wrongAns");
const backHome = document.getElementById("back");


playHome.addEventListener('click', () => {
    playSound();
    location.reload();
});
playMenu.addEventListener('click', () => {
    playSound();
    window.location.href = "index.html"
})


//Easy Game
easyBtn.addEventListener("click", () => {
    playSound();
    easyGame();
});

function easyGame() {
    chooseLevel.classList.add('d-none');
    showColor.classList.remove('d-none');
    playHome.classList.remove('d-none');
    playMenu.classList.add('d-none');
    createElement(3)
}

//Normal Play Game
normalBtn.addEventListener("click", () => {
    playSound();
    normalGame();
});

function normalGame() {
    chooseLevel.classList.add('d-none');
    showColor.classList.remove('d-none');
    playHome.classList.remove('d-none');
    playMenu.classList.add('d-none');


    createElement(6)
}

//Hard Play Game
hardBtn.addEventListener("click", () => {
    playSound();
    hardGame();
});

function hardGame() {
    chooseLevel.classList.add('d-none');
    showColor.classList.remove('d-none');
    playHome.classList.remove('d-none');
    playMenu.classList.add('d-none');
    createElement(9)
}

//Back Home
backHome.addEventListener('click', () => {
    playSound();

    window.location.href = 'index.html';
    muteSound();
});


//Create Element
function createElement(color) {
    let colorArry = generateColor(color);
    let randomPlayColor = colorArry[Math.floor(Math.random() * color)];

    textContent.innerText = randomPlayColor;
    for (let i = 0; i < colorArry.length; i++) {
        const divBox = document.createElement('div');
        divBox.classList.add('col-4')
        divBox.style.background = colorArry[i];
        divBox.addEventListener('click', function () {
            playSound()
            let divBgColor = divBox.style.backgroundColor;
            divBox.style.cursor = "none";

            if (compareColors(randomPlayColor, divBgColor)) {

                showCongratulationsModal(modal);
                continueGame.addEventListener('click', ($event) => {
                    playSound()
                    colorRow.innerHTML = '';
                    if (color == 3) {
                        easyGame()
                    } else if (color == 6) {
                        normalGame()
                    } else if (color == 9) {
                        hardGame()
                    }
                    hideCongratulationsModal(modal);

                });
                home.addEventListener('click', () => {
                    playSound()
                    location.reload();

                });


            } else {
                wrongAns.classList.remove("d-none");

                setTimeout(() => {
                    wrongAns.classList.add("d-none");
                }, 2000)


                divBox.style.background = '';
            }
        });

        colorRow.appendChild(divBox);
    }

}

// Function to show the modal
function showCongratulationsModal(modal) {
    let myModal = new bootstrap.Modal(modal, {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();
}

// Function to hide the modal
function hideCongratulationsModal(modal) {
    modal.style.display = 'none'; // Hide the modal by setting its display style to 'none'
    document.body.classList.remove('modal-open'); // Remove the 'modal-open' class from the body
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.remove(); // Remove the modal backdrop if it exists
    }
}

//Generate Color
function generateColor(num) {
    let colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

//Random Color
function randomColor() {
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
    return {
        red: parseInt(rgbArray[0]),
        green: parseInt(rgbArray[1]),
        blue: parseInt(rgbArray[2])
    };
}
