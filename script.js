document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        getAIResponse(userInput);
    }
});

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getAIResponse(userMessage) {
    simulateChatGPTResponse(userMessage).then(aiMessage => {
        setTimeout(() => {
            addMessage(aiMessage, 'bot');
        }, 1000);
    });
}

function simulateChatGPTResponse(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let aiMessage = "I'm not sure how to respond to that.";
            const lowerCaseMessage = message.toLowerCase();

            // Enhanced keyword responses
            if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hlo')) {
                aiMessage = 'Hello! How can I assist you today?';
            } else if (lowerCaseMessage.includes('how are you')) {
                aiMessage = "I'm just a bunch of code, but I'm doing fine! How about you?";
            } else if (lowerCaseMessage.includes('bye')) {
                aiMessage = 'Goodbye! Have a great day!';
            } else if (lowerCaseMessage.includes('what is your name')) {
                aiMessage = "I'm a chatbot created to assist you. You can call me ChatBot!";
            } else if (lowerCaseMessage.includes('tell me a joke')) {
                aiMessage = "Why did the scarecrow win an award? Because he was outstanding in his field!";
            } else if (lowerCaseMessage.includes('help')) {
                aiMessage = "Sure! What do you need help with?";
            } else if (lowerCaseMessage.includes('favorite color')) {
                aiMessage = "I don't have a favorite color, but I've heard blue is quite popular!";
            } else if (lowerCaseMessage.includes('what can you do')) {
                aiMessage = "I can chat with you, answer questions, and tell you jokes! What would you like to talk about?";
            } else if (lowerCaseMessage.includes('tell me something interesting')) {
                aiMessage = "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible!";
            } else if (lowerCaseMessage.includes('music')) {
                aiMessage = "Music is a universal language! What's your favorite genre?";
            } else if (lowerCaseMessage.includes('fuck you')) {
                aiMessage = "BSDK BKL MC C you FU";
            } else if (lowerCaseMessage.includes('fuck')) {
                aiMessage = "BSDK BKL MC C you FU";
            }else {
                // If no response matches, create a Google search link
                window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, '_blank');
                aiMessage = "I couldn't find an answer to that. I've opened a Google search for you!";
            }

            resolve(aiMessage);
        }, 500); // Simulated response time
    });
}