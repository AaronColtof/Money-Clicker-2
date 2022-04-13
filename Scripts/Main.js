let currentMoney = 100;
let totalMoney = 0;
let botCPS = 0;

let currentMoneyText = document.getElementById("moneyText");

function addMoney(moneyToAdd){
    currentMoney += moneyToAdd;
}

function subtractMoney(moneyToSubtract){
    currentMoney -= moneyToSubtract;
}

function updateMoneyText(){
    currentMoneyText = currentMoney;
}

function start(){}

start();