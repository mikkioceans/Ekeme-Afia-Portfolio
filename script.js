// Year in footer
document.getElementById("y").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const list = document.getElementById("nav-list");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Smooth-scroll (native fallback)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    list?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
