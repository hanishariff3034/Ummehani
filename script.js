const chatbot = document.getElementById("chatbot");
const messages = document.getElementById("chatbot-messages");

function toggleChatbot() {
  chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const userMessage = input.value.trim();
  if (userMessage) {
    addMessage("User", userMessage);
    getBotResponse(userMessage);
    input.value = "";
  }
}

function addMessage(sender, text) {
    const message = document.createElement("div");
    message.textContent = `${sender}: ${text}`; // Corrected: Use backticks for the template string
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }
  

function getBotResponse(message) {
  const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm functioning well!",
    "bye": "Goodbye! Have a great day!"
  };

  const response = responses[message.toLowerCase()] || "Sorry, I don't understand that.";
  addMessage("Bot", response);
}