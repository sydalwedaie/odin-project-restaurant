import "./modern-normalize.css";
import "./reset.css";
import "./style.css";
import "./template.html";
import { menu } from "./data.js";
import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderBookPage from "./book.js";

const contentEl = document.querySelector("#content");
contentEl.innerHTML = renderHomePage();

document.addEventListener("click", (e) => {
  const target = e.target.classList[0];
  if (target === "btn-home") {
    contentEl.innerHTML = renderHomePage();
  } else if (target === "btn-menu") {
    const menuHtml = renderMenuPage(menu);
    contentEl.innerHTML = menuHtml;
  } else if (target === "btn-book") {
    contentEl.innerHTML = renderBookPage();
  }
});
