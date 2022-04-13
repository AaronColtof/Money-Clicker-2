let currentMoney = 100;
let totalMoneyEarned = 100;
let botCPS = 0;

let currentMoneyText = document.getElementById("moneyText");
let botCPSText = document.getElementById("botCPSText");
let totalMoneyText = document.getElementById("totalMoney");

function addMoney(moneyToAdd){
    console.log(moneyToAdd);
    currentMoney += moneyToAdd;
}

function subtractMoney(moneyToSubtract){
    currentMoney -= moneyToSubtract;
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
