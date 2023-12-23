// let person = {
//     gander: "male",
//     age: 14,
//     Name: "sohail khan"
    
    
// }
// //console.log(person);

// //.......................

// // let labrary = {
// //     booksno: 100,
// //     booksName: "pakistan history","propet muhammad PBUH ETC"
// //     qualiti 


// // }


// // // ***************** operation on object *****************
// // access properties
// //         one by one
// //         loop through whole object
// //     update properties
// //     delete propertiesadd properties

// // Accessing properties 
// console.log(person.Name)
// console.log(person['age'])
// // delet an object Property

// delete person.age

// // add a new Property to an Object

// person.martial_status = 'Married'
// person.nationality = 'pakistan'
// delete person.nationality

// /* looping and Object Properties */

// // .................via for in loop ......

// for(key in person){
//     if(key != 'qualifiacation'){
//     document.write(`${key}: ${person[key]}`)
// }
// }


///////////////////////////////////////////////////////////////
//console.console(patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10)

let patient1 = {p_id :1, ward: 'general', doctor:'Dr. Ali',disease:'flu',age:22}
let patient2 = {p_id :6, ward: 'general', doctor:'Dr. faisal',disease:'sugar',age:23}
let patient3 = {p_id :8, ward: 'general', doctor:'Dr. Saleem',disease:'bp',age:44}
let patient4 = {p_id :144, ward: 'general', doctor:'Dr. Ali',disease:'cancer',age:24}
let patient5 = {p_id :133, ward: 'general', doctor:'Dr. javid',disease:'cancer',age:55}
let patient6 = {p_id :1444, ward: 'general', doctor:'Dr. Gul',disease:'hcv',age:45}
let patient7 = {p_id :15, ward: 'general', doctor:'Dr. shahid',disease:'flu',age:76}
let patient8 = {p_id :122, ward: 'general', doctor:'Dr. zia',disease:'flu',age:88}
let patient9 = {p_id :14, ward: 'general', doctor:'Dr. tabasum',disease:'flu',age:66}
let patient10 = {p_id :18, ward: 'general', doctor:'Dr. farhan',disease:'flu',age:100}

let patients_list = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10]

// for (let a=0; a<=patients.length; a++){

//     for (key in patients[a]){
//         if (key=='disease'){
//             if (patients[a][key]=='flu'){
//               console.log(patients[a]['p_id'])
//             }
//         }
//     }
// }

//who are the doctors for cancer

for (let a=0; a<patients_list.length; a++){
    for (key in patients_list[a]){
        if (key=='disease'){
            if(patients_list[a][key]=='cancer' ){
                document.write(patients_list[a]['doctor'] + '<br>' )
            }
        }
    }
}

