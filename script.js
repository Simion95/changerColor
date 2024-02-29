let colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];
let clickMeButton = document.querySelector(".clickMe-button");
let container = document.querySelector(".container");
let containerTitleColor = document.querySelector(".container-title-color");
let clicksNumber = document.querySelector(".number-clicks");
let resetButton = document.querySelector(".reset-button");


let i = 0;
let numberClicks = 0;

let changeColor = () => {
    i++;
    numberClicks++;
    if ( i === 5) {
        i = 0;
    }


    containerTitleColor.innerText = colors[i];
    container.style.backgroundColor = colors[i];
    containerTitleColor.style.color = colors[i];
    clicksNumber.innerText = numberClicks;
}

let resetFunction = () => {
    i = 0;
    numberClicks = 0;
    containerTitleColor.innerText = colors[i];
    container.style.backgroundColor = colors[i];
    containerTitleColor.style.color = colors[i];
    clicksNumber.innerText = numberClicks;
}
    
    clickMeButton.addEventListener("click", changeColor )
    resetButton.addEventListener("click", resetFunction)