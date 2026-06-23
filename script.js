const divContainer = document.querySelector(".div-container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("div");
    divContainer.appendChild(div);
}