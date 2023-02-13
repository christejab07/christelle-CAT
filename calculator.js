// My simple calculator
//addition of numbers
const express= require('express')
const bodyParser = require('body-parser')
const app = express();
app.get('/', (req, res) => {

function sum(n = [values]){
var sumation = 0;
for(let i = 0; i< n.length; i++){
sumation += n[i];
}
    return sumation;
}

//multiplication of numbers
function product(num = [value]){
    var product = 1;
    for(let i = 0; i< num.length; i++){
        product *= num[i]
    }
    return product;
}
res.send(`<html><body><p>${product(num = [5,6,7,8])}</p></body></html>`)
})
app.listen(3000)
console.log('app running on port 3000...')