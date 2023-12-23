let emails = ['aghanhussain@gmail.com', 'bobllo@yahoo.com',
              'khalil@gmail.com', 'ali@gmail.com']
let passess = ['12345678','abcd','khange','khan']



function checkAddress(email, pwd) {
    let useremail = document.getElementById(email).value;
    let userpassword = document.getElementById(pwd).value;
    if ( useremail !== "" && userpassword !== "") {

        if (emails.includes(useremail)&& passess.includes(userpassword)){
            if (emails.indexOf(useremail)== passess.indexOf(userpassword)){

        document.write(`Welcome: ${useremail}`)

        }
        else{
            alert("Invalid Email address or pasword")
        }



             
    }
    else{
        alert("Please enter both email and password")
    }

 }
else{
    alert("plese enter an email and password")
}
 }
//  //function fillCity() {
//     var cityName;

//     var zipEntered = document.getElementById("zip").value;

//     switch (zipEntered) {
//         case "60608" :
//             cityName = "Chicago";
//             break;
//         case "68114" :
//             cityName = "Omaha";
//             break;
//         case "53212" :
//             cityName = "Milwaukee";
//             break;
//         default:
//             cityName='Peshawar'
//         }
//     document.getElementById("city").value = cityName;
//     }