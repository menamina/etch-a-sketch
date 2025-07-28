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


red.addEventListener('click', function() {
    grid.style.backgroundColor = "red";
});

blue.addEventListener('click',)



grid.addEventListener('mousedown', function() {
    if mousedown is true: grid.style.backgroundColor = "users choice"
}

)