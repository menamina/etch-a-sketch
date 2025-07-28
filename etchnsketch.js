let container = document.querySelector(".container");
let x = 0;

    while (x < 256) {
            x++;
            let grid = document.createElement("div");
            container.appendChild(grid);
            grid.classList.add("grid");

}