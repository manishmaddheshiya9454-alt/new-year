const currentYear = new Date().getFullYear() + 1;
document.getElementById("year").textContent = currentYear;
document.getElementById("footerYear").textContent = currentYear;

// Countdown to New Year
const newYear = new Date('January 1, 2026 00:00:00').getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = newYear - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('time').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

document.getElementById('generateBtn').addEventListener('click', function() {
  document.getElementById('clickSound').play();
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    const englishMessage = `🎉 May the coming year bring you growth, positivity, and memorable achievements, ${name}! 🎊\n\nLet us welcome the new year with confidence, gratitude, and fresh goals. 🌟`;
    const hindiMessage = `🎉 आगामी वर्ष आपको विकास, सकारात्मकता और यादगार उपलब्धियां लाए, ${name}! 🎊\n\nचलिए नए साल का आत्मविश्वास, कृतज्ञता और नए लक्ष्यों के साथ स्वागत करते हैं। 🌟`;
    const messageElement = document.getElementById('message');
    messageElement.textContent = englishMessage;
    messageElement.classList.add('updated');
    messageElement.dataset.english = englishMessage;
    messageElement.dataset.hindi = hindiMessage;
    messageElement.dataset.lang = 'english';
    const shareOptions = document.getElementById('shareOptions');
    shareOptions.style.display = 'block';
    shareOptions.classList.add('show');
    document.getElementById('surpriseBtn').style.display = 'block';
    document.getElementById('translateBtn').style.display = 'block';
    // Celebration effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    alert('Please enter your name.');
  }
});

document.getElementById('whatsappShare').addEventListener('click', function(e) {
  e.preventDefault();
  const message = document.getElementById('message').textContent;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

document.getElementById('facebookShare').addEventListener('click', function(e) {
  e.preventDefault();
  const message = document.getElementById('message').textContent;
  const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(message)}&u=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
});

document.getElementById('twitterShare').addEventListener('click', function(e) {
  e.preventDefault();
  const message = document.getElementById('message').textContent;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

document.getElementById('instagramShare').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Instagram sharing is not directly supported via web. Please copy the message and share manually.');
});

document.getElementById('copyShare').addEventListener('click', function(e) {
  e.preventDefault();
  const message = document.getElementById('message').textContent;
  navigator.clipboard.writeText(message).then(() => {
    alert('Message copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
    alert('Failed to copy message.');
  });
});

document.getElementById('surpriseBtn').addEventListener('click', function() {
  document.getElementById('clickSound').play();
  confetti({
    particleCount: 200,
    spread: 160,
    origin: { y: 0.6 }
  });
});

document.getElementById('translateBtn').addEventListener('click', function() {
  document.getElementById('clickSound').play();
  const messageElement = document.getElementById('message');
  const currentLang = messageElement.dataset.lang;
  if (currentLang === 'english') {
    messageElement.textContent = messageElement.dataset.hindi;
    messageElement.dataset.lang = 'hindi';
    this.textContent = 'Translate to English';
  } else {
    messageElement.textContent = messageElement.dataset.english;
    messageElement.dataset.lang = 'english';
    this.textContent = 'Translate to Hindi';
  }
});

document.getElementById('musicBtn').addEventListener('click', function() {
  document.getElementById('clickSound').play();
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
    this.textContent = 'Pause Music';
  } else {
    music.pause();
    this.textContent = 'Play Music';
  }
});

document.getElementById('fireworksBtn').addEventListener('click', function() {
  document.getElementById('clickSound').play();
  // Fireworks effect using confetti
  confetti({
    particleCount: 300,
    spread: 180,
    origin: { y: 0.5 },
    colors: ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#feca57']
  });
});