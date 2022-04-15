let currentMoney = 100;
let totalMoneyEarned = 100;
let botCPS = 0;

let currentMoneyText = document.getElementById("moneyText");
let botCPSText = document.getElementById("botCPSText");
let totalMoneyText = document.getElementById("totalMoney");

let moneyButton = document.getElementById("moneyButton").addEventListener("click", moneyButtonClicked);

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
}, 1000);

setInterval(function FixedUpdate(){
}, 60);