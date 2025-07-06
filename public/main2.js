const boxes = document.querySelectorAll(".box");
const nameInput = document.getElementById("name-input");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const nameElement = box.querySelector(".name");
        const userName = nameElement.textContent.trim();

        // ✅ Set the input field (optional)
        

        // ✅ Open index2.html with query parameter
        window.open(`http://localhost:4000/?name=${encodeURIComponent(userName)}`, '_blank');
        nameInput.value = userName;
    });
});
