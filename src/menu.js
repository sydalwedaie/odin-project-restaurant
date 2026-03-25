import { renderHeader } from "./components.js";
import { headerCopy } from "./data.js";

const context = import.meta.webpackContext("./img");
const html = String.raw;

function generateSubMenuHtml(subMenu) {
  return subMenu
    .map((item) => {
      const imgPath = `./${item.id}.jpg`;
      return html`
        <article class="item-container">
          <picture>
            <img src="${context(imgPath)}" class="drop-shadow" />
          </picture>
          <div class="caption">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function generateMenuHtml(menu) {
  // Get all available course types
  const courses = [];
  menu.forEach((item) => {
    if (!courses.includes(item.course)) courses.push(item.course);
  });

  // Create categorized menu html
  return courses
    .map((course) => {
      const subMenu = menu.filter((item) => item.course === course);
      return html`
        <section class="course-container">
          <h1>${course}s</h1>
          <div>${generateSubMenuHtml(subMenu)}</div>
        </section>
      `;
    })
    .join("");
}

export default function renderMenuPage(menu) {
  return html`
    ${renderHeader("menu", headerCopy.menu)}
    <section class="body-container body-menu">
      ${generateMenuHtml(menu)}
    </section>
  `;
}
