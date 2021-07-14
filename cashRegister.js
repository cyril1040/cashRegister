const DENOMINATION = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000]
]
function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round((cash - price) * 100);
  let cashInDrawer = {}
  let cashToGive = {}
  cid.forEach(function(denomination){
    cashInDrawer[denomination[0]] = Math.round(denomination[1]*100)
  })
  let index = DENOMINATION.length -1;

  while(index >= 0 && amountToReturn > 0){
    let moneyName = DENOMINATION[index][0]
    let moneyValue = DENOMINATION[index][1];

    if(amountToReturn - moneyValue > 0 && cashInDrawer[moneyName], amountToReturn){
      cashToGive[moneyName] = 0
      while(cashInDrawer[moneyName] > 0 && amountToReturn - moneyValue >= 0){

        cashInDrawer[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue
        amountToReturn -= moneyValue


      }

    }

    index -=1
  }
  console.log(cashToGive, amountToReturn)

  if(amountToReturn === 0){
    let isRegisterEmpty = true;

    Object.keys(cashInDrawer).forEach(function(moneyType){
      if(cashInDrawer[moneyType] > 0){
        isRegisterEmpty = false;
      }
    })

    if(isRegisterEmpty){
      return {status: "CLOSED", change: cid}

    }else{
      let changeArray = [];
    Object.keys(cashToGive).map(function(moneyType){
      if(cashToGive[moneyType] > 0){
        changeArray.push([moneyType, cashToGive[moneyType] / 100])
      };

    })
    return {status: "OPEN", change: changeArray};
    }

  }
  return {status: "INSUFFICIENT_FUNDS", change: []}


}
let cid =[
  ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
  ]


let res = checkCashRegister(3.26, 100, cid);
console.log(res)
