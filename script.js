const divContainer = document.querySelector(".div-container");
const customizeGrid = document.getElementById("customize");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    divContainer.appendChild(div);
};

const squares = document.querySelectorAll(".div");

function changeBackground(event) {
    event.target.classList.add("hovered");
};

squares.forEach(square => {
    square.addEventListener("mouseover", (changeBackground));
});

function customize() {    
    let squaresPerSide;

    do {
        squaresPerSide = parseInt(prompt("How many squares per side? (Max: 100)"));
    } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

    console.log(squaresPerSide)
    return squaresPerSide;
};

customizeGrid.addEventListener("click", customize);