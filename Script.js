const envelopeWrapper = document.querySelector('.envelope-wrapper');
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const page1 = document.querySelector('.page1'); // Select page1 for click
const turnPagePrompt = document.querySelector('.turn-page-prompt');

// Function to open the envelope and trigger confetti
envelopeWrapper.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        // Trigger confetti when envelope opens
        fireConfetti();
        
        // After envelope opens, make letter visible and slightly animate
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translate(-50%, -50%) translateY(-20px) rotateX(0deg)';
        }, 800); // Slightly less than envelope transition for smoother flow
    }
});

// Function to flip the letter page (click on page1 or prompt)
page1.addEventListener('click', (event) => {
    // Check if the click was directly on the prompt or anywhere else on page1
    if (event.target.classList.contains('turn-page-prompt') || event.target.classList.contains('page1')) {
        letter.classList.add('flipped');
    }
});


// Confetti function for celebratory effect
function fireConfetti() {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
