console.log("hellow world") 

// let name = "Nasir husain"
// let qualification = "MS"
// let university ="karachi"
// let birth_place = "karachi"
// let age = 30
// let profession = "software engineer"
// let organization = "modulers"
// let weight_inkg = 70
// let height_in_ft = 5.8
// let income_dollars = 1000

// let birth_year = 2023 - age
// let weight_inlbs = weight_inkg * 2.2
// let height_in_inches = height_in_ft * 12
// let income_inpkr = income_dollars *285
 


// function myIntro() {
//     document.write(
//         "Qualification: " + qualification + "<br>" +
//         "University: " + university + "<br>" +
//         "Birth Place: " + birth_place + "<br>" +
//         "Birth Year: " + birth_year + "<br>" +
//         "Age: " + age + "<br>" +
//         "Profession: " + profession + "<br>" +
//         "Organization: " + organization + "<br>" +
//         "Weight (kg): " + weight_inkg + "<br>" +
//         "Weight (lbs): " + weight_inlbs + "<br>" +
//         "Height (ft): " + height_in_ft + "<br>" +
//         "Height (inches): " + height_in_inches + "<br>" +
//         "Income (dollars): " + income_dollars + "<br>" +
//         "Income (PKR): " + income_inpkr + "<br>"
//       );
// }

// myIntro();  


    // student_name = "ahad sami"
    // teacher_name = "faisal"
    // employee_name = "hamid"

    // alert("welcome come to java script learning journey")
    // alert(1*2)
    // let myFirstName = "Gulfam "
    // let mySecondName = "khan"

    // alert(myFirstName + mySecondName)

    // let age = 45
    // console.log(age)
    // {
    //   let age = 60
    //   console.log(age)
    // }
    // console.log(age) //let is local

    // var marks = 80
    // console.log(marks)
    // {
    //   var marks = 90
    //   console.log(marks)
    // }
    // console.log(marks)


    // let birthYear = prompt("enter you birth year")
     
    // console.log(typeof birthYear)

    //  alert("your age is" + (2023-birthYear))

   
 
//     let num =Number(prompt("Enter a number: " ));

// //check if the number is even
// if ((num%2)==0) {
//     document.write("The number is even.");
// }

// // if the number is odd
// else {  
//   document.write("The number is odd.");
// }




// day = prompt("is it election day")
// if (day == "yes"){
 
//    list = prompt("your name in the list")
//   if (list == "yes"){

//     cnic = prompt ("cnic available")
//   if (cnic == "yes"){

//       alert ("you can cast the vote")
//   }

//   else {
//     alert("you can not cast the vote")
//   }
// }
// else {
//   alert("you can cast the vote")

// }
// }
// else {
//   alert("you can cast the vote")
// }





//          *******************aray***************************

// let students = ['Nasir Hussain', 'Arshid ali', 'Sohail ahmad', 'shakir','Khan']
// // alert(students [1])
// // alert(students [0])
// // alert(students [4])
// students.push("zahir")

// console.log(students[8])
// console.log(students[1].length)
// // console.log([0].tolowerCase())

// students.pop(0)
// document.write(students)
// // students.splice(2,0,"gulfam")
// // document.write(students)
// // slice_students = students.slice(2,4)
// // document.write(slice_students)

//**************programe */

// let txt = prompt("Enetr your text")

// alert('The')


//*****************loop .for loop,while loop,do while loop*/
// for(a=0; a<11; a++){
// document.write(a, "sohail khan <br>" )
// } 

//use of ary in for loop

let guests = ['kareem ullah','guli','shahid','zulkifal','zulkarnain','imran khan','ali khan','Ali jan']
for (let a = 0; a<guests.length; a++){
    // if(guests[a].startsWith('a') ||guests[a].startsWith('A'))
    if(guests[a].endsWith('l') )
// document.write(a, guests[a],  '<br>')
document.write(`Mr. ${guests[a]} you are invited to my birth day <br>`)
else {
    document.write(`Mr. ${guests[a]} sorry <br>`)
} 
}

let txt = prompt("enter you text here")
console.log(`the number of caracters in your text are : ${txt.length}`)
console.log(`the number if words in your txt are ${txt.split('').length}`)