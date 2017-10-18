// Write your JavaScript here
function calculateCost(price, pay) {
    let chacha = (pay * 100) - (price * 100);
    console.log(chacha);
    return Math.round(chacha);
}

function handleClickEvent() {
    let price = document.getElementById("amount-due").value;
    let pay = document.getElementById("amount-recieved").value;
    let moneyChange = calculateCost(price, pay);

    //dollars   
    if (moneyChange >= 100) {
        let dollars = Math.floor(moneyChange / 100)
        moneyChange = moneyChange % 100;
        document.getElementById('dollars-output').innerHTML = dollars;
    }
    else if (moneyChange < 100) {
        let dollars = Math.floor(moneyChange / 100);
        moneyChange = moneyChange % 100;
        document.getElementById('dollars-output').innerHTML = '0';
    }
    //quarters
    if (moneyChange >= 25) {
        let quarters = Math.floor(moneyChange / 25)
        moneyChange = moneyChange % 25;
        document.getElementById("quarters-output").innerHTML = quarters;
    }
    else if (moneyChange < 25) {
        let quarters = Math.floor(moneyChange / 25)
        moneyChange = moneyChange % 25;
        document.getElementById("quarters-output").innerHTML = '0';
    }
    //dimes
    if (moneyChange >= 10) {
        let dimes = Math.floor(moneyChange / 10);
        moneyChange = moneyChange % 10;
        document.getElementById("dimes-output").innerHTML = dimes;
    }
    else if (moneyChange < 10) {
        let dimes = Math.floor(moneyChange / 10);
        moneyChange = moneyChange % 10;
        document.getElementById("dimes-output").innerHTML = '0';
    }
    //nickels
    if (moneyChange >= 5) {
        let nickels = Math.floor(moneyChange / 5);
        moneyChange = moneyChange % 5;
        document.getElementById("nickels-output").innerHTML = nickels;
    }
    else if (moneyChange < 5) {
        let nickels = Math.floor(moneyChange / 5)
        moneyChange = moneyChange % 5;
        document.getElementById("nickels-output").innerHTML = '0'
    }
    // pennies
    if (moneyChange >= 1) {
        let pennies = Math.floor(moneyChange / 1);
        moneyChange = moneyChange % 1;
        document.getElementById("pennies-output").innerHTML = pennies;
    }
    else if (moneyChange < 1) {
        let pennies = Math.floor(moneyChange / 1);
        moneyChange = moneyChange % 1;
        document.getElementById("pennies-output").innerHTML = '0'
        let result = calculateCost(pay, price)
    }
}
document.getElementById("calculate-change").addEventListener('click', handleClickEvent);