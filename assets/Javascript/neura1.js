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
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 typeWriter();