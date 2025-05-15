// Array of quotes with emojis
const roastQuotes = [
  // Donkey-Themed Roasts
  "Hold your horses—oh wait, you're a donkey 🐴. Connecting you soon!",
  "Donkey detected! 🐴 Searching for a fellow bray-inclined chatter...",
  "Our donkey-powered servers 🐴 are galloping to find you a match.",
  "If patience were a donkey 🐴, you'd be riding it right now.",
  "Donkey says: 'Chat partner loading... 🐴 please wait without kicking.'",

  // Monkey-Themed Roasts
  "Just monkeying around 🐒 while we swing you into a chat.",
  "Hang tight! A monkey 🐒 is fetching your chat partner.",
  "Going bananas 🍌 trying to find you a match!",
  "Monkey see, monkey connect! 🐒",
  "Our monkeys 🐒 are working hard to swing you into a chat.",

  // Banana-Themed Roasts
  "Why did the banana 🍌 go to the party? Because it was a-peeling!",
  "I'm bananas 🍌 for you!",
  "Time flies like an arrow; fruit flies like a banana 🍌.",
  "Keep calm and eat a banana 🍌.",
  "Banana 🍌: The only fruit that comes with its own smile.",

  // Turtle-Themed Roasts
  "You're slower than a turtle on vacation 🐢.",
  "Even turtles are asking you to speed up 🐢.",
  "At this rate, a turtle could've built this app 🐢.",
  "You're the reason turtles feel fast 🐢.",
  "If you were any slower, you'd be going backward 🐢.",

  // Snail-Themed Roasts
  "Snails are challenging you to a race 🐌.",
  "Even snails are laughing at your speed 🐌.",
  "You're the human embodiment of a snail's pace 🐌.",
  "Snails have overtaken you in the fast lane 🐌.",
  "You're so slow, snails use you as a benchmark 🐌.",

  // Sloth-Themed Roasts
  "Sloths are calling you lazy 🦥.",
  "You're giving sloths a run for their money in slowness 🦥.",
  "Even sloths are telling you to hurry up 🦥.",
  "You're the reason sloths feel energetic 🦥.",
  "If you were any more relaxed, you'd be in a coma 🦥."
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * roastQuotes.length);
  document.getElementById('quote').innerText = roastQuotes[randomIndex];
}

// Call the function to display a quote when the page loads
window.onload = displayRandomQuote;
// Roast Quotes System (✅ You already have this part)
const roastQuotes = [
  // ... your donkey, monkey, banana, turtle, snail, sloth quotes ...
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * roastQuotes.length);
  document.getElementById('quote').innerText = roastQuotes[randomIndex];
}

window.onload = displayRandomQuote;

// 👇👇 Add this below the roast quote code 👇👇

// ✅ Connect to the backend using Socket.IO
const socket = io("https://your-backend-name.onrender.com"); // change this to your real Render backend URL

// Handle chat logic
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    appendMessage(`You: ${input.value}`);
    input.value = "";
  }
});

socket.on("message", function (msg) {
  appendMessage(`Stranger: ${msg}`);
});

function appendMessage(msg) {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

