
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Contact form demo
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  formStatus.textContent =
    "Your form is working! Connect an email service to receive messages.";

  contactForm.reset();
});

// Reveal sections while scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});

console.log("Sonam's Portfolio is running successfully!");
