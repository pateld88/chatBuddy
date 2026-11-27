"use strict";
const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("question-input");
// Later, replace this with a call to a real backend.
// For now the answer is just the question echoed back.
function getAnswer(question) {
    return question;
}
function addMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `message ${sender}`;
    bubble.textContent = text; // textContent (not innerHTML) keeps user input safe
    messages.appendChild(bubble);
    // Keep the newest message in view
    messages.scrollTop = messages.scrollHeight;
}
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the browser from reloading the page
    const question = input.value.trim();
    if (question === "")
        return;
    addMessage(question, "user");
    addMessage(getAnswer(question), "bot");
    input.value = "";
    input.focus();
});
//# sourceMappingURL=script.js.map