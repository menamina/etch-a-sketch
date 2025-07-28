flexContainer = document.querySelector(".flex-container");


let x = 0;

while (x < 256) {
        x++;
        grid = document.createElement("div");
        flexContainer.appendChild(grid);
        grid.classList.add("grid");
};