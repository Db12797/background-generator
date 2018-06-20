const values = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('background');

const colorPicker = (e) => {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  values.textContent = body.style.background + ";";
}

color1.addEventListener('input', colorPicker);

color2.addEventListener('input', colorPicker);
