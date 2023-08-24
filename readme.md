# Frag Components

A simple and accessible library to create stylized and reusable web components

## Creating New Frag Components App

```
npx create-frag-app my-app
```

## Dependencies

- Node.js ([nodejs.org/en](https://nodejs.org/en))
- Frag Router ([www.npmjs.com/package/frag-router](https://www.npmjs.com/package/frag-router))

## Example

![Frag Components Example](./public/example.svg)

On this example, you can create a stylized custom button and use on html how you want

- You can create a script() method to add a script on page and use on your components
- You can use frag components insides other frag component
- You can costumize the frag component using name or id variables inside the class

## Adding Frag Components on a Page

Add the script tag below:

![Adding Frag Components to a page](./public/add-components.svg)

You can import the components classes and add on array inside the addFragComponents method

## Using Frag Router

Frag Router is a simple library to route html pages and others files of your project

### Adding New Page

To add new page you need to create html file inside the pages folder

### Referencing files

![Frag Router Examples](./public/frag-router-examples.svg)

- To refer a file you need to use './' with the absolute path
- Node_modules, src and public folder are roots
- You can use './page' to open other page

## Getting Element Inside The Component

![Getting Element Inside The Component](./public/getting-element.svg)

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
