# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
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

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/multistepformscreenshot.jpeg)


### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/multistep-form-FydP-WVaI9)
- Live Site URL: [Add live site URL here](https://multi-step-form-victory.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS 
- Flexbox
- Mobile-first workflow
- Gulp
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned
I learn't alot about JS event handlers and some crazy DOM manipulations

like this code I used to render prices on add-ons on the finishing page (there's more to it this is just a snippet haha)
```js
let updateAddOnPriceUI = () => {
    let selectedAdOnsIndexs = addOnsQuery.multiIndexOf(addOnsQuery, true)
    let html = ``

    for (let i = 0; i < selectedAdOnsIndexs.length; i++) {
        if (yearlySelected) {
            html += `<p>+$${addOnsYearly[selectedAdOnsIndexs[i]]}/yr</p>
            `
            allPrices.push(addOnsYearly[selectedAdOnsIndexs[i]])
        } else {
            html += `<p>+$${addOnsMonthly[selectedAdOnsIndexs[i]]}/mo</p>
            `
            allPrices.push(addOnsMonthly[selectedAdOnsIndexs[i]])
        }
    }

    return html
}

```


### Continued development

I want to learn other ways I can write code to be more short and more readable at the same time too


### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - Used it so much and it helped me see that I can create an 'Array.protoype custom function' as I saw from someone. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [@Nnadivictory25](https://www.frontendmentor.io/profile/Nnadivictory25)
- Twitter - [@nnvictory001](https://www.twitter.com/nnvictory001)


## Acknowledgments

I want thank me for not giving up when I meet bugs :)

