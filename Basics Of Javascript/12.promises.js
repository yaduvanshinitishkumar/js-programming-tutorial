// ======================= Promises =========================
// Is used when have a function which takes some time to execute
/*

    Promises has two states: 
        1. Resolve
        2. Reject

*/

new Promise(function (resolve, reject) {
});

console.log("======================= Wrapping Promise =========================")

let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000); // data which is passed to resolve is always returned by the promise
});


console.log(myPromise);
myPromise.then(function (dataReturnByFunctionWhichTookSomeTime) {
   console.log(dataReturnByFunctionWhichTookSomeTime);
});
