var Scratch = require('scratch-api');
Scratch.UserSession.load(function (err, user) {
function post() {
    addComment({
        user:"poter234",
        content:"like my projects"
    }, (err) => {
     if (err) {
         console.error(err)
         return;
   
     }
    })
}
})
