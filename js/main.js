import { setupNavigation } from "./components/header.js";

async function loadHtml(file, id) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadHtml("header.html", "header");
  setupNavigation();
  await loadHtml("footer.html", "footer");
});
