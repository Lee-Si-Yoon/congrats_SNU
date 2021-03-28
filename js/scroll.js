const cut1 = document.querySelector(".scene__certificate");
const video1 = cut1.querySelector("video");
const cut1Text = cut1.querySelector(".scene__certificate__text");
const cut3 = document.querySelector(".scene__money");
const video3 = cut3.querySelector("video");
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Text Animation
const textAnim = TweenMax.fromTo(cut1Text, 2, { opacity: 1 }, { opacity: .5});

//MAINPAGE
const scene1 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: cut1,
  triggerHook: 0,
})
  //.addIndicators()
  .setPin(cut1)
  .setTween(textAnim)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: cut3,
  triggerHook: 0,
})
  //.addIndicators()
  .setPin(cut3)
  .addTo(controller);

/*
const scene1Text = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: cut1,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);
*/
//SUBPAGE

//Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene1.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video1.currentTime = delay;
  video3.currentTime = delay - video1.currentTime;
  //console.log(scrollpos, delay)
  // 1000 / 30
}, 33.3);

