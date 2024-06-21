let lol = document.getElementById("menu");
let submenu = document.getElementById("submenu");
let cross = document.getElementById("reverse");

let tl = gsap.timeline({ paused: true, reversed: true });


tl.to("#submenu", {
  opacity: 1,
  duration: 0.5,
  y: 0,
  onStart: () => {
    submenu.style.visibility = "visible";
    document.body.classList.add("no-scroll"); 
  },
}).from("#mini-ul a", {
  y: 200,
  duration: 0.1,
  stagger: 0.2,
  opacity: 0,
});


lol.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.restart();
  }
});


cross.addEventListener("click", () => {
  tl.reverse().then(() => {
    submenu.style.visibility = "hidden";
    document.body.classList.remove("no-scroll"); 
  });
});
