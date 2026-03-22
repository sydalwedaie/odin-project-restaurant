const html = String.raw;

export default function renderBookPage() {
  return html`
    <section class="hero alt">
      <div class="logo">Odin Restaurant</div>
      <h1>Reservations</h1>
      <p>
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </p>
      <nav>
        <button class="btn-home">Home</button>
        <button class="btn-menu">View Our Menu</button>
      </nav>
    </section>
    <section>
      <form action="">
        <label for="name">Name</label>
        <input type="text" id="name" />
      </form>
    </section>
  `;
}
