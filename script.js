let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let yesSize = 16;
let firstChoice = null;

yesBtn.addEventListener("click", () => sendNotification("Yes"));
noBtn.addEventListener("click", () => sendNotification("No"));

noBtn.addEventListener("click", function () {
  if (!firstChoice) {
    firstChoice = "No";
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
  }

  if (firstChoice === "No") {
    document.body.innerHTML =
      "<h1 class="end">Sure</br> I'll just ignore the fact that your first answer was no😂</h1>";
  } else {
    document.body.innerHTML = '<h1 class="end">Yippee</h1>';
  }
});
