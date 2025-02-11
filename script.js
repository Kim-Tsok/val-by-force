let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let yesSize = 16;
let switched = false; // To make sure switching happens only once

// Handle "No" button click
noBtn.addEventListener("click", function () {
  yesSize += 5;
  yesBtn.style.fontSize = yesSize + "px";

  // Switch positions when Yes gets big enough (only once)
  if (yesSize >= 40 && !switched) {
    switched = true;

    // Swap the button positions
    yesBtn.style.position = "absolute";
    noBtn.style.position = "absolute";

    let yesLeft = yesBtn.style.left;
    let noLeft = noBtn.style.left;

    yesBtn.style.left = noLeft;
    noBtn.style.left = yesLeft;

    // Reset No button size to default
    noBtn.style.fontSize = "16px";
  }
});

// Handle "Yes" button click
yesBtn.addEventListener("click", function () {
  document.body.innerHTML = "<h1>Yay! 🎉 See you on Valentine's! ❤️</h1>";
});
