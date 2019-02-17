console.log("Before...");

const p = getCustomer(1);
p.then(function (customer) {
    console.log("Customer", customer);
    if (customer.isGold) {
        getTopMovies()
            .then(function (movies) {
                console.log("Top movies", movies);
                sendEmail(customer.email, movies)
                    .then(function () {
                        console.log("Email sent...");
                    });
            });
    }
});





console.log("After...");


// for promise we have to change our methods to return promise

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