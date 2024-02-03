class Employee {
    constructor(name,salary){
        this.name = name;
        this.salary = salary;

    }
    calculateAnualSalary(){
        return this.salary * 12;
    }
}

class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department = department;
        
    }
    calculateAnualSalary(){
        let bouns = 2/10 *this.salary 
        return super.calculateAnualSalary() + bouns;
    }
}

let manager1 = new Manager("John Doe", 60000, "Sales");
let manager2 = new Manager("Jane Smith", 75000, "Marketing");

// console.log(`Anual salary: ${manager1.caculateAnualSalary()}`)
console.log(`${manager1.name} (${manager1.department}) Annual Salary: $${manager1.calculateAnualSalary()}`)