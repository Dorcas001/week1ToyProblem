// node.js does not have a global variable named 'prompt'
// its not defined in the node environment, 
// so if you want a function named prompt you have to define it 
// by the use of third party module 'prompt-sync'
const prompt = require('prompt-sync')();

const marks = parseInt(prompt('Enter student marks between 0 and 100  :  '));

function studentMarks(){
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Please enter a valid Number between 0 && 100')
        return;
    }
    
    let grade;
   
    if (marks > 79){
        grade = 'A' ;
    }else if( marks > 60 ){
        grade ='B';
    }else if (marks> 49 ){
        grade = 'C'
    }else if (marks > 40 ){
        grade = 'D';
    }else{
        grade = 'E';
    }
    console.log(`The student has got ${grade}`)
}
studentMarks();

