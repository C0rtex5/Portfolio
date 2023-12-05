document.addEventListener("DOMContentLoaded", function () {
  const textToType = "Cortex";
  const textElement = document.getElementById("typing-text");
  let displayedText = "";
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      displayedText += textToType.charAt(index);
      textElement.textContent = displayedText;
      index++;
      setTimeout(typeText, 150); // Typing speed (adjust as needed)
    }
  }

  typeText();
});