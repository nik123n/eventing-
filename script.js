// Button Click Navigation
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.style.transform = "scale(1.3)";
    btn.style.boxShadow = "0 0 40px #ff4fa8";

    setTimeout(() => {
        window.location.href = btn.dataset.href;
    }, 400);
});


// RANDOM FLOATING HEARTS GENERATOR
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 800);


// EXTRA HEART STYLE
const style = document.createElement("style");
style.innerHTML = `
.floating-heart {
    position: fixed;
    bottom: -20px;
    font-size: 1.8rem;
    animation: rise 6s linear infinite;
    opacity: 0.8;
}

@keyframes rise {
    from {
        transform: translateY(0) scale(1);
    }
    to {
        transform: translateY(-120vh) scale(1.6);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
