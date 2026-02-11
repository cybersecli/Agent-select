let selectedAgent = "";

setTimeout(() => {
  switchScreen("loadingScreen", "matchScreen");
}, 2000);

function switchScreen(hide, show) {
  document.getElementById(hide).classList.remove("active");
  document.getElementById(show).classList.add("active");
}

function startCountdown() {
  switchScreen("matchScreen", "agentScreen");

  let timeLeft = 10;
  const countdown = document.getElementById("countdown");
  countdown.innerText = "Match starting in " + timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.innerText = "Match starting in " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.innerText = "Lock in your agent.";
    }
  }, 1000);
}

function selectAgent(agent) {
  selectedAgent = agent;
  document.getElementById("output").innerText =
    agent + " selected.";
  document.getElementById("lockBtn").style.display = "inline-block";
}

function lockIn() {
  let message = "";

  switch (selectedAgent) {
    case "Jett":
      message = "Jett: Fast, fearless… and straight to my heart.";
      break;
    case "Sage":
      message = "Sage: I will protect this moment.";
      break;
    case "Phoenix":
      message = "Phoenix: Let’s light it up, love.";
      break;
    case "Viper":
      message = "Viper: You and me? Deadly combination.";
      break;
  }

  document.getElementById("output").innerHTML = `
    <p>${message}</p>
    <h2>FINAL OBJECTIVE</h2>
    <h3>Will you be my Valentine? ❤️</h3>
  `;

  document.getElementById("lockBtn").style.display = "none";
}
