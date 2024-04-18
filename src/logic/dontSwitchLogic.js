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

let marketPrice = -100;

const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

//console.log(jsonData);
// Example JSON data
// const jsonData = [
//     { key: "array1", values: [-60, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49] },
//     { key: "array2", values: [-4, -6, -8, -10, -12, -14, -16, -18, -20, -22, -24, -26, -28, -30, -32, -34, -36, -38, -40, -42, -44, -46, -48, -50] },
//     { key: "array3", values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
//     { key: "array4", values: [-15, -17, -19, -21, -23, -25, -27, -29, -31, -33, -35, -37, -39, -41, -43, -45, -47, -49, -51, -53, -55, -57, -59, -61] },
//     { key: "array5", values: [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10, -12, -14, -16, -18, -20, -22, -24, -26] }
// ];

// function sortArraysByValueIndex(index) {
//     // Sort the arrays based on the value at the specified index
//     return jsonData.sort((a, b) => a.values[index] - b.values[index]);
// }

// for (let i = 0; i < 24; i++) {
//     const sortedData = sortArraysByValueIndex(i);
//     const result = {};

//     sortedData.forEach(item => {
//         result[item.key] = item.values[i];
//     });

//     console.log(result);
// }



function sortArraysByValueIndex(index) {
    const keys = Object.keys(jsonData);
    return keys.sort((a, b) => jsonData[a][index] - jsonData[b][index]);
}



function isProspectiveBuyer(buyerDeficit){
  if(buyerDeficit < 0){
    return true
  }
    
  else{  
    return false
  }
  
}


function listOfSellers(buyerValue, obj){

  // You want to create another object containing only the positive values greater than x
  let prospectiveSellers = {};

  // Filter positive values greater than x
  for (let key in obj) {
      if (obj[key] > Math.abs(buyerValue)) {
          prospectiveSellers[key] = obj[key];
      }
  }

  return prospectiveSellers

}

function biddingWar(buyerAskPrice,sellerAskPrice){
  let a = buyerAskPrice
  let b = sellerAskPrice
  while(b > a){
    a = a + 0.1
    b = b - 0.1 
  }
  return a
  
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
  // console.log('The first buyer of Hour ' + (i + 1) + ': is ' + keyArr[0] + " with a value of " + valueArr[0]);



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
  // let masterobj = { 'a': 3, 'b': 1, 'c': 2 };
  // let secondaryobj = { 'b': 'apple', 'a': 'banana', 'c': 'orange' };
  // Convert secondaryobj to an array of key-value pairs
  let secondaryArray = Object.entries(sellersOfThisHour);

  // Sort the secondaryArray based on the values of masterobj
  secondaryArray.sort((a, b) => prosumerCost[a[0]] - prosumerCost[b[0]]);

  // Convert back to an object
  sellersOfThisHour = Object.fromEntries(secondaryArray);

  // console.log(sortedSecondaryobj);

  //Yahan pe rushabh ka function aayega assuming ki we have either the market value or the confirmation that the trade did not happen
  



  /// starting the algo
  for(let j = 0; j <= 4; ++j) {
    console.log("")
    console.log("")
    console.log("")
    let buyerName = keyArr[j];
    let buyerValue = valueArr[j]
    if(isProspectiveBuyer(valueArr[j])){
      //have a list of prosumers jinka surplus is greater than the 
      let currListOfSellers = listOfSellers(buyerValue,sellersOfThisHour)
      // console.log("this is hour " + (i+1) + " buyername " + buyerName + " and the value is " + buyerValue + " and the list of sellers is ")
      console.log(currListOfSellers)
      let noSellers = (Object.keys(currListOfSellers).length === 0);
      if(noSellers){
        console.log("For " + buyerName+ " at " + buyerValue + " at hour " +(i+1) +" no sellers")
      }
      else{
        /*Now we know that we will have sellers for this buyer
        we need to start from the first seller and then check if the seller has the ability to sell to the buyer

        agar uss list mei se humme ek seller mill jaata hai 
        sabse pehle market price check karo
        agar toh mkt price -100 hai toh jo bhi seller price maang rha hai uss price pe trade kardo and make that as the mkt price
        ,warna agar mkt price kuch defined hai toh make a variable buyer quoted price  = mkt price - 20% and then compare that with the seller price and          start the biding war wala function
        */

        // for(let key in currListOfSellers){
        // let sellerName = key
        // let sellerValue = currListOfSellers[key]
          
        //   if(currListOfSellers[key] >= buyerValue){
        //     console.log("We have a buyer for " + buyerName + " at " + buyerValue + " at hour " + (i+1) +"seller name" + sellerName + "with value" +            sellerValue)
        //   }
        //   else{
        //     console.log("No seller available for " + buyerName + " at " + buyerValue + " at hour " + (i+1))
        //   }
        // }



        let sellerName = Object.keys(currListOfSellers)[0]
        let sellerValue = currListOfSellers[sellerName]

        if(marketPrice == -100){
          console.log("trade has happenned" + " between " + sellerName + " and " + buyerName + " at hour " + (i+1)  + " at a price of " +       
          prosumerCost[sellerName] + " buyerValue was " + buyerValue + " seller was giving " + sellerValue)
          marketPrice = prosumerCost[sellerName]
          sellersOfThisHour[sellerName] -= Math.abs(buyerValue)   
        }
        else{
          let buyerAskPrice = marketPrice - (marketPrice * 0.25)
          let sellerAskPrice = prosumerCost[sellerName]
          
          if(buyerAskPrice >= sellerAskPrice){
            console.log("Trade ho gayii bina bidding war kare" + " between " + sellerName + " and " + buyerName + " at hour" + (i+1) +"at a price of" +               buyerAskPrice)     
           }
          else{
            console.log("Bidding war is happening")
            marketPrice = biddingWar(buyerAskPrice,sellerAskPrice)
            console.log("Trade ho gayii " + " between " + sellerName + " and " + buyerName + " at hour " + (i+1) +" at a price of " + marketPrice + " sellerValue " + sellerValue + " buyerValue " + buyerValue + " buyerAskPrice " + buyerAskPrice + " sellerAskPrice " + sellerAskPrice) 
            
            
          }
           sellersOfThisHour[sellerName] -= Math.abs(buyerValue)   
        }   
        // console.log(currListOfSelle //    console.log("above is the list of sellers for " + buyerName + " at " + buyerValue + " at hour " +(i+1))
             
      }  

    }
      
    else{
      console.log("The buyer " + buyerName + " is not prospective" + buyerValue)
    }


  }  

   


}






