class person{

    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    dispalayDetails(){
        document.write(`Name: ${this.name}<br> Age: ${this.age}<br> Country: ${this.country}<br>=========<br>`)
    }
    }
    let p1 = new person("noshad",23,"Pakistan")
    let p2 = new person("zimran",16,"turkey" )
    
    p1.dispalayDetails();
    p2.dispalayDetails();


   



