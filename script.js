const envelope = document.getElementById('envelope');
const heartContainer = document.getElementById('heart-container');

// Falling hearts banane wala function
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '❤️';
    
    // Random position aur size (5-6px)
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    
    // Pink aur Red colors
    const colors = ['#ff69b4', '#ff1493', '#ff0000', '#b30000'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    heartContainer.appendChild(heart);
    
    // Animation khatam hone par heart delete karo (Memory saaf rakhne ke liye)
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Envelope click logic
envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Confetti burst
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b30000', '#d4af37', '#ffffff']
        });

        // Envelope khulne par falling hearts shuru karo
        setInterval(createHeart, 300);
    }
});
