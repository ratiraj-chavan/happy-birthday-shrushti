document.addEventListener("DOMContentLoaded", () => {
  // Create floating hearts animation
 // script.js

function createHearts() {
  const heartsContainer = document.querySelector(".hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random horizontal position
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";

    // Random size
    const size = Math.random() * 15 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Random opacity and color
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Animation
    const duration = Math.random() * 6 + 4;
    heart.style.animation = `heartFloat ${duration}s ease-in forwards`;

    // Append and clean up
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }, 300);
}

// Run on load
window.onload = createHearts;
  

  // Create confetti effect
  function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container")
    const colors = ["#ff1493", "#ff69b4", "#ffb6c1", "#ffc0cb", "#ffffff", "#ffcce6"]

    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement("div")
      confetti.classList.add("confetti")

      // Random position
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.top = -Math.random() * 40 + "px"

      // Random color
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      // Random shape
      const shapes = ["circle", "square", "triangle"]
      const shape = shapes[Math.floor(Math.random() * shapes.length)]

      if (shape === "circle") {
        confetti.style.borderRadius = "50%"
      } else if (shape === "triangle") {
        confetti.style.width = "0"
        confetti.style.height = "0"
        confetti.style.backgroundColor = "transparent"
        confetti.style.borderLeft = "5px solid transparent"
        confetti.style.borderRight = "5px solid transparent"
        confetti.style.borderBottom = "10px solid " + colors[Math.floor(Math.random() * colors.length)]
      }

      // Random size
      const size = Math.random() * 10 + 5
      confetti.style.width = size + "px"
      confetti.style.height = size + "px"

      // Animation
      const animationDuration = Math.random() * 3 + 2
      confetti.style.animation = `fall ${animationDuration}s linear forwards`
      confetti.style.animationDelay = Math.random() * 5 + "s"

      // Add to container
      confettiContainer.appendChild(confetti)

      // Add falling animation
      confetti.animate(
        [
          { transform: "translateY(0) rotate(0)", opacity: 1 },
          { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0.3 },
        ],
        {
          duration: Math.random() * 3000 + 3000,
          iterations: Number.POSITIVE_INFINITY,
        },
      )

      // Add swinging animation
      confetti.animate(
        [
          { transform: `translateX(-5px) rotate(${Math.random() * 15}deg)` },
          { transform: `translateX(5px) rotate(${Math.random() * -15}deg)` },
        ],
        {
          duration: Math.random() * 2000 + 1000,
          iterations: Number.POSITIVE_INFINITY,
          direction: "alternate",
        },
      )
    }
  }
})
