
import { Branch } from "./branch.js";
class Bank{
    constructor(bankName,branches=[]){
        this.bankName = bankName;
        this.branches = branches;
    }

    addBranches(newbranch){
        let branchExsist = false;
       for(let i=0;i<this.branches.length;i++)
           if(this.branches[i].code === newbranch.code){
             branchExsist = true;
             break;
            }
    }

    if(!branchExsist){
        this.branches.push(newBranch);
        alert('branch added successfully')
    } else{
        alert('Invalid brach: Branch with this branch code already exists')
    }

    removeBranch(bankName){
        
    
    }

displayBranches(){

}

}

//instances
let apnaBank = new Bank('ApnaBank, []');

//objects

apnaBank.addBranches();

apnaBank.removeBranch();

apnaBank.displayBranches();





// class Bank {
//     constructor(bankName, branches = []) {
//       this.bankName = bankName;
//       this.branches = branches;
//     }
  
//     addBranch(name, code, contact, email, manager) {
//       if (this.isBranchEmpty(name, code, contact, email, manager) || this.isBranchExists(name)) {
//         console.log(`Branch '${name}' cannot be added.`);
//       } else {
//         this.branches.push({ name, code, contact, email, manager });
//         console.log(`Branch '${name}' added successfully.`);
//       }
//     }
  
//     removeBranch(name) {
//      const index = this.branches.findIndex(branch => branch.name === name);
//       if (index !== -1) {
//         this.branches.splice(index, 1);
//         console.log(`Branch '${name}' removed successfully.`);
//       } else {
//         console.log(`Branch '${name}' not found.`);
//       }
//     }
  
//     displayBranches() {
//       console.log(`Branches of ${this.bankName}:`);
//       this.branches.forEach(branch => {
//         console.log(`Name: ${branch.name}, Code: ${branch.code}, Contact: ${branch.contact}, Email: ${branch.email}, Manager: ${branch.manager}`);
//       });
//     }
  
//     isBranchExists(name) {
//       return this.branches.some(branch => branch.name === name);
//     }
  
//     isBranchEmpty(name, code, contact, email, manager) {
//       return !name || !code || !contact || !email || !manager;
//     }
//   }
  
//   // Instances
//   let apnaBank = new Bank('ApnaBank');
  
//   // Example usage
//   apnaBank.addBranch('SaddBranch', 123, 12345789, 'abc@gmail.com', 'Nasir');
//   apnaBank.addBranch('gulburgBranch', 456, 98765432, 'xyz@gmail.com', 'sohail');
//   apnaBank.addBranch('cityBranch',345,4567890,'ghj@gmail.com','gulfam')
  
// //   apnaBank.displayBranches();
  
// //   apnaBank.removeBranch('SaddBranch');
  
// //   apnaBank.displayBranches();
  

//====================================

// Import the Branch class
import { Branch } from "./branch.js";

class Bank {
    constructor(bankName, branches = []) {
        this.bankName = bankName;
        this.branches = branches;
    }

    addBranch(newBranch) {
        if (!this.branches.some(branch => branch.name === newBranch.name)) {
            this.branches.push(newBranch);
            alert("Branch added successfully");
        } else {
            alert("Branch already exists. Cannot add duplicate branch.");
        }
    }

    removeBranch(branchName) {
        const index = this.branches.findIndex(branch => branch.name === branchName);
        if (index !== -1) {
            this.branches.splice(index, 1);
            alert("Branch removed successfully");
        } else {
            alert("Branch not found. Cannot remove non-existing branch.");
        }
    }

    displayBranches() {
        console.log(`${this.bankName}'s Branches:`);
        for (const branch of this.branches) {
            console.log(branch.get_branch());
        }
    }
}

// Instances
let apnaBank = new Bank('ApnaBank', []);

// Create instances of the Branch class
let branchA = new Branch('Branch A', '001', 'City A', 'Manager A', '123456789', 100000);
let branchB = new Branch('Branch B', '002', 'City B', 'Manager B', '987654321', 150000);

// Add branches
apnaBank.addBranch(branchA);
apnaBank.addBranch(branchB);
apnaBank.addBranch(branchA); // Attempting to add a duplicate branch

// Display branches
apnaBank.displayBranches();

// Remove a branch
apnaBank.removeBranch('Branch B');

// Display updated branches
apnaBank.displayBranches();
