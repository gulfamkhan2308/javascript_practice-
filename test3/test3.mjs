
    // Array to store student information
    var students = [];

    // Function to add student information to the array
    function addStudent() {
        var name = document.getElementById("name").value;
        var id = document.getElementById("id").value;
        var age = document.getElementById("age").value;

        // Check if the ID already exists
        var existingStudent = students.find(function(student) {
            return student.id === id;
        });

        // If the ID already exists, display an error message
        if (existingStudent) {
            alert("Student with this ID already exists. Please enter a unique ID.");
            return;
        }

        // Create a student object
        var student = {
            name: name,
            id: id,
            age: age
        };

        // Add the student object to the array
        students.push(student);

        // Reset form fields
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("age").value = "";

        console.log("Student added successfully!");
        console.log(students);
    }

    // Function to retrieve student information by ID
    function retrieveStudent() {
        var searchId = document.getElementById("searchId").value;

        // Find the student with the given ID
        var student = students.find(function(student) {
            return student.id === searchId;
        });

        // Display the student information
        if (student) {
            document.getElementById("result").innerHTML = "Name: " + student.name + "<br>ID: " + student.id + "<br>Age: " + student.age;
        } else {
            document.getElementById("result").innerHTML = "Student not found!";
        }
    }

    // Function to handle Enter key press
    function handleEnterKey(event) {
        if (event.keyCode === 13) { // Check if the key pressed is Enter
            addStudent(); // Call the addStudent function when Enter is pressed
        }
    }
