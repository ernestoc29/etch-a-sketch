const divContainer = document.querySelector(".div-container");
const customizeGrid = document.getElementById("customize");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    divContainer.appendChild(div);
};

function changeBackground(event) {
    if (event.target.classList.contains("div")) {
        event.target.classList.add("hovered");
    };
};

function customize() {    
    let squaresPerSide;

    do {
        squaresPerSide = parseInt(prompt("How many squares per side? (Max: 100)"));
    } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

    divContainer.replaceChildren();

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
       const div = document.createElement("div"); 
       div.classList.add("div");

       div.style.width = (100 / squaresPerSide) + "%";
       div.style.height = (100 / squaresPerSide) + "%";

       divContainer.appendChild(div);
    };
    
    return squaresPerSide;
};

customizeGrid.addEventListener("click", customize);

divContainer.addEventListener("mousemove", changeBackground);