document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('no');

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth-100);
        const y = Math.random() * (window.innerHeight-100);

        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    document.getElementById('yes').addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.innerHTML = "<h1>Hehehe, I knew you love me! 💖 You're the sunshine in my life, and I'm so grateful for every moment we share. Alaaabuuuu</h1>";
    });
});
