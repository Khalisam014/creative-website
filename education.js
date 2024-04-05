//   Sama Khalid
//   03/26/2024
//   Section AD, Max Beard, Allan Tran

//   This file is in charge of all of the animation that is done for my
//   education file. It creates the the typing effect and is in charge of the
//   delay.

document.addEventListener('DOMContentLoaded', function() {
  const typingContainer = document.getElementById('typing-container');
  const welcomeContainer = document.getElementById('welcome-container');
  const welcomeTitle = document.getElementById('welcome-title');
  const outputDiv = document.getElementById('output');
  const outputPopup = document.getElementById('output-popup');
  const errorMessage = document.getElementById('error-message');

  welcomeTitle.style.display = 'block';
  welcomeTitle.style.animation = 'typingContent 18s linear forwards, blink-caret .75s step-end infinite';

  setTimeout(() => {
    welcomeTitle.style.animation = 'fadeOut 4s ease forwards';
    welcomeContainer.style.display = 'none';
    typingContainer.style.display = 'block';

    const lines = document.querySelectorAll('#typing-container > div:not(#output)');
    let delay = 0;

    lines.forEach((line) => {
      setTimeout(() => {
        line.style.display = 'block';
        const stepCount = line.textContent.length;
        line.style.animation = `typingContent 1s steps(${stepCount}, end) forwards, blink-caret .75s step-end infinite`;
      }, delay);
      delay += 1000;
    });

    setTimeout(() => {
      outputDiv.style.display = 'block';
      outputDiv.style.animation = 'none';
      outputDiv.style.borderRight = 'none';

      setTimeout(() => {
        typingContainer.style.display = 'none';
        outputDiv.style.display = 'none';
        errorMessage.style.display = 'block';

      }, delay + 2000);
    }, delay);
  }, 4000);
});
