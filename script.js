document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const button = document.getElementById('countButton');
    const messageElement = document.getElementById('message');

    const messages = [
        "Good job JoJo", "Proud of you hbb", "You’re rocking it", "You’re amazing",
        "No one is like you ever", "Love yourself, you’re smart", "I love you Jojo",
        "You’re so hardworking", "You’re a genius!!"
    ];

    let count = parseInt(localStorage.getItem('count')) || 0;
    counterElement.textContent = count;

    button.addEventListener('click', () => {
        count++;
        localStorage.setItem('count', count);
        counterElement.textContent = count;

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;

        if (count % 50 === 0) {
            messageElement.textContent = "Wow you’re so close to your goal!";
            confettiEffect();
        }
    });

    function confettiEffect() {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        const confettiSettings = { target: canvas, width: window.innerWidth, height: window.innerHeight };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    
        setTimeout(() => {
            confetti.clear(); // Stop the confetti after 5 seconds
            document.body.removeChild(canvas); // Remove the canvas after use
        }, 5000);
    }
    
});
