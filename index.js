// My simple calculator
//addition of numbers
const express= require('express')
const bodyParser = require('body-parser')
const app = express();
app.get('/', (req, res) => {
if(req.url = '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is homepage.</p></body></html>');
    res.end();
}
else if(req.url = '/sum'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
res.send(`<html><body><p>${sum(n= [10,6,4,7])}</p></body></html>`)
res.end()
}
else if(req.url = '/product'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
res.send(`<html><body><p>${product(num = [5,6,7,8])}</p></body></html>`)
res.end()
}
else('unknown request')

})
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
};
app.listen(3000)
console.log('app running on port 3000...')