const dayInput = document.getElementById('day_input');
const monthInput = document.getElementById('month_input');
const yearInput = document.getElementById('year_input');

const yearError = document.getElementById('year_error');
const monthError = document.getElementById('month_error');
const dayError = document.getElementById('day_error');

const dayOutput = document.getElementById('day_output');
const monthOutput = document.getElementById('month_output');
const yearOutput = document.getElementById('year_output');
const button = document.getElementById('btn')

button.addEventListener('click', getAge);

let date = new Date();
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth()+1;
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getAge(){

    let m = months[monthInput.value-1];

    if (dayInput.value > day){
        day = day + months[month - 1];
        month = month - 1;
    }
    if(monthInput.value > month){
        month = month + 12;
        year = year - 1;
    }

    let dayResult = day - dayInput.value;
    let monthResult = month - monthInput.value;
    let yearResult = year - yearInput.value;

    if(dayInput.value == ''){
        dayError.style.visibility = 'visible';
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        dayOutput.innerHTML = '--';
    }else if(dayInput.value > m){
        dayError.style.visibility = 'visible';
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        dayOutput.innerHTML = '--';
    }else{
        dayOutput.innerHTML = dayResult;
        dayError.style.visibility = 'hidden';
        dayInput.style.border = '1px solid var(---Smokey-grey)';
    }

    if(monthInput.value == ''){
        monthError.style.visibility = 'visible';
        monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
        monthOutput.innerHTML = '--';
    }else if(monthInput.value > 12){
        monthError.style.visibility = 'visible';
        monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
        monthOutput.innerHTML = '--';
    }else{
        monthOutput.innerHTML = monthResult;
        monthError.style.visibility = 'hidden';
        monthInput.style.border = '1px solid var(---Smokey-grey)';
    }
    
    if(yearInput.value == ''){
        yearError.style.visibility = 'visible';
        yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
        yearOutput.innerHTML = '--';
    }else if(yearInput.value > year){
        yearError.style.visibility = 'visible';
        yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
        yearOutput.innerHTML = '--';
    }
    else{
        yearOutput.innerHTML = yearResult;
        yearError.style.visibility = 'hidden';
        yearInput.style.border = '1px solid var(---Smokey-grey)';
    }
}