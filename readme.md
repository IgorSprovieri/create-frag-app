# Frag Components

A simple and accessible library to create stylized and reusable web components

## Creating New Frag Components App

```
npx create-frag-app my-app
```

## Dependencies

- Node.js ([nodejs.org/en](https://nodejs.org/en))

## Example

```js
export class button {
  props = ["click"];
  style = ["./components/button/style.css"];

  html(props) {
    const { click, children } = props;

    return `<button onclick="${click}"›S{children}</button>`;
  }
}
```

```html
<script>
  const clickButton = () => {
    console.log("Hello!");
  };
</script>
<body>
  <app-button click="clickButton()">Click Me</app-button>
</body>

<!-- // On click app-button print => Hello! -->
```

On this example, you can create a stylized custom button and use on html how you want

- You can create a script() method to add a script on page and use on your components
- You can use frag components insides other frag component
- You can costumize the frag component using name or id variables inside the class

## Adding Frag Components on a Page

Add the script tag below:

```html
<script type="module">
  import { addFragComponents, createFragComponents } from "./frag-components/index.js"
  import { button, title } from ". /components/index.js";

  const components = [new button(), new title()];
  addFragComponents (components);
  createFragComponents ();
<script>
```

You can import the components classes and add on array inside the addFragComponents method

## Using Frag Router

Frag Router is a simple library to route html pages and others files of your project

### Adding New Page

To add new page you need to create html file inside the pages folder

### Referencing files

```js
// To refer a file inside node_modules
import { createFragComponents } from "./frag-components/index.js";

// To refer a file inside public
<img src="./image.svg" alt="My Image" />;

// To refer a file inside sc
import { button, title } from "./components/index.js";

// To open other page
window.open("./page", "_self");
```

- To refer a file you need to use './' with the absolute path
- Node_modules, src and public folder are roots
- You can use './page' to open other page

## Getting Element Inside The Component

```js
export class screen {
  id = "screen-id";
  props = [];
  style = [". /screens/screen/style.css"];

  script() {
    window.onload = (event) => {
      const host = document.getElementById("screen-id");
      const shadowRoot = host.shadowRoot;
      const myTitle = shadowRoot.getElementById("my-title-id");
      myTitle.setAttribute("text", "Frag Components");
    };
    return "screen-script"; // Unique script id is required
  }

  html(props) {
    return `<div class="main-containen">
              <app-title id="my-title-id"/>
            <div>`;
  }
}
```

## Getting Started

1. After create your frag-components app, install the dependencies:

```
npm install
```

2. Start to route your project:

```
npm run start
```

3. Open the app on your browser:

```
http://localhost:3333/
```

## Author

<img src="https://media.licdn.com/dms/image/D4D03AQFdLhogHwQVog/profile-displayphoto-shrink_800_800/0/1672976913935?e=1693440000&v=beta&t=ZtIw0X-jQboA_VYpGb-0zdj1Bqc95Q68VS3dv-JL2sw" width="22%">

### _Igor Sprovieri Pereira_

In 2013 I learned to programming games how as a hobbie, in 2020 I started to work on this area, I did some freelancers, opened my game studio and I was a writter for over a year on site crieseusjogos.com. In 2022 I decided to go a web developer professional and today I am fullstack with react and node
