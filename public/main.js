const socket = io();
const messageTone = new Audio('/tone.mp3');
const clientsTotal = document.getElementById("clients-total");

const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total Clients: ${data}`;
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

function sendMessage() {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) return;

    const data = {
        name,
        message,
        dateTime: new Date()
    };

    socket.emit('message', data);
    addMessageToUI(true, data);
    messageInput.value = '';
}

socket.on('chat-message', (data) => {
    messageTone.play();
    addMessageToUI(false, data);
});

function addMessageToUI(isOwnMessage, data) {
    clearFeedback();
    if (!data.message) return;

    const element = `
        <li class="${isOwnMessage ? "message-right" : "message-left"}">
            <p class="message">
                ${data.message}
                <span>${data.name} [ ${moment(data.dateTime).fromNow()} ]</span>
            </p>
        </li>
    `;
    messageContainer.insertAdjacentHTML('beforeend', element);
    scrollToBottom();
}

function scrollToBottom() {
    messageContainer.scrollTo(0, messageContainer.scrollHeight);
}

// Feedback typing events
messageInput.addEventListener('focus', () => {
    emitTypingFeedback();
});

messageInput.addEventListener('keypress', () => {
    emitTypingFeedback();
});

messageInput.addEventListener('blur', () => {
    socket.emit('feedback', {
        feedback: ''
    });
});

function emitTypingFeedback() {
    const name = nameInput.value.trim();
    if (!name) return;
    socket.emit('feedback', {
        feedback: `${name} is typing a message...`
    });
}

// Display feedback
socket.on('feedback', (data) => {
    clearFeedback();
    const element = `
        <li class="message-feedback">
            <p class="feedback" id="feedback">${data.feedback}</p>
        </li>
    `;
    messageContainer.insertAdjacentHTML('beforeend', element);
    scrollToBottom();
});

function clearFeedback() {
    document.querySelectorAll('li.message-feedback').forEach(element => {
        element.remove();
    });
}

// Redirect cross button
document.addEventListener("DOMContentLoaded", function () {
    const crossBtn = document.getElementById("cross-btn");
    if (crossBtn) {
        crossBtn.addEventListener("click", function () {
            window.location.href = "index2.html";
        });
    }
});
