'use strict';

// NOTE: Don't change the port number
const PORT = 3000;

const e = require("express");

const express = require("express");
const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

//microservice-get news

var request = require('request');


app.post("/news", (req, res) =>  {
    var query = req.body.search;

    var url = `https://microservice-news-app.herokuapp.com/${query}`
    

    request(url, function(err, response, body) {
        console.log(url);

        res.send(JSON.parse(body));
        
});
});


// code smell-This function is very long, but I don't think 
// I need to split it into several small functions, because in this 
// function, I define the number of buttons in different submission 
// situations, which must be defined. Thank you
     
 app.post("/", (req, res) =>  {
    console.log(req.body.d1);
    console.log(req.body.d2);
    console.log(req.body.d3);
    console.log(req.body.d4);
    
    let D1 = req.body.d1; 
    let D2 = req.body.d2; 
    let D3 = req.body.d3; 
    let D4 = req.body.d4; 
  

    let price1;
    let price2;
    let price3;
    let price4;
    

    let result;

 

    if(D1 === '1'){
        price1 = 15;
    }else if(D1==='2'){
        price1 = 17;
    }else if(D1==='3'){
        price1 = 10;
    }else if(D1==='4'){
        price1 = 30;
    }else if(D1==='5'){
        price1 = 8;
    }else if(D1==='6'){
        price1 = 10;
    }

    if(D2 === '1'){
        price2 = 15;
    }else if(D2==='2'){
        price2 = 17;
    }else if(D2==='3'){
        price2 = 10;
    }else if(D2==='4'){
        price2 = 30;
    }else if(D2==='5'){
        price2 = 8;
    }else if(D2==='6'){
        price2 = 10;
    }

    if(D3 === '1'){
        price3 = 15;
    }else if(D3==='2'){
        price3 = 17;
    }else if(D3==='3'){
        price3 = 10;
    }else if(D3==='4'){
        price3 = 30;
    }else if(D3==='5'){
        price3 = 8;
    }else if(D3==='6'){
        price3 = 10;
    }


    if(D4 === '7'){
        price4 = 8;
    }else if(D4==='8'){
        price4 = 5;
    }else if(D4==='9'){
        price4 = 30;
    }

    
    console.log(price1);
    console.log(price2);
    console.log(price3);
    console.log(price4);
    result = price1+price2+price3+price4;
    console.log(result);

    if(result > 70){
        res.send("Congratulations! The coupon has been sent to your email. \
        If you want to play again, please click the back button.");
    
    }else{
        res.send("Unfortunately, you did not pass the game. You can go back and play again!");
    }
    
    
});



app.post("/submit", (req, res) =>  {
   
    res.send("Submitted successfully! Our staff will \
    contact you within three days, please pay attention to your email.");
       
 });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
