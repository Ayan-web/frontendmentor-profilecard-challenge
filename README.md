# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./Screenshot.png)





### Links

- Solution URL: [Github](https://github.com/Ayan-web/frontendmentor-profilecard-challenge)
- Live Site URL: [Github pages]()https://ayan-web.github.io/frontendmentor-profilecard-challenge/

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

I learned a lot of stuffs like adding two svg background and position them, inline css in react, load font from local file, media query for smaller devices and many more 


```css
@font-face { /*load font from local*/
  font-family: 'KumbhSans';
  src: url(/path/to/file);
}
@media (max-width:375px) { /* media query for divice less than 375px */
body{
  background-position: -700px -700px,200px 200px;
  }
}
```

```jsx
<div style={{display:'grid',placeItem:'center'}}>
...
<div>
}
```



### Continued development

I would like to explore more on css grid and flex box, as there is more of them to know 

### Useful resources

- [css-trick.com](https://css-tricks.com) - this is the best site to learn css for anyone, I learned flexbox, grid, svg background to name a few.
- [stackoverflow](https://stackoverflow.com/) - You often get stuck when learning, stackover flow is your bestfriend.
- [MDNdoc](https://developer.mozilla.org) - this is a great place for reference.


## Author

- Frontend Mentor - [@Ayan-web](https://www.frontendmentor.io/profile/Ayan-web)
- Twitter - [@ayanmuk81420475](https://twitter.com/ayanmuk81420475)

