# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./Screenshot Folder)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

```html
   <div className="totaler">
      <p>Total</p>
      <span>/ person</span>
    </div>
```
```css
  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all .2s ease-in;
  background-color: hsl(185, 41%, 84%);
}
```
```js
    const handleClick = () => {

    const round = ((bill * (percent/100))/people).toFixed(1);
    const round2 = (bill * (percent/100)).toFixed(2);

    setTip(round);
    setTotal(round2);

    if (people === 0) {
      for (const cam of cant) {
        cam.classList.add('can');
      }
    peeps.classList.add('pe')

    setTip('0.00');
    setTotal('0.00');

    } else{
      for (const cam of cant) {
        cam.classList.remove('can');
      }
    peeps.classList.remove('pe');     
    }
  }
```

### Continued development

I'd love to continue working with react js framework

### Useful resources

Youtube is basically a university

## Author
- Frontend Mentor - [@Wizzy-05](https://www.frontendmentor.io/profile/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/home)


## Acknowledgments
A very big thanks to harry

