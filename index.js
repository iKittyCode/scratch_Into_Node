var Scratch = require('scratch-api');
const fetch = require('node-fetch');
Scratch.UserSession.load(function (err, user) {
    user.cloudSession(10000 /*project id*/, function (err, cloud) {
        function timeout() {
            setTimeout(function () {
                //get the data from whatever way you like (fetch is cool btw so i will use it here)
                fetch('https://api.scratch.mit.edu/users/poter234/messages/count')
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                timeout();
            }, 5000 /*time in milliseconds to check for and update, never ever go lower than 10 a second!!!*/);
        }
        timeout() //a loop
    });
});
