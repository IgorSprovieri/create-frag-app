export class counterscreen {
  id = "counter-screen";
  name = "counter-screen";
  props = ["sec", "min", "hr"];
  style = ["./screens/counter/style.css"];

  script() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let play = false;

    window.onload = (event) => {
      setInterval(() => {
        if (play === true) {
          count();
          render();
        }
      }, 1000);
    };

    const count = () => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    };

    const render = () => {
      const host = document.getElementById("counter-screen");
      const shadowRoot = host.shadowRoot;
      const counter = shadowRoot.getElementById("counter");

      counter.setAttribute(
        "text",
        format(seconds) + ":" + format(minutes) + ":" + format(hours)
      );
    };

    const format = (num) => {
      if (Number(num) < 10) {
        num = "0" + num;
      }

      return num;
    };

    const playCounter = () => {
      const host = document.getElementById("counter-screen");
      const shadowRoot = host.shadowRoot;
      const button = shadowRoot.getElementById("play-button");

      play = true;
      button.setAttribute("onclick", "pauseCounter()");
      button.setAttribute("text", "Pause");
    };

    const pauseCounter = () => {
      const host = document.getElementById("counter-screen");
      const shadowRoot = host.shadowRoot;
      const button = shadowRoot.getElementById("play-button");

      play = false;
      button.setAttribute("onclick", "playCounter()");
      button.setAttribute("text", "Play");
    };

    const restartCounter = () => {
      seconds = 0;
      minutes = 0;
      hours = 0;
      render();
    };

    return "counterscreen-script";
  }

  html(props) {
    return `
      <div class="main-container">
        <app-big-title id="counter">00:00:00</app-big-title>
        <div class='space-between'></div>
        <div class="buttons-container">
          <app-button id='play-button' onclick='playCounter()'>Play</app-button>
          <app-button onclick='restartCounter()' invert="true">Restart</app-button>
        </div>
      </div>`;
  }
}
