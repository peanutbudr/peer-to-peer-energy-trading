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
   
   
  }


// B1: -3.080809166666667,
// B2: -3.0411,
// P3: -2.911923333333334,
// P1: -2.437372,
// P2: -1.96195

// B2: -3.532566666666666,
// P3: -3.477766666666667,
// B1: -3.0602934,
// P1: -2.47058085,
// P2: -1.8954