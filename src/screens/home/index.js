export class homescreen {
  name = "home-screen";
  props = [];
  style = ["./screens/home/style.css"];

  html(props) {
    return `
      <div class="main-container">
        <img src="./icon.svg" alt="Frag Components Icon" height="220px" />
          <div class="title-container">
            <app-title color="gray">Frag</app-title>
            <app-title color="green">Components</app-title>
          </div>
        <app-button click="window.open('./counter', '_self')">Start</app-button>
      </div>`;
  }
}
