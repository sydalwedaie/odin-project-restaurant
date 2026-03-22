const context = import.meta.webpackContext("./img");
const html = String.raw;

function generateSubMenuHtml(subMenu) {
  return subMenu
    .map((item) => {
      const imgPath = `./${item.id}.jpg`;
      return html`
        <div class="menu-item">
          <img src="${context(imgPath)}" />
          <h2>${item.name}</h2>
          <h3>$${item.price}</h3>
          <p>${item.description}</p>
        </div>
      `;
    })
    .join("");
}

export default function renderMenuPage(menu) {
  // Get all available course types
  const courses = [];
  menu.forEach((item) => {
    if (!courses.includes(item.course)) courses.push(item.course);
  });

  // Create categorized menu html
  const menuHtml = courses
    .map((course) => {
      const subMenu = menu.filter((item) => item.course === course);
      return html`
        <h1>${course}</h1>
        ${generateSubMenuHtml(subMenu)}
      `;
    })
    .join("");

  return html`
    <section class="hero alt menu">
      <div class="logo">Odin Restaurant</div>
      <h1>A few highlights from our menu</h1>
      <p>
        We cater for all dietary requirements, but here’s a glimpse at some of
        our diner’s favourites. Our menu is revamped every season.
      </p>

      <nav>
        <button class="btn-home">Home</button>
        <button class="btn-book">Book</button>
      </nav>
    </section>
    <section class="menu-container">${menuHtml}</section>
  `;
}
