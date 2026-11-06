document.addEventListener("DOMContentLoaded", () => {
    const curtainStage = document.getElementById("curtain-stage");
    const mainContent = document.getElementById("main-content");
    const bgMusic = document.getElementById("bg-music");
    const musicControl = document.getElementById("music-control");
    const musicBtn = document.getElementById("music-btn");
    const musicText = document.querySelector(".music-text");

    // 1. Velvet Curtains Smooth Split Trigger
    curtainStage.addEventListener("click", () => {
        curtainStage.classList.add("open");
        mainContent.classList.remove("hidden-content");
        mainContent.classList.add("show-content");
        
        // Expose floating widget music framework
        setTimeout(() => {
            musicControl.classList.remove("hidden");
        }, 1000);

        // Attempt sound wave trigger activation loop
        bgMusic.play().then(() => {
            musicText.innerText = "Pause Music";
        }).catch(err => {
            console.log("Autoplay context held. Awaiting secondary trigger profile.");
            musicText.innerText = "Play Music";
        });

        // Trigger dynamic target layout alignment evaluation window
        setTimeout(() => {
            curtainStage.style.display = "none";
            handleScrollAnimations(); // Initial layout calculations context call
        }, 1800);
    });

    // 2. Audio Control Toggle Utility
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (bgMusic.paused) {
            bgMusic.play();
            musicText.innerText = "Pause Music";
        } else {
            bgMusic.pause();
            musicText.innerText = "Play Music";
        }
    });

    // 3. Precision Countdown Calculation Engine
    const targetMuhurtham = new Date("November 20, 2026 11:28:00").getTime();

    const renderCountdown = () => {
        const currentTime = new Date().getTime();
        const durationWindow = targetMuhurtham - currentTime;

        const countdownElement = document.getElementById("countdown");
        if (!countdownElement) return;

        if (durationWindow < 0) {
            countdownElement.innerHTML = "<h3 style='color: #4A0E17;'>The Auspicious Wedding Festivities Have Begun!</h3>";
            return;
        }

        const calculatedDays = Math.floor(durationWindow / (1000 * 60 * 60 * 24));
        const calculatedHours = Math.floor((durationWindow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const calculatedMinutes = Math.floor((durationWindow % (1000 * 60 * 60)) / (1000 * 60));
        const calculatedSeconds = Math.floor((durationWindow % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="time-block"><div class="time-num">${calculatedDays}</div><div class="time-label">Days</div></div>
            <div class="time-block"><div class="time-num">${calculatedHours}</div><div class="time-label">Hours</div></div>
            <div class="time-block"><div class="time-num">${calculatedMinutes}</div><div class="time-label">Mins</div></div>
            <div class="time-block"><div class="time-num">${calculatedSeconds}</div><div class="time-label">Secs</div></div>
        `;
    };

    renderCountdown();
    setInterval(renderCountdown, 1000);

    // 4. Scroll Animation Event Listener
    const animatedElements = document.querySelectorAll(".fade-in");
    
    const handleScrollAnimations = () => {
        const structuralTriggerWindow = window.innerHeight * 0.85;
        animatedElements.forEach(element => {
            const elementTopPosition = element.getBoundingClientRect().top;
            if (elementTopPosition < structuralTriggerWindow) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimations);
});
