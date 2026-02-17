const container = document.getElementById("grid-container");

function getRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);

   square.addEventListener("mouseover", () => {
  square.style.backgroundColor = getRandomColor();
});
  }
}

createGrid(16);

const resizeBtn = document.getElementById("resizeBtn");

resizeBtn.addEventListener("click", ()=>{
    let newSize = prompt ("Enter the number of squares per side (maximum 100):")

    newSize = Number(newSize)

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    }

    else {
        alert ("Please, enter a valid number between 1 and 100")
    }
})
