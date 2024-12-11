const sendButton = document.getElementById("send-button");
const chatInput = document.getElementById("chat-input");
const thirdText = document.getElementById("third-text");
const firstResponse = document.getElementById("first-response");
let isSecondResponsePhase = false;

window.addEventListener("load", () => {
  setTimeout(() => {
    const div = document.getElementById("first-text");
    div.classList.add("revealed");
  }, 1000);

  setTimeout(() => {
    const div = document.getElementById("second-text");
    div.classList.add("revealed");
    chatInput.disabled = false;
    sendButton.disabled = false;
  }, 3000);
});

sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (!isSecondResponsePhase) {
    if (message) {
      firstResponse.textContent = message;
      thirdText.classList.add("revealed");
      chatInput.value = "";
    }

    setTimeout(() => {
      const div = document.getElementById("fourth-text");
      div.classList.add("revealed");
      chatInput.disabled = true;
      sendButton.disabled = true;
    }, 1000);

    setTimeout(() => {
      const img = document.getElementById("first-img");
      img.classList.add("revealed");
    }, 3000);

    setTimeout(() => {
      const div = document.getElementById("fifth-text");
      div.classList.add("revealed");
    }, 4000);

    setTimeout(() => {
      const div = document.getElementById("second-img");
      div.classList.add("revealed");
    }, 6000);

    setTimeout(() => {
      const div = document.getElementById("sixth-text");
      div.classList.add("revealed");
    }, 7000);

    setTimeout(() => {
      const div = document.getElementById("third-img");
      div.classList.add("revealed");
    }, 9000);

    setTimeout(() => {
      const div = document.getElementById("seventh-text");
      div.classList.add("revealed");
    }, 10000);

    setTimeout(() => {
      const div = document.getElementById("eighth-text");
      div.classList.add("revealed");
      chatInput.disabled = false;
      sendButton.disabled = false;
      isSecondResponsePhase = true;
    }, 11000);
  } else {
    sendButton.addEventListener("click", () => {
      const secondMessage = chatInput.value.trim();
      if (secondMessage) {
        const secondResponse = document.getElementById("second-response");
        secondResponse.textContent = secondMessage;
        const ninthText = document.getElementById("ninth-text");
        ninthText.classList.add("revealed");
        chatInput.value = "";
        chatInput.disabled = true;
        sendButton.disabled = true;
      }
    });
  }
});
