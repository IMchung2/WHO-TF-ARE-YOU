document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');
    }, 1000);
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple responses for demonstration
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a program, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
    };
    return responses[input.toLowerCase()] || "BRUH WHO TF ARE YOU.";
}
