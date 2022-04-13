let currentMoney = 100;
let totalMoneyEarned = 0;
let botCPS = 10;

let currentMoneyText = document.getElementById("moneyText");

function addMoney(moneyToAdd){
    console.log(moneyToAdd);
    currentMoney += moneyToAdd;
}

function subtractMoney(moneyToSubtract){
    currentMoney -= moneyToSubtract;
}

function updateMoneyText(){
    currentMoneyText.innerHTML = currentMoney;
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
