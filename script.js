function createGrid() {
    let gridContainer = document.querySelector(".gridContainer");
    
    for (let i = 0; i < 256; i++) {
        let divBox = document.createElement("div");
        divBox.setAttribute("class", "gridBox");
        divBox.addEventListener('mouseover', () => {
           divBox.style.backgroundColor = "black";
            
        });
        gridContainer.appendChild(divBox);
        
    }

}

createGrid();
