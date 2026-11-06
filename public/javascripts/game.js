const stats = {
    hunger: 70,
    hygiene: 70,
    happiness: 70
}

function changestat(name, amount) { 
    //keep each stat between 0 and 100
    stats[name] = Math.max(0, Math.min(100, stats[name] + amount));

    document.getElementById(name).textContent = stats[name];
    updateChudMood();
}

function renderStats() {
    for (const [name, value] of Object.entries(stats)) {
        document.getElementById(name).textContent = value;
    }
}


document.getElementById("snackButton").addEventListener("click", function() {
    changestat("hunger", 25);
    changestat("hygiene", -2);
    document.getElementById("message").textContent = 
    "The chud is feasting"
});

document.getElementById("showerButton").addEventListener("click", function() {
    changestat ("hygiene", 30);
    changestat ("happiness", -2);
    changestat ("hunger", -2);
    document.getElementById("message").textContent = 
    "The chud is reluctantly taking a shower"
});

document.getElementById("gameButton").addEventListener("click", function() {
    changestat ("hunger", -2);
    changestat ("hygiene", -2);
    changestat ("happiness", 15);
    document.getElementById("message").textContent = 
    "The chud is in his happy place playing video games"
});

const introScreen = document.getElementById("introScreen");
const developerName = document.getElementById("developerName");
const gameScreen = document.getElementById("gameScreen");
const chudImage = document.getElementById("chudImage");
const chud = document.getElementById("chud");
const lowStatThreshold = 20;

function updateChudMood() {
    const isAngry = Object.values(stats).some(value => value <= lowStatThreshold);
    const mood = isAngry ? "angry" : "happy";

    if (chudImage.dataset.mood !== mood) {
        chudImage.src = isAngry
        ? "/images/chudangry.png"
        : "/images/chudhappy.png";
        chudImage.dataset.mood = mood;
    }
}

function waddleToRandomSpot() {
    chud.style.left = `${15 + Math.random() * 70}%`;
    chud.style.top = `${15 + Math.random() * 70}%`;
}

setTimeout(function() {
    developerName.hidden = false;
}, 1000);

setTimeout(function() {
    introScreen.hidden = true;
    gameScreen.hidden = false;
    setInterval(function() {
    changestat("hunger", -1);
    changestat("hygiene", -1);
    changestat("happiness", -1);
    }, 5000);

}, 4000);


renderStats();
waddleToRandomSpot();
setInterval(waddleToRandomSpot, 2500);
