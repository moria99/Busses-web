interface Passenger {
    name: string;
    age: number;
}

class busLine {
    public num: number;
    public originStation: string;
    public terminatingStation: string;
    public isTheLineOutOnTime: boolean;
    public arrayPassengers: Array<Passenger>;
    public price: number
    
    constructor(num: number, OriginStation: string, TerminatingStation: string,
        IsTheLineOutOnTime: boolean, ArrayPassengers: Array<Passenger>, Price: number) {
        this.num = num;
        this.originStation = OriginStation;
        this.terminatingStation = TerminatingStation;
        this.isTheLineOutOnTime = IsTheLineOutOnTime;
        this.arrayPassengers = ArrayPassengers;
        this.price = Price;
    }

    public totalPrice():number{
        let sum:number=this.price*this.arrayPassengers.length;
        return sum;
    }

    public Passenger(p:Passenger) {
        this.arrayPassengers.push(p);
    }

    public printDitails() {
        console.log(this.num+" "+this.originStation+" "+this.terminatingStation+" "+this.isTheLineOutOnTime+" "+this.arrayPassengers.length+" "+this.totalPrice()+" ");
    }
}

export{busLine,Passenger}