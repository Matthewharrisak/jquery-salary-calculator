console.log('JStest');
$(document).ready(onReady)
let employeeArray = [];

// fires off functions when page is loaded
function onReady() {
    console.log('JQ-test');
    $('#submitNew').on('click' , submitForm );
    $('#submitNew').on('click' , displayEmployee );
}

// this function pulls info from DOM when you hit "submit
function submitForm(){
    // this is where I want to grab input values;
    // getter .val()
    let employeeObject = {
    firstName: $('#firstName').val(),
     title: $('#title').val(),
     lastName: $('#lastName').val(),
     idNumber: $('#idNumber').val(),
     annualSalary: $('#annualSalary').val(),
    }
    console.log('Employee Info:' , employeeObject);
employeeArray.push( employeeObject);
}

function displayEmployee(){
    let ulEmployee = $('#addedEmployee')
for (let i = 0; i < employeeArray.length; i++) {
    ulEmployee.append(`<li> ${employeeArray[i].firstName} , ${employeeArray[i].lastName} </li>`);
    }    
}

