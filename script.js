const roastQuotes = [
  "🐌 You think you're fast? A snail just challenged you… and won.",
  "🐢 A turtle with a limp has more energy than your chat game.",
  "🙈 If brains were bananas, even a monkey would outsmart you.",
  "🐴 A donkey kicks harder than your comebacks. Sit down. 💥",
  "🦥 You're not lazy, you're just in competition with sloths… and losing. 😴",
  "🐌 Snails move faster than your pickup lines land. Try again.",
  "🐟 Even a goldfish remembers better roasts than you. 🧠🔁",
  "🪨 If evolution were a race, you'd still be a rock. 📉",
  "🐢 You talk so slow, even turtles tell you to hurry up. 🐇➡️🐢",
  "🙉 Monkeys called — they want their sense of humour back. 🤡"
];

let roastInterval;

function showRandomRoast() {
  const quote = roastQuotes[Math.floor(Math.random() * roastQuotes.length)];
  document.getElementById("roast-quote").innerText = quote;
}

function startRoasting() {
  showRandomRoast(); // Show one immediately
  roastInterval = setInterval(showRandomRoast, 5000);
}

function stopRoasting() {
  clearInterval(roastInterval);
}
