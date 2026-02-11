let selectedAgent = "";

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
      message = "Phoenix: Alright love, let’s light it up.";
      break;
    case "Viper":
      message = "Viper: You and me? Deadly combination.";
      break;
  }

  document.getElementById("output").innerHTML = `
    <p>${message}</p>
    <h2>MISSION OBJECTIVE</h2>
    <h3>Will you be my Valentine? ❤️</h3>
  `;

  document.getElementById("lockBtn").style.display = "none";
}
