board = document.querySelector(".board");

for (let x = 0; x < 256; x++) {
        grid = document.createElement("div");
        board.appendChild(grid);
        grid.classList.add("grid");
};


let submit = document.querySelector(".submit");
submit.addEventListener('click', function(gridnew) {
        gridnew = Number(document.querySelector(".textbox").value);
        const fixedGrid = 500;
        let gridSize = fixedGrid / gridnew;

})

let selectedColorValue;

let colorWanted = document.querySelector(".colorWanted");
colorWanted.addEventListener('click', selectedColor);

function selectedColor(event){
        let color = event.target;
        if(color.classList.contains("color")){
                selectedColorValue = color.textContent;
        }

}


let parentContainer = document.querySelector(".flex-container");
parentContainer.addEventListener('click', selectGrid);

function selectGrid(event){
        let individualGridColor = event.target;
        if(individualGridColor.classList.contains("grid")){
                individualGridColor.style.background = selectedColorValue;
        }

}
