function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}
document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click vào nút "Send"
    document.getElementById("send-button").addEventListener("click", function() {
        sendMessage();
    });

    // Lắng nghe sự kiện nhấn phím Enter trong trường nhập liệu
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });

    // Hàm gửi tin nhắn
    function sendMessage() {
        var userInput = document.getElementById("user-input").value;
        if (userInput.trim() !== "") {
            addMessageToChat("user", userInput);
            // Phản hồi từ chatbot (có thể thay đổi theo logic của bạn)
            var botResponse = generateBotResponse(userInput);
            addMessageToChat("bot", botResponse);
            document.getElementById("user-input").value = "";
        }
    }

    // Hàm thêm tin nhắn vào cuộc trò chuyện
    function addMessageToChat(sender, message) {
        var chatLog = document.getElementById("chat-log");
        var li = document.createElement("li");
        li.innerHTML = '<span class="avatar ' + sender + '">' + sender.charAt(0).toUpperCase() + '</span>' +
                        '<div class="message">' + message + '</div>';
        chatLog.appendChild(li);
        // Tự động cuộn xuống dòng cuối cùng của cuộc trò chuyện
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Hàm tạo phản hồi từ chatbot (giả lập)
    function generateBotResponse(userInput) {
        // Đây là nơi bạn có thể thêm logic xử lý và tạo phản hồi từ chatbot
        // Đây chỉ là một ví dụ đơn giản
        if (userInput.toLowerCase().includes("hello")) {
            return "Hello! How can I help you?";
        } else if (userInput.toLowerCase().includes("bye")) {
            return "Goodbye!";
        } else {
            return "I'm sorry, I don't understand. Please ask me something else.";
        }
    }
});