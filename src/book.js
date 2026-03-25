import { renderHeader } from "./components.js";
import { headerCopy } from "./data.js";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";

const html = String.raw;
const $ = (selector) => document.querySelector(selector);

export function handleNumPeopleClick() {
  const counterEl = $(".counter");
  const halboosEl = $(".halboos");
  const incBtn = $(".inc");
  const decBtn = $(".dec");
  let counter = 1;

  const updateDisplay = () => {
    counterEl.textContent = counter;
    halboosEl.textContent = counter === 1 ? "person" : "people";
  };

  incBtn.addEventListener("click", (e) => {
    e.preventDefault();
    counter++;
    updateDisplay();
  });
  decBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (counter > 1) counter--;
    updateDisplay();
  });
}

export function handleSubmitClick() {
  const formEl = $("form");
  const submitBtn = $(".submit");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formEl.style.height = formEl.clientHeight + "px";
    formEl.style.width = formEl.clientWidth + "px";
    setTimeout(() => {
      formEl.innerHTML = `
      <p>We received your request. Please check your email confirmation.</p>
      <p>Thank you.</p>
    `;
    }, 500);
  });
}

export default function renderBookPage() {
  return html`
    ${renderHeader("book", headerCopy.book)}
    <section class="body-container body-book">
      <form class="drop-shadow">
        <div class="guest-info">
          <input type="text" id="name" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div class="book-date">
          <label for="date">Pick a date</label>

          <input type="date" id="date" />
        </div>
        <div class="book-time">
          <label for="time">Pick a time</label>
          <input type="time" id="time" />
        </div>
        <div class="book-number">
          <div>
            <span class="counter">1</span> <span class="halboos">person</span>
          </div>
          <button class="inc">
            <img src="${iconPlus}" alt="plus icon" />
          </button>
          <button class="dec">
            <img src="${iconMinus}" alt="minus icon" />
          </button>
        </div>
        <button class="submit">Make Reservation</button>
      </form>
    </section>
  `;
}
