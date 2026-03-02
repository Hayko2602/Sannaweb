// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};
// SECTION 3 Scroll Reveal Animation
function revealOnScroll() {
  const revealItems = document.querySelectorAll('.sec3-title, .sec3-content');
  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    if (rect.top <= triggerPoint) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);