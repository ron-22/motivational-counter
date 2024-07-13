document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.getElementById('counter');
    const button = document.getElementById('countButton');
    const messageElement = document.getElementById('message');

    const messages = [
        "Good job JoJo", "Proud of you hbb", "You’re rocking it", "You’re amazing",
        "Noone is like you ever", "love yourself you’re smart", "I love you Jojo",
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
            messageElement.textContent = "Wow you’re so close to your goal";
            confettiEffect();
        }
    });

    function confettiEffect() {
        alert("Confetti effect placeholder!");
    }
});
