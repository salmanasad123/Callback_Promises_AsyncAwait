console.log("Before...");

// whenever we use await our code should inside a function decorated with Async modifier

async function notifyCustomer() {
    const customer = await getCustomer(1);
    console.log('Customer', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log("Top Movies", movies);
        await sendEmail(customer.email, movies);
        console.log("Email sent..");
    }

}
// call the function here
notifyCustomer();

console.log("After...");


// for async and await we have to change our methods to return promise

function getCustomer(id) {
    // kick off any async work in executor of the promise 
    return new Promise(function (resolve, reject) {
        // async work
        setTimeout(function () {
            resolve({ id: 1, name: 'Mosh Hamedani', isGold: true, email: 'email' })
        }, 4000);
    });
}

function getTopMovies() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });

}

function sendEmail(email, movies) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 4000);
    });

}