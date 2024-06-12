function createGrid(squarePerSide) {
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "gridContainer");
    document.body.appendChild(gridContainer);
    if (squarePerSide > 100) {
        squarePerSide = 100;
    }
    else if (squarePerSide <= 0 || isNaN(squarePerSide)) {
        squarePerSide = 2;
    }
    for (let i = 0; i < (squarePerSide * squarePerSide); i++) {
        let divBox = document.createElement("div");
        divBox.setAttribute("class", "gridBox");
        let boxSizeRatio = 100 / squarePerSide;
        divBox.style.flexBasis = boxSizeRatio.toString() + "%";
        divBox.addEventListener('mouseover', () => {
            divBox.style.backgroundColor = "black";

        });
        gridContainer.appendChild(divBox);

    }

}

function createButton() {
    let gridContainer = document.querySelector(".gridContainer");
    let generatorButton = document.createElement("button");
    let buttonDiv = document.createElement("div");
    buttonDiv.style.textAlign = "center";
    generatorButton.setAttribute("class", "generatorButton");
    generatorButton.textContent = "Generate new grid";
    generatorButton.onclick = generateNewGrid;
    document.body.insertBefore(buttonDiv, gridContainer);
    buttonDiv.appendChild(generatorButton);
}

function generateNewGrid() {
    let squarePerSideToGenerate = prompt("Number of square per side:", 16);
    removeGrid();
    createGrid(squarePerSideToGenerate);
}

function removeGrid() {
    let gridContainer = document.body.querySelector(".gridContainer");
    gridContainer.remove();
}

createButton();
createGrid(16);
