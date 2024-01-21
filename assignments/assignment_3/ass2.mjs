class vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(){
        document.write(`Make: ${this.make}<br> Model: ${this.model}<br> Year: ${this.year}<br>=================<br>`)

    }
}

class car extends vehicle{
    constructor(make,model,year,numDoors){
        super(make,model,year);
        this.numDoors = numDoors;
    }
displayDetails(){
    super.displayDetails();
    document.write(`Number of doors: ${this.numDoors}`)

}        
}
let myCar = new car("Honda","civic",2024,2)
myCar.displayDetails()
