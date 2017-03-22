function doAsync(){
    // let p = new Promise(function(resolve, reject){
    //     console.log("in promise code");
    //     setTimeout(function(){
    //         //console.log("resolving...");
    //         console.log("rejecting...");
    //         resolve(getAnotherPromise());
    //         //reject("Database error");
    //     }, 2000);
    // });
    //
    // return p;

    return Promise.resolve("Some string");
}

function getAnotherPromise(){
    let p = new Promise(function(resolve, reject){
        console.log("in promise code");
        setTimeout(function(){
            //console.log("resolving...");
            console.log("resolving 1.x...");
            resolve();
            //reject("Database error");
        }, 2000);
    });

    return p;
}


//let promise = doAsync();
// doAsync().then(function(value){
//     console.log("Fulfilled: "+ value);
// }, function (reason) {
//     console.log("Rejected: "+ reason);
// });

// doAsync().catch(function (reason) {
//     console.log('Error: ' + reason);
// });

// doAsync().then(function(){
//     console.log("OK");
// }, function () {
//     console.log("Nope");
// })
//

// doAsync().then(function (value) {
//     console.log("OK: "+ value);
// }, function (reason) {
//     console.log("Failed: "+ reason);
// });

let p1 = new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("resolving 1...");
        //resolve();
        reject("Database error");
    }, 3000);
});

let p2 = new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("resolving 2...");
        resolve();
        //reject("Database error");
    }, 5000);
});

// Promise.all([p1, p2]).then(function (value) {
//     console.log("OK: "+ value);
// }, function (reason) {
//     console.log("Failed: "+ reason);
// });

Promise.all([p1, p2]).then(function (value) {
    console.log("OK: "+ value);
}, function (reason) {
    console.log("Failed: "+ reason);
});

