// ======================= Then Catch =========================

const axios = require('axios'); // axios is a package to make api call

// ======================= Old Syntax [ES5]=========================
function makeCallToDatabase() {
    axios('https://dummyjson.com/products/1') // axios return type here is promise as request will take time to execute
        .then(function (response) {  // then can be called on any function which returns promise object
            //  response: is the data returned by the api call
            // Success response
            console.log("response: " + response)
        }).catch(function (err) {
            //  err: is the error occurred during the api call or inside the then block
            // Error response
            console.log(err);
        })
}
makeCallToDatabase()

// ======================= Async Await [ES5] =========================

// async function makeCallToDatabase2() {
//     try {
//         const response = await axios('https://dummyjson.com/products/1');
//         console.log("response: " + response)
//     } catch (err) {
//         console.log(err);
//     }
// }
// makeCallToDatabase2()


// ======================= Async Await [ES6] =========================

const makeCallToDatabase2 = async () => {
    try {
        const response = await axios('https://dummyjson.com/products/1');
        console.log("response: " + response)
    } catch (err) {
        console.log(err);
    }
}
makeCallToDatabase2()
