const mysql = require('promise-mysql');

let db;

let connectionPromise= mysql.createPool({ //create conected to the data base
        connectionLimit: 100,
        host: "localhost",
        user: "root",
        password: "root",
        database: "angularbusses"
    })
    .then((c) => { //it happend after the conection success
        db = c;
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = {
    connectionPromise,
    getAllBusses,
    getAllPassengers,
    addBus
};

async function getAllBusses() {
    let d = db.query("select * from busses");
    let busses = await d;
    return busses;
}

async function getAllPassengers(){
    let d=db.query("select * from passengers")
    let passengers=await d;
    return passengers;
}

async function addBus(b){
    console.log(b);
    let d=db.query("INSERT INTO busses VALUES ("+b.num+", '"+b.originStation+"', '"+b.terminatingStation+"', "+b.isTheLineOutOnTime+", "+b.price+");")
}

