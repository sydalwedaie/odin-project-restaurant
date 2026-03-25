import locallySourcedMobile from "./img/locally-sourced-mobile@2x.jpg";
import locallySourcedTablet from "./img/locally-sourced-tablet@2x.jpg";
import locallySourcedDesktop from "./img/locally-sourced-desktop@2x.jpg";

import enjoyableMobile from "./img/enjoyable-place-mobile@2x.jpg";
import enjoyableTablet from "./img/enjoyable-place-tablet@2x.jpg";
import enjoyableDesktop from "./img/enjoyable-place-desktop@2x.jpg";

import { renderHeader } from "./components.js";
import { headerCopy } from "./data.js";
import { bodyCopy } from "./data.js";

const html = String.raw;

function generateSectionPart(
  imgDesktop,
  imgTablet,
  imgMobile,
  { heading, paragraph }
) {
  return html`
    <article>
      <picture>
        <source srcset="${imgDesktop}" media="(min-width: 61rem)" />
        <source srcset="${imgTablet}" media="(min-width: 48rem)" />
        <img
          src="${imgMobile}"
          class="drop-shadow"
          alt="image showing locally sourced food"
        />
      </picture>
      <div class="caption">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
      </div>
    </article>
  `;
}

export default function renderHomePage() {
  return html`
    ${renderHeader("home", headerCopy.home)}
    <section class="body-container body-home">
      ${generateSectionPart(
        locallySourcedDesktop,
        locallySourcedTablet,
        locallySourcedMobile,
        bodyCopy.home[0]
      )}
      ${generateSectionPart(
        enjoyableDesktop,
        enjoyableTablet,
        enjoyableMobile,
        bodyCopy.home[1]
      )}
    </section>
  `;
}
