/*
Assuming that I have at my disposal

A. a JSON file wherein the values are stored as  data = {

                                                P1 : [1,2,3,4,5,6,7,8,8,,8,,,,,,],
                                                P2 : [1,2,2,3,2,3,4,2,4,,,],
                                                P3 : [1,2,3,4,5],
                                                B1:
                                                B2:


                                                            }


B. An array [B1,B2,P3,P1,B2];
That tells kisko sabse zayada zaroorat hai;
i take in that value at the index depending upon the time jabe hum trade kar rahe hai




C, I go to the prosumers P1, P2, P3 ke unn indices par and see kiske paas meri requirements fulfill karne ke liye energy hai,
Then i go to the prosumer with the least cost depending upon the LCOE


D. Matching of the Prosumer with the buyer and then logging out that the price, which the nex buyer will quote is the going to be 25% lower than what the current  trade happened at!!








*/

let prosumerCost = {"P1" : 8, "P2": 7, "P3": 7.5}


const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));


function sortArraysByValueIndex(index) {
    const keys = Object.keys(jsonData);
    return keys.sort((a, b) => jsonData[a][index] - jsonData[b][index]);
  }

function isProspectiveBuyer(buyerDeficit){
  if(buyerDeficit < 0)
    return true
  else  
    return false
}


function listOfSellers(buyerValue, obj){
  
  // You want to create another object containing only the positive values greater than x
  let prospectiveSellers = {};
  
  // Filter positive values greater than x
  for (let key in result) {
      if (result[key] > buyerValue && obj[key] > 0) {
          prospectiveSellers[key] = obj[key];
      }
  }
  
  // Sort keys of filteredObj
  let sortedKeysOfSellers = Object.keys(filteredObj).sort((a, b) => filteredObj[a] - filteredObj[b]);
  
  // Create a new object with sorted keys and original values
  let sellersList = {};
  sortedKeysOfSellers.forEach(key => {
      sellersList[key] = obj[key];
  });
  
  console.log(sellersList); // Output: { f: 6, b: 7, c: 9 }
    return sellersList
  
  }
  











// function matchProsumersWithBuyers(prosumers, buyers)

 for (let i = 0; i < 24; i++) {
    const sortedKeys = sortArraysByValueIndex(i);

    var result = {};

    sortedKeys.forEach(key => {
      result[key] = jsonData[key][i];
    });

     // console.log(`Hour ${i + 1}:`, result);

    var keyArr = Object.keys(result);
    var valueArr = Object.values(result);

    // for(let j = 0; j < 5; ++j){
    //   console.log(keyArr[j], valueArr[j]);
    // }

   console.log('The first buyer of Hour ' + (i + 1) + ': is ' + keyArr[0] + " with a value of " + valueArr[0]);



   var buyer1 = keyArr[0];
    var buyer2 = keyArr[1];
    var buyer3 = keyArr[2];
    var buyer4 = keyArr[3];
    var buyer5 = keyArr[4];

    let sellersOfThisHour = {}

    for (let key in result) {
      if (result[key] > 0) {
          sellersOfThisHour[key] = result[key];
      }
  }



    /// starting the algo
    for(let i = 1; i < 4; ++i) {
      let buyerName = keyArr[i];
      let buyerValue = valueArr[i]
      if(isProspectiveBuyer(valueArr)){
        //have a list of prosumers jinka surplus is greater than the 
      let currListOfSellers = listOfSellers(buyerValue,sellersOfThisHour)
      


      }

      
    }  
   
  }












/* Assuming taht we have

 => a market price from the previous transaction, a list of buyers and a list of sellers, the second most hungry buyer

what to do ->

sabse pehle check karo, ki prospective buyer ka deficit negative toh hai na

agar hai
  then
    find the list of the sellers which can have the availability to meet the demand requirements ki list and arrange them in the order of the price that they are quoting


   agar list mei kpoi bhi hai then get that seller jo 1st position mei hai,


    if the quoted price by buyer >= seller quoted price then subhan allah, trade happens at the price at which the seller wants to buy

    and this price becomes the market price for thte next trade


    agar price quoted by the buyer  <= price quoted by the seller then bidding war start ho jayegi sabse saste wale seller ke saath

    jaise hee unn dono ka price cross hua, trade happens and now the surplus of the prosumer is redused by the absolute value of the deficit of consumer to now participate for the trade in the same hour with the next buyer

   agar available seller ki list hee khali hai to move on to the next prospective buyer



agar prospective buyer hee nhi hai toh uss ghante ke trades band kardo and move on to the next hour!!









if there is only 1 prosumer then good we will have the bidding wr with only one prosumer, if there are multiple prospective prosumers then we say ki bidding war will happen with the cheapest prospective prosumer and set the market price for the next trade



*/