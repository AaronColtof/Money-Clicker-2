let currentMoney = 100;
let totalMoneyEarned = 100;
let botCPS = 0;

let currentMoneyText = document.getElementById("moneyText");
let botCPSText = document.getElementById("botCPSText");
let totalMoneyText = document.getElementById("totalMoney");

let moneyButton = document.getElementById("moneyButton").addEventListener("click", moneyButtonClicked);

function addMoney(moneyToAdd){
    currentMoney += moneyToAdd;
}

function subtractMoney(moneyToSubtract){
    currentMoney -= moneyToSubtract;
}

function moneyButtonClicked(){
    addMoney(1);
    addToTotalMoneyEarned(1);
    updateMoneyText();
}

function updateMoneyText(){
    currentMoneyText.innerHTML = "Money: " + currentMoney;
    botCPSText.innerHTML = "CPS: " + botCPS; 
    totalMoneyText.innerHTML = "Total: " + totalMoneyEarned; 
}

function addToTotalMoneyEarned(moneyAdded)
{
    totalMoneyEarned += moneyAdded;
}

function addBotCPS(){
    currentMoney += botCPS;
    addToTotalMoneyEarned(botCPS);
    updateMoneyText();
}

function start()
{

}

start();

setInterval(function update(){
    addBotCPS();
}, 1000);
