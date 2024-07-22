const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Create and append a hidden modal to the document
function createHiddenModal() {
  const modal = document.createElement("div");
  modal.className = "hidden";
  modal.style.display = "none";
  document.body.appendChild(modal);
}

createHiddenModal();
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
