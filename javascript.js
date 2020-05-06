const container = document.querySelector("#container");


gridcells(16);
container.style["grid-template-columns"] = gridlayout(16);
container.style["grid-template-rows"] = gridlayout(16);


function gridcells(num) {
  for (i = 0; i < (num * num); i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    container.appendChild(newCell);
  }
  const cells = document.querySelectorAll(".cell")
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function(e) {
      e.target.style["background-color"] = "rgba(0 ,0, 0, 1)";
    });
  });
}

function party() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function(e) {
      e.target.style["background-color"] = getRandomColor();
    });
  });
}


function normal() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function(e) {
      e.target.style["background-color"] = "rgba(0 ,0, 0, 1)";
    });
  });
}


function newGrid() {
  var grid = prompt("How big would you like the grid? (numbers only): ");
  if (grid == null || grid == "") {
    num = "User cancelled the prompt.";
  } else {
    document.querySelectorAll(".cell").forEach((cell) => cell.remove());
    gridcells(grid);
    container.style["grid-template-columns"] = gridlayout(grid);
    container.style["grid-template-rows"] = gridlayout(grid);
  }
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function gridlayout(num) {
  let columnsandrows = "";
  for (i = 0; i < num; i++) {
    columnsandrows += "auto ";
  }
  return columnsandrows
}
