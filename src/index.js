import "./modern-normalize.css";
import "./reset.css";
import "./style.css";
import "./template.html";
import ogImage from "./assets/og-image.jpg";
import { menu } from "./data.js";
import renderHomePage from "./home.js";
import renderMenuPage from "./menu.js";
import renderBookPage, {
  handleNumPeopleClick,
  handleSubmitClick,
} from "./book.js";

const metaEl = document.querySelector("meta[name='og:image']");
console.log();
metaEl.content = ogImage.split("/")[3];

const contentEl = document.querySelector("#content");
contentEl.innerHTML = renderHomePage();

document.addEventListener("click", (e) => {
  const target = e.target.classList[0];
  if (target === "btn-home") {
    contentEl.innerHTML = renderHomePage();
  } else if (target === "btn-menu") {
    contentEl.innerHTML = renderMenuPage(menu);
  } else if (target === "btn-book") {
    contentEl.innerHTML = renderBookPage();
    handleNumPeopleClick();
    handleSubmitClick();
  } else {
    return;
  }
});
