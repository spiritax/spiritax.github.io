const twitchLogo = document.querySelector('.social-icons a[href*="twitch"]');
const twitchEmbed = document.getElementById('twitch-embed');

twitchLogo.addEventListener('mouseenter', () => {
    twitchEmbed.style.display = 'block';
});

twitchLogo.addEventListener('mouseleave', () => {
    twitchEmbed.style.display = 'none';
});