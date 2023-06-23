let typed = document.querySelector('.typed');
let text = 'human';
let letterIndex = 0;
 function typeWriter() {
  if (letterIndex < text.length) {
    typed.textContent += text.charAt(letterIndex);
    typed.style.color = getRandomColor();
    letterIndex++;
    setTimeout(typeWriter, 100);
  }
}
 function getRandomColor() {
  let colors = ['#00FFFF', '#0000FF'];
  return colors[Math.floor(Math.random() * colors.length)];
}
 typeWriter();