const values = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('background');
const button = document.getElementById('button');

const colorPicker = (e) => {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  values.textContent = body.style.background + ";";
}



const randColor = () => {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

const setRandomColor = () => {
  body.style.background = "linear-gradient(to right, " +
	randColor() + ", " + randColor() + ")";
	values.textContent = body.style.background + ";";
}


window.onload = setRandomColor();
color1.addEventListener('input', colorPicker);
color2.addEventListener('input', colorPicker);
button.addEventListener('click', setRandomColor);
