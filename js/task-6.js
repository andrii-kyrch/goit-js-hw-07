function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxes);
}

createButton.addEventListener('click', onCreateButton);

function onCreateButton() {
  const amount = inputElem.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputElem.value = '';
}

destroyButton.addEventListener('click', onDestroyButton);

function onDestroyButton() {
  boxesContainer.innerHTML = '';
}
