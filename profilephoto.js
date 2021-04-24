var fetch = require('node-fetch')


async function getName() {
var data = await fetch('https://api.scratch.mit.edu/users/Clxoud_Nine')
var json = await data.json()
console.log(json["profile"]["images"]['90x90'])
}
getName()