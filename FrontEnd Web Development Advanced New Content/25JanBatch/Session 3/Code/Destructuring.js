/**
 * Created by SaiKiran on 01/02/17.
 */
// let salary = [ '30000', '40000'];
// let low, average, high;
//
// [low, average, high='80000']  = salary;

//console.log(high);

// let salary = {
//     low : '30000',
//     average : '50000',
//     high: '70000'
// };
//
// let newLow, newAverage, newHigh;
//
// ({low:newLow, average:newAverage, high:newHigh} = salary);
//
// console.log(newHigh);

// try {
//     let [minCode, maxCode] = [200, 500];
//
//     console.log(`min: ${minCode} max: ${maxCode}`)
// }catch(e){
//     console.log(e.name);
// }

for(let [a,b] of [ [5, 10], [2,3], [6,7] ]){
    console.log(`${a}, ${b}`);
}