const blocksDiv = document.querySelector(".blocks");
const blockDivs = document.querySelectorAll(".block");

blockDivs.forEach(el =>
  el.addEventListener("click", e => {
    blocksDiv.prepend(el);
  })
);

let holdingDown = {
  isHoldingDown: false,
  currentEvent: null
};

blockDivs.forEach(el =>
  el.addEventListener("mousedown", e => {
    holdingDown = {
      isHoldingDown: true,
      currentEvent: e.target
    };
  })
);

blockDivs.forEach(el =>
  el.addEventListener("mouseup", e => {
    holdingDown = { isHoldingDown: false, currentEvent: null };
  })
);

function updateMargin() {
  if (holdingDown.isHoldingDown === true) {
    if (
      parseInt(holdingDown.currentEvent.style.marginLeft) < 800 ||
      holdingDown.currentEvent.style.marginLeft == ""
    ) {
      holdingDown.currentEvent.style.marginLeft = `${(parseInt(
        holdingDown.currentEvent.style.marginLeft
      ) || 0) + 20}px`;
    }
  }

  blockDivs.forEach(block => {
    if (holdingDown.currentEvent == null) {
      if (parseInt(block.style.marginLeft) > 10) {
        block.style.marginLeft = `${parseInt(block.style.marginLeft) - 10}px`;
      }
    } else if (block.classList != holdingDown.currentEvent.classList) {
      if (
        (block.style.marginLeft = "" || parseInt(block.style.marginLeft) > 10)
      ) {
        block.style.marginLeft = `${parseInt(block.style.marginLeft) - 10}px`;
      }
    }
  });
}

setInterval(function() {
  updateMargin();
}, 200);
