console.log('JStest');
$(document).ready(onReady)
let employeeArray = [];
totalSalary = 0

// fires off functions when page is loaded
function onReady() {
    console.log('JQ-test');
    $('#submitNew').on('click' , submitForm );
    $('#addedEmployee').on('click' , ".deleteBtn" , deleteFunc);
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
        $('#firstName').val('');
        $('#title').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#annualSalary').val('');

        let ulEmployee = $('#addedEmployee');
        ulEmployee.empty();
        addItUp();
        displayEmployee();
}



/// Displays DOM values. 
function displayEmployee(){
    let ulEmployee = $('#addedEmployee')
    //loops through Employee array and appends values to the DOM
for (let i = 0; i < employeeArray.length; i++) {
    ulEmployee.append(`<li> ${employeeArray[i].firstName}  ${employeeArray[i].lastName} , 
    ${employeeArray[i].title} , ${employeeArray[i].idNumber} , ${employeeArray[i].annualSalary} 
    <button class="deleteBtn"> DELETE</button></li> `); 
    }
    
}

// add total salary and divides by 12 to produce monthly budget - appends to DOM
function addItUp () {
let totalSalary = 0;
let el = $('#moneyTime');
 // loop through employeeArray to add up the Annual salary. 
for (let i = 0; i < employeeArray.length; i++){
    totalSalary += Number(employeeArray[i].annualSalary);
    }   
    totalSalary/=12;    
el.empty();
el.append( totalSalary );
tooMuch(totalSalary);
}

function tooMuch(totalSalary) {
    if (totalSalary > 20000){
        $('#pleaseWork').addClass("pleaseWork");
    }
        
}

function deleteFunc() {
    console.log('delete');
    $(this).parent().remove();
}
//function tableItUp() {
//$('#tableTime > tbody:last-child').append(`<tr> ${employeeArray[i].firstName} ,
 //${employeeArray[i].lastName} , 
   // ${employeeArray[i].title} , ${employeeArray[i].idNumber} , ${employeeArray[i].annualSalary} </tr>`);   
//
