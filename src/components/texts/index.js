export class bigTitle {
  name = "big-title";
  props = ["color", "text"];
  style = ["./components/texts/style.css"];

  html(props) {
    const { children, text } = props;

    return `<h1>${text || children}</h1>`;
  }
}

export class title {
  props = ["color"];
  style = ["./components/texts/style.css"];

  html(props) {
    const { children, color } = props;

    return `<h2 class="${color}">${children}</h2>`;
  }
}
