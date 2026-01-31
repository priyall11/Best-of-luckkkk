const envelope = document.getElementById('envelope');
const text1 = document.getElementById('text-page1');
const text2 = document.getElementById('text-page2');

envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b30000', '#d4af37', '#ffffff']
        });
    } else {
        if (!text1.classList.contains('hidden')) {
            text1.classList.add('hidden');
            text2.classList.remove('hidden');
        }
    }
});
