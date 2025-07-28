let container = document.querySelector(".container");

let x = 0;

    while (x < 256) {
            x++;
            let grid = document.createElement("div");
            container.appendChild(grid);
            grid.classList.add("grid");

    }

let topcontain = document.querySelector(".topcontain");

let red = document.createElement("button");
topcontain.appendChild(red);
red.textContent = "Red";

let blue = document.createElement("button");
topcontain.appendChild(blue);
blue.textContent = "Blue";

let black = document.createElement("button");
topcontain.appendChild(black)
black.textContent = "Black";