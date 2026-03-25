const html = String.raw;

function renderHeader(page, { heading, paragraph }) {
  const btnHome =
    page === "home" ? "" : '<button class="btn-home">Home</button>';
  const btnMenu =
    page === "menu" ? "" : '<button class="btn-menu">View Our Menu</button>';
  const btnBook =
    page === "book" ? "" : '<button class="btn-book">Book a Table</button>';

  return html`
    <header class="hero ${page === "home" ? "home" : page + " alt"}">
      <div class="wrapper">
        <div class="logo">oDine</div>
        <h1>${heading}</h1>
        <p>${paragraph}</p>
        <nav>${btnHome} ${btnMenu} ${btnBook}</nav>
      </div>
    </header>
  `;
}

export { renderHeader };
