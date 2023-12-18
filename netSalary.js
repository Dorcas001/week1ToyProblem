const prompt = require('prompt-sync')();

let basicSalary= prompt('Enter basic salary :');
// let allowances= parseFloat(prompt('Enter allowances:'));
// nhif and nssf taxpay depends on an individual salary

let nhif = parseFloat(prompt('Enter NHIF tax rate :'))
let nssf= parseFloat(prompt('Enter NSSF tax rate :'))

function netSalary( allowances, taxRate){

    if (isNaN(basicSalary) || isNaN(allowances )|| isNaN(taxRate)) {
        console.log("Invalid input. Please enter valid numbers.");
    }
    let taxableIncome = basicSalary + allowances;

    // first calculate  gross pay
    // taxrate depends on the indivdual basic salary
    // 
    let grossPay = (taxableIncome * taxRate)/100;

    // // calculate nhif deductions
    // let nhifDeduction = basicSalary * nhifTaxRate/100;
    // // calculate nssf deductions
    // let nssfDeduction = basicSalary * nssfTaxRate/100;
    // calculate netsalary


    let deductions = nhif + nssf;

    const salary= grossPay - deductions;
   

    console.log(`gross pay is ${grossPay}`);
    console.log(`net salary is ${salary}`);

}
netSalary(3000, 10) 