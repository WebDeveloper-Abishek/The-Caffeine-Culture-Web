export function setupNavigation() {
  const nav = document.querySelector(".site-navbar");
  const toggle = nav?.querySelector(".nav-toggle");
  const navLinks = nav?.querySelector(".site-navbar__links");
  if (!nav || !toggle || !navLinks) return;

  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Mark active link
  navLinks.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && location.pathname.endsWith(href)) {
      link.classList.add("is-active");
    }
  });
}
