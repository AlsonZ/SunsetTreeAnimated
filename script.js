/* global document */
/* global Power2 */
/* eslint-env es6 */

const maindiv = document.querySelector('.maindiv');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const navi = document.querySelector('.navi');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(maindiv, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(maindiv, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.5")
.fromTo(logo, 0.5, {opacity: "0", x: -30}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(navi, 0.5, {opacity: "0", x: 30}, {opacity: "1", x: "0"}, "-=0.5")
.fromTo(headline, 1, {opacity: "-1"}, {opacity: "1"}, "-=2.25")
;
