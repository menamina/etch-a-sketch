const board = document.querySelector(".board");
const fixedGrid = 500;

// creating function to use to create divs;
function createGrid(gridAmount){
        board.innerHTML = '';
        board.style.width = `${fixedGrid}px`;
        board.style.height = `${fixedGrid}px`;

        let gridSize = fixedGrid / gridAmount;

        for(let x = 0; x < gridAmount * gridAmount; x++ ){
                let grid = document.createElement("div");
                grid.classList.add("grid");
                grid.style.width = `${gridSize}px`;
                grid.style.height = `${gridSize}px`;
                board.appendChild(grid);
        }
}

// calling function to create a 16x16 grid
createGrid(16);


let submit = document.querySelector(".submit");
submit.addEventListener('click', function() {
        let gridNew = Number(document.querySelector(".textbox").value);
        if(gridNew > 0 && gridNew <= 100){
                createGrid(gridNew);
        }
})

let selectedColorValue = '';

let colorWanted = document.querySelector(".colorWanted");
colorWanted.addEventListener('click', selectedColor);

function selectedColor(event){
        let color = event.target;
        if(color.classList.contains("color")){
                selectedColorValue = color.textContent;
        }

        console.log("Selected color is:", selectedColorValue);

}


let parentContainer = document.querySelector(".board");
parentContainer.addEventListener('mousedown', selectGrid);

function selectGrid(event){
        let individualGridColor = event.target;
        if(individualGridColor.classList.contains("grid")){
                individualGridColor.style.backgroundColor = selectedColorValue;
        }

        console.log("You clicked a grid")

}

let clear = document.querySelector(".clear");
clear.addEventListener('click', clearDaBoard);

function clearDaBoard(event){
        erase = event.target;
        
}