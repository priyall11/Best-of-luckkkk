const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
    // Sirf class toggle hogi, baki transition CSS handle karega
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Confetti effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b30000', '#d4af37', '#ffffff']
        });
    } else {
        // Dobara click karne par band ho jaye (Optional)
        envelope.classList.remove('open');
    }
});
