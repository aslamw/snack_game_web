const snake = document.getElementById("snake");
const food = document.getElementById("food");
const scoreDisplay = document.getElementById("score");

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let score = 0;

function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 30) * 10;
  foodY = Math.floor(Math.random() * 30) * 10;
  food.style.left = foodX + "px";
  food.style.top = foodY + "px";
}

function updateSnakePosition() {
  snakeX += 10;
  snake.style.left = snakeX + "px";
  snake.style.top = snakeY + "px";
}

function checkCollision() {
  if (snakeX === foodX && snakeY === foodY) {
    score++;
    scoreDisplay.innerText = "Score: " + score;
    updateFoodPosition();
  }
  if (snakeX >= 300 || snakeX < 0 || snakeY >= 300 || snakeY < 0) {
    alert("Game Over! Your score is " + score);
    snakeX = 0;
    snakeY = 0;
    score = 0;
    scoreDisplay.innerText = "Score: " + score;
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      snakeX += 10;
      break;
    case "ArrowLeft":
      snakeX -= 10;
      break;
    case "ArrowDown":
      snakeY += 10;
      break;
    case "ArrowUp":
      snakeY -= 10;
      break;
  }
  snake.style.left = snakeX + "px";
  snake.style.top = snakeY + "px";
  checkCollision();
});

updateFoodPosition();