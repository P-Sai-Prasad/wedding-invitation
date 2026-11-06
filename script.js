document.addEventListener("DOMContentLoaded", () => {
    const curtainStage = document.getElementById("curtain-stage");
    const mainContent = document.getElementById("main-content");
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    // 1. Reveal Animation & Music Play triggering via Action Click
    curtainStage.addEventListener("click", () => {
        curtainStage.classList.add("open");
        mainContent.classList.remove("hidden-content");
        mainContent.classList.add("show-content");
        musicBtn.classList.remove("hidden");

        // Attempt to play audio on interaction
        bgMusic.play().then(() => {
            musicBtn.innerText = "⏸️ Pause Music";
        }).catch(err => console.log("Audio autoplay restricted. Play manually via widget."));
        
        // Remove curtain structure entirely from DOM after exit to preserve layout flow
        setTimeout(() => { curtainStage.style.display = "none"; }, 1500);
    });

    // 2. Continuous Manual Audio Toggle Handler
    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.innerText = "⏸️ Pause Music";
        } else {
            bgMusic.pause();
            musicBtn.innerText = "🎵 Play Music";
        }
    });

    // 3. Precise Wedding Target Countdown Engine
    const weddingDate = new Date("November 20, 2026 11:28:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference < 0) {
            document.getElementById("countdown").innerHTML = "<h3>The Celebrations Have Begun!</h3>";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div class="time-block"><div class="time-num">${days}</div><div class="time-label">Days</div></div>
            <div class="time-block"><div class="time-num">${hours}</div><div class="time-label">Hrs</div></div>
            <div class="time-block"><div class="time-num">${minutes}</div><div class="time-label">Mins</div></div>
            <div class="time-block"><div class="time-num">${seconds}</div><div class="time-label">Secs</div></div>
        `;
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
});
