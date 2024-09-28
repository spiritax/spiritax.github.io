document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("twitch-modal");
    const btn = document.getElementById("twitch-button");
    const span = document.getElementById("close-modal");
    const toggleChat = document.getElementById("toggle-chat");
    const restore = document.getElementById("restore-modal");
    const closeEmbed = document.getElementById("close-embed-modal");
    const chatContainer = document.getElementById("chat-container");
    let embedInitialized = false;
    let chatVisible = true;
    let unmuted = false;
    let twitchEmbed;
    initializeTwitchEmbed();

    function initializeTwitchEmbed() {
        const embedElement = document.getElementById("twitch-embed");
        embedElement.innerHTML = ''; // Clear the embed content
        twitchEmbed = new Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "100%",
            channel: "chatduchaos",
            layout: "video",
            parent: ["chatduchaos.com"],
            muted: true
        });
        embedInitialized = true;
    }

    btn.onclick = function() {
        modal.style.display = "flex";
        modal.classList.remove("minimized");
        if(!unmuted) {
            twitchEmbed.setMuted(false);
            unmuted = true;
        }
        if (!embedInitialized) {
            initializeTwitchEmbed();
        }
        if (chatVisible) {
            chatContainer.classList.remove('chat-hidden');
            toggleChat.textContent = "Masquer Chat";
        }
    }

    span.onclick = function() {
        modal.classList.add("minimized");
        chatContainer.classList.add('chat-hidden');
    }

    toggleChat.onclick = function() {
        if (chatVisible) {
            chatContainer.classList.add('chat-hidden');
            toggleChat.textContent = "Afficher Chat";
        } else {
            chatContainer.classList.remove('chat-hidden');
            toggleChat.textContent = "Masquer Chat";
        }
        chatVisible = !chatVisible;
    }

    restore.onclick = function() {
        modal.classList.remove("minimized");
        if (chatVisible) {
            chatContainer.classList.remove('chat-hidden');
            toggleChat.textContent = "Masquer Chat";
        }
    }

    closeEmbed.onclick = function() {
        modal.style.display = "none";
        modal.classList.remove("minimized");
        twitchEmbed.setMuted(true);
        unmuted = false;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.add("minimized");
            chatContainer.classList.add('chat-hidden');
        }
    }
});