const list = ["Ridhima", "Diya", "Joe", "Jay", "Deepak", "Rita", "Suresh", "Nazuk", "Liza", "Jiya", "Muskan", "Lashika", "Hiya"];
const dp=["👩","👨","🧑","👧","👦","👵","👴","🧑","🧓","👩","👨","👧","👴",]

// let html = '<ul class="box">';

// for (let i = 0; i < list.length; i++) {
//   html += `
//     <li>
//       <div class="box-tag">
//         <span class="avatar">${dp[i]}</span>
//         <p class="name" id="name-input">${list[i]}</p>
//       </div>
//     </li>
//   `;
// }

// html += '</ul>';

// document.getElementById("message-container").innerHTML = html;

let html = '<ul class="user-list">';

for (let i = 0; i < list.length; i++) {
  html += `
    <li class="user-item" data-name="${list[i]}" data-icon="${dp[i]}">
      <div class="box-tag">
        <span class="avatar">${dp[i]}</span>
        <p class="name">${list[i]}</p>
      </div>
    </li>
  `;
}

html += '</ul>';
document.getElementById("message-container").innerHTML = html;

// ✅ Event listener
document.querySelectorAll(".user-item").forEach(item => {
  item.addEventListener("click", () => {
    const name = item.dataset.name;
    const icon = item.dataset.icon;

    window.open(`http://localhost:4000/?name=${encodeURIComponent(name)}&icon=${icon}`, '_blank');
  });
});
