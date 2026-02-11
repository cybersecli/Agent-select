let selectedAgent = "";

/* Auto move from loading to match found */
setTimeout(() => {
  switchScreen("loadingScreen", "matchScreen");
}, 2000);

function switchScreen(hide, show) {
  document.getElementById(hide).classList.remove("active");
  document.getElementById(show).classList.add("active");
}

/* Match Accept */
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

/* Agent Selection */
function selectAgent(agent) {
  selectedAgent = agent;
  document.getElementById("output").innerText =
    agent + " selected.";
  document.getElementById("lockBtn").style.display = "inline-block";
}

/* Final Proposal Screen */
function lockIn() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:black;
      color:white;
      text-align:center;
    ">
      <h1 style="font-size:50px;">MATCH MVP</h1>
      <h2>KIMIKO</h2>
      <p style="margin:20px;">Final Objective:</p>
      <h1>Will you be my Valentine? ❤️</h1>
      <button onclick="alert('Agent Locked In 💘')"
        style="margin-top:20px; padding:15px 30px; font-size:18px; background:#ff4655; border:none;">
        LOCK IN
      </button>
    </div>
  `;
}

/* Fake live ping */
setInterval(() => {
  const ping = document.getElementById("ping");
  const randomPing = Math.floor(Math.random() * 20) + 25;
  ping.innerText = randomPing + "ms";
}, 2000);
