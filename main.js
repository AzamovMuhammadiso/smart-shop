let box = document.getElementById("box");
let message = document.getElementById("message");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let result = document.getElementById("result");
let timer;
let startTime;
startBtn.addEventListener("click", function () {
  box.style.backgroundColor = "red";
  message.innerText = "Bosing!!!";

  result.innerText = "";
  startBtn.disabled = true;
  stopBtn.disabled = true;

  timer = setTimeout(
    () => {
      stopBtn.disabled = false;
      box.style.backgroundColor = "green";
      startTime = Date.now();
    },
    Math.random() * 3000 + 1000,
  );
});
stopBtn.addEventListener("click", function () {
  clearTimeout(timer);
  let reactionTime = Date.now() - startTime;
  result.innerText = reactionTime + "ms";
  box.style.backgroundColor = "blue";
  message.innerText = "O'yinni boshlash";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
