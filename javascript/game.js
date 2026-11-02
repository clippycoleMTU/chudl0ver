const stats = {
    hunger: 70,
    hygiene: 40,
    energy: 60,
    happiness: 10
}

function changestat(name, amount) { 
    //keep each stat between 0 and 100
    stats[name] = Math.max(0, Math.min(100, stats[name] + amount));

    document.getElementById(name).textContent = stats[name];
}

document.getElementById("snackButton").addEventListener("click", function() {
    changestat("hunger", -25);
    changestat("energy", 5);
    changestat("happiness", 5);
    document.getElementById("message").textContent = 
    "The chud is feasting"
});

document.getElementById("showerButton").addEventListener("click", function() {
    changestat ("hygiene", 30);
    changestat ("energy", -5);
    changestat ("fun", -20);
    document.getElementById("message").textContent = 
    "The chud is reluctantly taking a shower"
});

document.getElementById("gameButton").addEventListener("click", function() {
    changestat ("energy", -20);
    changestat ("hunger", 10);
    changestat ("hygiene", -5);
    changestat ("happiness", 15);
    document.getElementById("message").textContent = 
    "The chud is in his happy place playing video games"
});

