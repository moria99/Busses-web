//require('dotenv').config(); //anable decleare veriable in env from hide this veriable in gitHub
const express = require('express'); //run express direectory (at js) and put an output in it.
const dbModule = require("./dbModule.js");
const port = 3000 ;
const app = express();

//use is happand before every requst
app.use(express.json()); //parse the body to comfortable used
app.use(express.urlencoded()); //parse the url to comfortable used
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
//in express module i can used with server more eazy
app.get('/bussesTable',async function (req, res) {
     console.log("1");
     let busses=await dbModule.getAllBusses();
     res.send(busses) ;
});

//in express module i can used with server more eazy
app.get('/allPassengers',async function (req, res) {
     console.log("2");
     let passengers=[];
     dbModule.connectionPromise
     .then(() => {
        dbModule.getAllPassengers()
             .then((d) => {
                passengers = d;
                 res.send(passengers) ;
            });
     });
});

app.post('/addBus',async function (req, res) {
     console.log("3");
     dbModule.connectionPromise
     .then(() => {
        dbModule.addBus(req.body)
             .then((d) => {
                 res.send(d) ;
            });
     });
});

app.listen(port, () => {
    console.log("I listen to port " + port);
}); 

