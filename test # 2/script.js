let myArry = []

function saveData(){
    let students = document.getElementById('dataInput').value;
    myArry.push(students);
    document.getElementById('myForm').reset();
    console.log("MY ARRAY:",myArry);
}


