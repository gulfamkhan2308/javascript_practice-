// // // // // // fucntion declaration
// // // // // function greet_user(){
// // // // //     document.write("welcome Mr Sohail <br>")
// // // // // }

// // // // // //calling a function

// // // // // greet_user() 
// // // // // greet_user()
// // // // // greet_user()
// // // // // greet_user()
// // // // // greet_user()

// // // // // // a fucntion with parameter :parametrized fuction

// // // // // function greet_user(username){
// // // // //     document.write(`Welcome Mr. ${username}`)
// // // // // }

// // // // // greet_user('ali ')

// // // // // ......................Kon bara hai......................

// // // // function konBaraHy(a,b){

// // // //     if (a > b){
// // // //         document.write("A bara hai <br>")

// // // //     }

// // // //     else{
// // // //         if( b > a){
// // // //             document.write("b bara hai <br>")
// // // //         }
// // // //         else{
// // // //             document.write("koi bara nahi hai <br>")
// // // //         }
// // // //     }


// // // // }
// // // // konBaraHy(20,13)
// // // // konBaraHy(20,20)

// // // //     ............................................................

// // // // write a function that calculate BMI.
// // // // ask user his weight and height.

// // // function BMI(W,H){
// // //  BMI = W/(H**2)
// // // return BMI     
// // // } 

// // // let weight = parseFloat(prompt("enter your weight"))


// // // let height = (parseFloat(prompt("enter your height")))/3.3

// // // let B= BMI(weight,height)

// // // alert (B)

// // // function BMI_Range(a){
// // //     if(a>=18.5){

// // //         return ("underweight")
// // //     }

// // //     else if(a<=18.5){

// // //         return ("normal")

// // //     }
// // //     else if(a>=25 && a<=29.5){
// // //         return ("over weight")
// // //     }
// // //     else{
// // //         return ("obese")
// // //     }

// // // }

// // // console.log(BMI_Range(B))


// // // .......................................................
// // //write a function that calculate tas over salary 
// // // 100k > 15%         salary*.15
// // //70k > 10%                 .10
// // //50k > 5%                  .05
// // //30k > 2%                  .02
// // // //else 1%                   .01
// // // //if some one pays tax more than 2k say  he is good citizn


let salary = prompt("enter your salary")

function taxRate(salary){
    if (salary>= 100000){
       return salary*.15
    }
    else if (salary>=70000){
        return salary*.10
    }
    else if (salary>= 50000){
         return salary*.05
        }
    else if (salary>= 30000){
        return salary*.02
    }
    else{
        return salary*.01
    }
    
}

let a = taxRate(parseFloat(salary))
if (a>=2000){
    document.write("you paid "+ a + " tax You are a good citizn")
}
else{
    document.write("you paid " + a +" Tax")
}

// // ......................................................................................

// // let day_of_week=prompt("enter the day of week").toLowerCase()

// // switch(day_of_week){
// //     case`monday`:
// //     console.log("gem chest day")
// //     break
// //     case `tuesday`:
// //     console.log("gem wings day")
// //     break
// //     case `wednesday`:
// //         console.log("gem bicepts day")
// //     break
// //     case `thursday`:
// //         console.log("gem tricepts day")
// //     break
// //     case   `friday`:
// //         console.log("gem shoulder day")
// //     break
// //     case `saturday`:
// //         console.log("gem mix day")
// //     break
// //     case `sunday`:
// //         console.log("gem off day")
// //     break
// //     default :
// //     console.log("enter a valid day name")
// // }

// // //*********************

// // let day_of_week=prompt("enter the day of week").toLowerCase()

// // switch(true){
// //     case day_of_week==`monday` ||day_of_week =='mon':
// //     console.log("gem chest day")
// //     break
// //     case day_of_week==`tuesday`||day_of_week== 'tue':
// //     console.log("gem wings day")
// //     break
// //     case day_of_week==`wednesday`||day_of_week== 'wed':
// //         console.log("gem bicepts day")
// //     break
// //     case day_of_week==`thursday`||day_of_week=='thur':
// //         console.log("gem tricepts day")
// //     break
// //     case  day_of_week==`friday`||day_of_week=='fri':
// //         console.log("gem shoulder day")
// //     break
// //     case day_of_week==`saturday`||day_of_week=='sat':
// //         console.log("gem mix day")
// //     break
// //     case day_of_week==`sunday`||day_of_week=='sun':
// //         console.log("gem off day")
// //     break
// //     default :
// //     console.log("enter a valid day name")
// // }

 
// //* ............................................

// var today = new Date()
// alert(today)
// alert(today.getDate())
// alert(getDay())

// var asad_valima_day = new Date ("jan 30, 2025 4:20")


