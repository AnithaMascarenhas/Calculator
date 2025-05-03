const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const toggle = document.getElementById("toggle");
let currentInput = "";
let darkMode = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.textContent = currentInput || "0";
  });
});

// Theme toggle
toggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark");
  toggle.textContent = darkMode ? "☀️" : "🌙";
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.=EnterBackspace";
  if (!validKeys.includes(e.key)) return;

  if (e.key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else {
    currentInput += e.key;
  }

  display.textContent = currentInput || "0";
});
