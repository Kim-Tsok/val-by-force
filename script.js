let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let yesSize = 16;
let firstChoice = null;

const webhookURL =
  "https://script.google.com/macros/s/AKfycbz7Wt6OfPeEgOucT9WtXRPnEUBNFuCZR9sly1tshzE6CQtYUQPCURPsk4-Hvi1CON8kIw/exec";

function sendNotification(choice) {
  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ choice: choice }),
  }).catch((err) => console.error("Failed to send data:", err));
}

yesBtn.addEventListener("click", () => sendNotification("Yes"));
noBtn.addEventListener("click", () => sendNotification("No"));

noBtn.addEventListener("click", function () {
  if (!firstChoice) {
    firstChoice = "No";
    sendNotification("No");
  }

  yesSize += 5;
  yesBtn.style.fontSize = yesSize + "px";

  if (yesSize >= 35) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", function () {
  if (!firstChoice) {
    firstChoice = "Yes";
    sendNotification("Yes");
  }

  if (firstChoice === "No") {
    document.body.innerHTML =
      '<h1 class="end">See you on valentine!❤️</br> But no gift for clicking no😂</h1>';
  } else {
    document.body.innerHTML = '<h1 class="end">See you on valentine!❤️</h1>';
  }
});
