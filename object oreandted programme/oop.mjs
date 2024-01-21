// // let person1 = {
// //     name : 'nasir',
// //     age :23,
// // }

// // function Person(name,age,city,course){
// //     this.name = name
// //     this.age = age
// //     this.city = city
// //     this.course =course
// // }


// // class Student{
// //     #name;
// //     #age;
// //     #city;
// //     #course;
// //     #gender;
// //     #institute;

// //     constructor (name,age,city,gender,course){
// //         this.#name = name
// //         this.#age = age
// //         this.#city = city
// //         this.#course =course
// //         this.#gender = gender
// //         this.#institute = 'SMIT'

// //     }

// //     get name(){
// //         return this.#name
// //     }

// //     set name(new_name){
// //         if (new_name==='hamza'){
// //             console.log(`You can have not a name ${new_name}`)
// //         }
// //         else{
// //             this.#name = new_name
// //         }

        
// //     }


// // }


// // s1 = new Student('asad',23,'Lahore','Male','AI')
// // s2 = new Student('rehan',23,'Lahore','Male','AI')
// // s3 = new Student('sana',23,'Lahore','Male','AI')





// // class Vehicle 
// //     {
// //         constructor(color, currentSpeed, maxSpeed) 
// //             {
// //                 this.color = color;
// //                 this.currentSpeed = currentSpeed;
// //                 this.maxSpeed = maxSpeed;
// //                 }
// //         move() 
// //             {
// //                 console.log("moving at", this.currentSpeed);
// //             }
// //         accelerate(amount) 
// //             {
// //                 this.currentSpeed += amount;
// //             }
// //     }

// //     class Motorcycle extends Vehicle 
// //         {
// //             constructor(color, currentSpeed, maxSpeed, fuel) 
// //                 {
// //                 super(color, currentSpeed, maxSpeed);
// //                 this.fuel = fuel;
// //                  }
// //         doWheelie() 
// //             {
// //             console.log("Driving on one wheel!");}
// //             }

// //     m1 = new Motorcycle('Black',0,150, 'Petrol')

// document.write("Employee tracking app")

// class Employee
// {
//     constructor(firstName,lastName,workExperience)
//     { 
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.workExperience = workExperience
//     }
//     // Employee_detail(){
//     //     document.write(`
//     //     Employee name: ${this.firstName} ${this.lastName} <br>

//     //     workExperience: ${this.workExperience}<br>
//     //     =======================================================
//     //     <br>`

//     //     )
//     }
//     Employee.prototype.employee_detail= function(){
//         document.write(`
//         Employee name: ${this.firstName} ${this.lastName} <br>

//         workExperience: ${this.workExperience}<br>
//         =======================================================
//         <br>`

//         )

// }


// let e1 = new Employee('ali','khan',20)
// let e2 = new Employee('salman','khan',10)
// employee_list = [e1,e2]

// for (i=0;i<employee_list.length;i++){
//     employee_list[i].employee_detail()
// }





// // ################### task 2###########################


// document.write('menu items price calculator')

// class priceCalculator{
//     #item1 =99
//     #item2 = 199
//     constructor(quantity_items, qantity_2)
//     {
//         this.q_item1 = quantity_item1
//         this.q_item2 = quantity_item2

        
//     }
//     cost(){
//         total = this.q_item1*this.#item1 + this.q_item2*this.#item2
//         return total
//     }

// }

// var question = "Your species?"; 
// var defaultAnswer = "human"; 
// var spec = prompt(question, defaultAnswer);
// document.write(spec)

// var x = prompt("what is your neme?"); 
// document.write(x)
// if(x==="ali"){
//     document.write("welcome")
// }
// else if(x==="khan"){
//     document.write("closed")
// }
// else{
//     document.write("not you")

// }