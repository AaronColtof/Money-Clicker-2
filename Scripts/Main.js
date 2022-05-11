let currentMoney = 100;
let totalMoneyEarned = 100;
let botCPS = 0;

let CPS = 0;

let currentMoneyText = document.getElementById("moneyText");
let botCPSText = document.getElementById("botCPSText");
let totalMoneyText = document.getElementById("totalMoney");

let moneyButton = document.getElementById("moneyButton").addEventListener("click", moneyButtonClicked);

let smallOffice = document.getElementById("small_office").addEventListener("click", addSmallOffice);
let mediumOffice = document.getElementById("medium_office").addEventListener("click", addMediumOffice);
let largeOffice = document.getElementById("large_office").addEventListener("click", addLargeOffice);

let reset = document.getElementById("reset").addEventListener("click", resetprogress);

function addMoney(moneyToAdd){
    currentMoney += moneyToAdd;
    totalMoneyEarned += moneyToAdd;
}

function subtractMoney(moneyToSubtract){
    currentMoney -= moneyToSubtract;
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

function moneyButtonClicked(){
    addMoney(1);
    updateMoneyTextAndSaveStats();
    CPS += 1;
}

function updateMoneyTextAndSaveStats(){
    currentMoneyText.innerHTML = "Money: " + currentMoney;
    botCPSText.innerHTML = "CPS: " + botCPS; 
    totalMoneyText.innerHTML = "Total: " + totalMoneyEarned; 
    saveStats();
}

function addBotCPS(){
    addMoney(botCPS);
    updateMoneyTextAndSaveStats();
}

function addSmallOffice() {
    if (currentMoney >= 100) {
        botCPS += 1;
        subtractMoney(100);
    };
};

function addMediumOffice() {
    if (currentMoney >= 1000) {
        botCPS += 15;
        subtractMoney(1000);
    };
};

function addLargeOffice() {
    if (currentMoney >= 10000) {
        botCPS += 250;
        subtractMoney(10000);
    };
};

function loadStats(){
    let nCurrentMoney = window.localStorage.getItem('saveclick');
    let nBotCPS = window.localStorage.getItem('savecps');
    let nTotalEarned = window.localStorage.getItem('savetotal');

    if (nCurrentMoney == null) {
        currentMoney = 100;
    } else {
        currentMoney = parseInt(nCurrentMoney);
    }
    if (nBotCPS == null) {
        botCPS = 0;
    } else {
        botCPS = parseInt(nBotCPS);
    }
    if (nTotalEarned == null) {
        totalMoneyEarned = 100;
    } else {
        totalMoneyEarned = parseInt(nTotalEarned);
    }
}

function saveStats(){
    window.localStorage.setItem('saveclick', currentMoney);
    window.localStorage.setItem('savecps', botCPS);
    window.localStorage.setItem('savetotal', totalMoneyEarned);
}

function start()
{
    loadStats();
    saveStats();
}

start();

setInterval(function update(){
    addBotCPS();
    if (CPS > 20)
    {
        currentMoney = 0;
        totalMoneyEarned = 0;
        botCPS = 0;
        alert("Autoclicker detected! CPS > 20 is not allowed!")
    }
    CPS = 0;
}, 1000);

function resetprogress() {
    let sure = prompt("Are you sure? yes/no", "no")
    if (sure == "no") {
        pass
    } 
    else if (sure == "yes") {
        currentMoney = 0;
        totalMoneyEarned = 0;
        botCPS = 0;
    }
    else {
        alert("Please say yes or no.")
    }
}

setInterval(function FixedUpdate(){
}, 60);