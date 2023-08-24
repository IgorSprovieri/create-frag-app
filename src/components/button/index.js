export class button {
  props = ["click", "invert", "text"];
  style = ["./components/button/style.css"];

  html(props) {
    const { children, click, invert, text } = props;

    return `<button class="${
      invert === "true" ? "invert" : ""
    }" onclick="${click}">${text || children}</button>`;
  }
}
