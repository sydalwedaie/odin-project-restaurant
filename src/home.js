import locallySourcedMobile from "./img/locally-sourced-mobile@2x.jpg";
import locallySourcedTablet from "./img/locally-sourced-tablet@2x.jpg";
import locallySourcedDesktop from "./img/locally-sourced-desktop@2x.jpg";

import enjoyableMobile from "./img/enjoyable-place-mobile@2x.jpg";
import enjoyableTablet from "./img/enjoyable-place-tablet@2x.jpg";
import enjoyableDesktop from "./img/enjoyable-place-desktop@2x.jpg";

const html = String.raw;

const copyData = [
  {
    imgDesktop: locallySourcedDesktop,
    imgTablet: locallySourcedTablet,
    imgMobile: locallySourcedMobile,
    heading: "Enjoyable place for all the family",
    paragraph:
      " Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal. ",
  },
  {
    imgDesktop: enjoyableDesktop,
    imgTablet: enjoyableTablet,
    imgMobile: enjoyableMobile,
    heading: "Exquisite dining since 1989",
    paragraph:
      " Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse. ",
  },
];

function generateSectionPart({
  imgDesktop,
  imgTablet,
  imgMobile,
  heading,
  paragraph,
}) {
  return html`
    <div>
      <picture>
        <source srcset="${imgDesktop}" media="(min-width: 61rem)" />
        <source srcset="${imgTablet}" media="(min-width: 48rem)" />
        <img src="${imgMobile}" alt="image showing locally sourced food" />
      </picture>
      <h2>${heading}</h2>
      <p>${paragraph}</p>
    </div>
  `;
}

export default function renderHomePage() {
  return html`
    <section class="hero home">
      <div class="logo">Odin Restaurant</div>
      <h1>Exquisite dining since 1989</h1>
      <p>
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <nav>
        <button class="btn-menu">View Our Menu</button>
        <button class="btn-book">Book a Table</button>
      </nav>
    </section>
    <section class="description">
      ${generateSectionPart(copyData[0])} ${generateSectionPart(copyData[1])}
    </section>
  `;
}
