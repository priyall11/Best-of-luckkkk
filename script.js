const envelope = document.getElementById('envelope');
const text1 = document.getElementById('text-page1');
const text2 = document.getElementById('text-page2');

envelope.addEventListener('click', () => {
    // 1. Envelope band hai toh usey kholo
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Beautiful Confetti Burst
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b30000', '#d4af37', '#ffffff']
        });
    } 
    // 2. Agar khul gaya hai, toh page turn logic chalao
    else {
        if (text1 && !text1.classList.contains('hidden')) {
            text1.classList.add('hidden');
            text2.classList.remove('hidden');
        }
    }
});
