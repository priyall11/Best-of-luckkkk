const envelope = document.getElementById('envelope');
const page = document.getElementById('letter-page');
const text1 = document.getElementById('text-page1');
const text2 = document.getElementById('text-page2');

envelope.addEventListener('click', () => {
    // 1. Agar envelope band hai, toh pehle usey kholo
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Sunder Confetti burst jab envelope khule
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b30000', '#d4af37', '#ffffff'] // Red, Gold, aur White colors
        });
    } 
    // 2. Agar envelope pehle se khula hai, toh page turn logic chalao
    else {
        // Pehle page ka text hide karo aur doosre ka show karo
        if (!text1.classList.contains('hidden')) {
            text1.classList.add('hidden');
            text2.classList.remove('hidden');
            
            // Halka sa Page Turn effect (vibe ke liye)
            page.style.transform = "rotateY(10deg)";
            setTimeout(() => {
                page.style.transform = "rotateY(0deg)";
            }, 300);
        }
    }
});
