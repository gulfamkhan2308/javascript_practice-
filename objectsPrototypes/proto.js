// let student={

//     name : 'asad',
//     siblings : ['ammar','ayesha'],
//     address : {house:244,city:'peshawer'},
//     age :23,
//     course:'AICB',
//     gender:"male"
    

// }

// for (key in student){
//     if (key==='course'|| key==='genser'){
//     console.log(key,student[key])
// }
// }

// console.log(student['siblings'][0])
// console.log(student['address'].city)


// ########### Object Contsructor ##########

// Constructor  functuon

// function Person(name,age,gender,cnic){
//     this.name = name,
//     this.age = age,
//     this.gender = gender;
//     this.cnic = cnic

// }

// let p1 = new Person('kaleemullah',23,'male','12345')
// let p2 = new Person('Nasir',30,'male','456235')

// console.log(p1)
// console.log(p2)


// function Plan(name, price, space, transfer, pages, discountMonths) 
// {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;

//     this.calcAnnual = function() 
//     {
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth()+1;

//         for (var i = 0; i < this.discountMonths.length; i++) 
//         {
//             if (this.discountMonths[i] === thisMo) 
//                 {
//                 bestPrice = this.price * .80;
//                 break;
//                 }
//         }
//         return bestPrice * 12;
//     };
// }

// myPlane = new Plan('advance',99.99,1000,5000,500,[6,12])
// apkaPlane = new Plan('basic',50.99,100,500,50,[1,6,12])

// console.log(myPlane.calcAnnual());  // Log the result for myPlane
// console.log(apkaPlane.calcAnnual());  // Log the result for apkaPlane



// function Person(name,age,gender,cnic){
//     this.name =name,
//     this.age = age,
//     this.gender=gender,
//     this.cnic=cnic
// }


// let p1 = new Person('kaleemullah',23,'male','12345')
// let p2 = new Person('Nasir',30,'male','456235')


// function Plan(name, price, space, transfer, pages, discountMonths) 
// {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;

//     }

// Plan.prototype.calcAnnual = function() 
// {
// var bestPrice = this.price;
// var currDate = new Date();
// var thisMo = currDate.getMonth()+1;

//     for (var i = 0; i < this.discountMonths.length; i++) 
//     {
//         if (this.discountMonths[i] === thisMo) 
//             {
//             bestPrice = this.price * .80;
//             break;
//             }
//     }
//     return bestPrice * 12;
// };

// myPlan = new Plan('Advance',99.99,1000,5000,500,[6,12])
// apkaPlan = new Plan('Basic',50.99,100,500,50,[1,6,12])




// function checkForLastName() 
//     {
//          if (document.getElementById("lastNameField").value.length === 0) {
//          alert("Please enter your last name");
//          return false;
//             }
//     }
    let a = document.getElementsByClassName("head1_class")[0]
    console.log(a.innerHTML)

    let b = document.getElementById("para2_id")
    console.log(b.innerText)

    let c = document.getElementsByTagName("p")
    console.log(c)