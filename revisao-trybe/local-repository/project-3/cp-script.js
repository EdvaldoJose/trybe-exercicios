const palletBlack = document.querySelector('.preto');
const containerPixels = document.querySelector('#pixel-board');
const palletSelectors = document.querySelectorAll('.color');
const buttonClear = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const button = document.querySelector('#generate-board');

window.onload = () => {
  palletBlack.classList.add('selected');
};

function addColorEvent(event) {
  const pixel = event.target;
  const selected = document.querySelector('.selected');
  pixel.style.backgroundColor = selected.style.backgroundColor;
}

function createPixelsLines(line, value) {
  for (let index = 1; index <= value; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.addEventListener('click', addColorEvent);
    line.appendChild(pixel);
  }
}

function createLine(value) {
  containerPixels.innerHTML = '';
  for (let index = 1; index <= value; index += 1) {
    const div = document.createElement('div');
    div.className = `line line${index}`;
    createPixelsLines(div, value);
    containerPixels.appendChild(div);
  }
}

function changeSelected(event) {
  for (let index = 0; index < palletSelectors.length; index += 1) {
    palletSelectors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function clearPixels() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function verifyInput(inputValue) {
  if (inputValue < 5) {
    createLine(5);
  } else if (inputValue > 50) {
    createLine(50);
  } else {
    createLine(inputValue);
  }
}

function generateNPixels() {
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    verifyInput(input.value);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}

function applyColorPalet() {
  palletSelectors[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let index = 1; index < palletSelectors.length; index += 1) {
    palletSelectors[index].style.backgroundColor = generateRandomColor();
  }
}

for (let index = 0; index < palletSelectors.length; index += 1) {
  palletSelectors[index].addEventListener('click', changeSelected);
}

buttonClear.addEventListener('click', clearPixels);
button.addEventListener('click', generateNPixels);

applyColorPalet();
createLine(5);