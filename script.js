const noBtn = document.getElementById('noBtn');
let selectedDate = "";

// 1. The "Run Away" No Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Page Navigation
function nextPage(pageNumber) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

// 3. Cringey Time Messages
document.getElementById('datePicker').addEventListener('input', (e) => {
    selectedDate = e.target.value;
    const msgs = [
        "Every second without you is a second wasted... 😩",
        "I'll be counting the heartbeats until then! 💓",
        "Is it that time yet? My heart is doing backflips! 🤸‍♂️",
        "Prepare for maximum levels of my undivided attention! 😍"
    ];
    document.getElementById('cringeyMessage').innerText = msgs[Math.floor(Math.random() * msgs.length)];
});

// 4. Final Selection
function selectFood(food) {
    // Fallback if she skips picking a date/time
    if (!selectedDate) {
        selectedDate = new Date().toISOString(); 
    }

    const dateObj = new Date(selectedDate);
    
    // Formats the date beautifully (e.g., "December 25, 2026, 7:00 PM")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    document.getElementById('finalDetails').innerHTML = 
        `See you on <br><b>${formattedDate}</b><br>for some <b>${food}</b>! Screenshot this and send it to your girlfreind for confirmation.`;
    
    nextPage(4);
}

// 5. Dynamic Background Floating Designs
function createBackgroundElement() {
    const element = document.createElement('div');
    element.classList.add('heart'); // Reuses the CSS floating animation rule
    
    // Array of cute decorative emojis matching the theme
    const icons = ['🩵', '🤍', '✨', '☁️', '🌸'];
    element.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    // Randomize horizontal placement across the viewport width
    element.style.left = Math.random() * 100 + "vw";
    
    // Randomize float speed (between 4 to 8 seconds) so they don't rise uniformly
    const duration = (Math.random() * 4 + 4);
    element.style.animationDuration = duration + "s";
    
    // Randomize sizing slightly for depth perception
    element.style.fontSize = (Math.random() * 20 + 12) + "px";
    
    document.body.appendChild(element);
    
    // Safely remove the element from the DOM once its upward animation finishes
    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

// Spawns a decorative icon every 400ms automatically
setInterval(createBackgroundElement, 400);