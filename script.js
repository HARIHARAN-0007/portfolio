// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Parallax blob movement
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".blob1").style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

  document.querySelector(".blob2").style.transform =
    `translate(${-x * 40}px, ${-y * 40}px)`;
});
// Certificate Slider
const track = document.querySelector(".certificate-track");
const slides = document.querySelectorAll(".certificate-card");

let index = 0;
const totalSlides = slides.length;

// Manual Buttons
document.querySelector(".next").onclick = () => {
  moveSlide(1);
};

document.querySelector(".prev").onclick = () => {
  moveSlide(-1);
};

// Move Function
function moveSlide(direction) {
  index = (index + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${index * 100}%)`;
}

// 🔥 Auto Slide Every 5 Seconds
setInterval(() => {
  moveSlide(1);
}, 5000);
