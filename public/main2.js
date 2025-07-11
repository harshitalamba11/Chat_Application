// const boxes = document.querySelectorAll(".box");
// const nameInput = document.getElementById("name-input");

// boxes.forEach(box => {
//     box.addEventListener("click", () => {
//         const nameElement = box.querySelector(".name");
//         const userName = nameElement.textContent.trim();
//         window.open(`http://localhost:4000/?name=${encodeURIComponent(userName)}`, '_blank');
//         nameInput.value = userName;
//     });
// });

// const name=document.querySelector(".name");

window.addEventListener("DOMContentLoaded", function() {
    window.AgentInitializer.init({
      rootId: "JotformAgent-0197f8a2a5897978bbc5abab3d959f7bd9c1",
      formID: "0197f8a2a5897978bbc5abab3d959f7bd9c1",
      queryParams: ["skipWelcome=1", "maximizable=1"],
      domain: "https:\/\/www.jotform.com",
      isInitialOpen: false,
      isDraggable: false,
      background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
      buttonBackgroundColor: "#0066C3",
      buttonIconColor: "#FFFFFF",
      variant: false,
      customizations: {
        greeting: "Yes",
        greetingMessage: "Hi! How can i help you?",
        pulse: "Yes",
        position: "right"
      }
    });
  });