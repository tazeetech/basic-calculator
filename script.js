let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (!isFinite(result)) {
      throw new Error("Math Error");
    }
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Optional: Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});