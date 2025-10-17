let moneybutton = document.getElementById("moneybutton");
let gamblebutton = document.getElementById("gamblebutton");
let moneycounter = document.getElementById("moneycounter");
let gamblestreakdisplay = document.getElementById("gamblestreak");
let gainlossdisplay = document.getElementById("gainlossdisplay");
let extremegamblebutton = document.getElementById("extremegamblebutton");
let money = 0n;
let gamblestreak = 0;

// Init

function refresh() {
    moneycounter.innerText = `monez: ${money.toString()}`;
    if (gamblestreak >= 2) {
        gamblestreakdisplay.style.opacity = 1;
        gamblestreakdisplay.innerText = `${gamblestreak} STREAK`;
        gamblestreakdisplay.style.fontSize = `${gamblestreak + 10}px`;
    } else {
        gamblestreakdisplay.style.opacity = 0;
        gamblestreakdisplay.style.fontSize = '0px';
    }
};

function moneyClick() {
    money++;
    refresh();
};


function gamble() { if (money >= 1n) {
    if (Math.floor(Math.random() * 2.5) == 1) {
        money *= 5n;
        gamblestreak += 1;
    } else {
        money /= 3n;
        gamblestreak = 0;
    }
    refresh();
}};

function extremeGamble() { 
    if (Math.floor(Math.random() * 3) == 1) {
        money *= 77n;
        gamblestreak += 1;
    } else {
        money = 0n;
        gamblestreak = 0;
    }
    refresh();
}


moneybutton.addEventListener("click", moneyClick);
gamblebutton.addEventListener("click", gamble);
extremegamblebutton.addEventListener("click", extremeGamble);

