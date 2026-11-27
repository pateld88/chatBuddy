const messages = document.getElementById("messages") as HTMLElement;
const form = document.getElementById("chat-form") as HTMLFormElement;
const input = document.getElementById("question-input") as HTMLInputElement;

// "user" | "bot" is a union type: sender can only be one of these two strings
type Sender = "user" | "bot";

// Later, replace this with a call to a real backend.
// For now the answer is just the question echoed back.
function getAnswer(question: string): string {
  return question;
}

function addMessage(text: string, sender: Sender): void {
  const bubble = document.createElement("div");
  bubble.className = `message ${sender}`;
  bubble.textContent = text; // textContent (not innerHTML) keeps user input safe

  messages.appendChild(bubble);

  // Keep the newest message in view
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // stop the browser from reloading the page

  const question = input.value.trim();
  if (question === "") return;

  addMessage(question, "user");
  addMessage(getAnswer(question), "bot");

  input.value = "";
  input.focus();
});
