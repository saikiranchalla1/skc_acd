/**
 * Created by saikiranchalla on 12/17/2016.
 */
function doAsync() {
    let p = new Promise(function(resolve, reject){

    console.log('in promise code');
    setTimeout(function(){
        console.log('resolving');
        reject('Database Error');
        //resolve("OK");
    }, 5000);
});
    return p;
}

let promise = doAsync();
// promise.then(function(value){
//     console.log('Fulfilled...' + value);
// }, function (reason) {
//     console.log('rejected: ' + reason);
// });

// promise.then(function(value) {
//     console.log('Fulfilled...'  + value);
//     return 'For sure';
// }).then(function(value) {
//     console.log('Really!!! ' + value);
// });

promise.catch(function (reason) {
    console.log('Error:  ' + reason);
});