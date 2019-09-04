// Your code goes here

//mouseenter and mouseleave image border
const images = document.querySelectorAll("img");

images.forEach(el =>
  el.addEventListener("mouseenter", e => {
    mouseEnterBorder(el);
  })
);

function mouseEnterBorder(el) {
  el.style.cssText = "border: 2px solid yellow; box-shadow: 5px 5px 3px grey";
}

images.forEach(el =>
  el.addEventListener("mouseleave", e => {
    mouseLeaveBorder(el);
  })
);

function mouseLeaveBorder(el) {
  el.style.cssText = "border: none";
}

//Wheel Zoom

const containerElms = document.querySelectorAll(".container > *");
let scale = 1;

containerElms.forEach(el => (el.onwheel = zoom));

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  event.toElement.style.transform = `scale(${scale})`;
}

//Reset scale on keypress of R
const allElms = document.querySelectorAll("*");
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("keypress", e => {
  if (e.code == "KeyR") {
    allElms.forEach(el => {
      el.style.transform = `scale(1)`;
    });
  }
});

//Hover Links to Change background
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(el =>
  el.addEventListener("mouseover", e => {
    e.target.style.background = "green";
  })
);

navLinks.forEach(el =>
  el.addEventListener("mouseout", e => {
    e.target.style.background = "white";
  })
);

//Copy alert of paragraphs
const pElms = document.querySelectorAll("p");

function copyAlert(e) {
  e.preventDefault();
  e.clipboardData.setData("text/plain", "Shame on me for plagiarizing");
  alert("No plagiarizing");
}

pElms.forEach(el => {
  el.addEventListener("copy", copyAlert);
});

//Dragend Alert
const headerImg = document.querySelector("#headerimg");
headerImg.addEventListener("dragend", e => {
  alert(`Thanks for letting go of ${e.target.src}`);
});

//Rotate images on click

images.forEach(el => {
  el.addEventListener("click", e => {
    rotateAnimation = TweenMax.fromTo(
      el,
      2,
      { rotationY: 0 },
      { rotationY: 180 }
    );
  });
});

//Blink h2 Headers

const contentHeaders = document.querySelectorAll("h2");
contentHeaders.forEach(el => {
  el.addEventListener("dblclick", e => {
    blinkAnimation = TweenMax.fromTo(
      el,
      0.5,
      { opacity: 1 },
      { opacity: 0, repeat: -1 }
    );
  });
});
