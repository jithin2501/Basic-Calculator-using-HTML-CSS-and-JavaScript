const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9+\-*/.]/)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
