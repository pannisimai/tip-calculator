// calculate tip
function calculate() {
  const money = document.querySelector("input").value;
  const quality = document.querySelector("select").value;
  const rate = qualityOptions(quality);
  const moneyNumber = Number(money);
  const ultimateTip = percentage(moneyNumber, rate);
  document.getElementById(
    "amount"
  ).innerHTML = `The <b>Amount</b> is ${moneyNumber} €`;
  document.getElementById(
    "tip"
  ).innerHTML = `The <b>Tip</b> is ${ultimateTip} €`;
  document.getElementById(
    "total"
  ).innerHTML = `The <b>Total</b> is ${moneyNumber + ultimateTip} € `;
}

function percentage(moneyNumber, rate) {
  const tip = moneyNumber * rate;
  return tip;
}

function qualityOptions(quality) {
  switch (quality) {
    case "slevel":
      alert("Choose your level of satisfaction!");
    case "excellent":
      return 0.3;
      break;
    case "verygood":
      return 0.3;
      break;
    case "good":
      return 0.2;
      break;
    case "ok":
      return 0.12;
      break;
    case "bad":
      return 0.05;
      break;
    case "verybad":
      return 0.0;
      break;
  }
}

// tranform calc to result and back

function button1() {
  let buttonClick = document.getElementById("calcbutton");
  buttonClick.addEventListener("click", function() {
    document.getElementById("calc").style.display = "none";
    document.getElementById("result").style.display = "block";
    calculate();
  });
}

function button2() {
  let buttonClick2 = document.getElementById("newTip");
  buttonClick2.addEventListener("click", function() {
    document.getElementById("calc").style.display = "block";
    document.getElementById("result").style.display = "none";
  });
}

function init() {
  document.getElementById("calc").style.display = "block";
  document.getElementById("result").style.display = "none";
  button1();
  button2();
}

init();
