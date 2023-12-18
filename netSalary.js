const prompt = require('prompt-sync')();

let basicSalary= parseFloat(prompt('Enter basic salary :'));
// let allowances= parseFloat(prompt('Enter allowances:'));
// nhif and nssf taxpay depends on an individual salary

let nhifTaxRate = parseFloat(prompt('Enter NHIF tax rate :'))
let nssfTaxRate = parseFloat(prompt('Enter NSSF tax rate :'))

function netSalary( allowances, taxRate){

    if (isNaN(basicSalary) || isNaN(allowances )|| isNaN(taxRate)) {
        console.log("Invalid input. Please enter valid numbers.");
    }
    let taxableIncome = basicSalary + allowances;

    // first calculate  gross pay
    // taxrate depends on the indivdual basic salary
    // 
    let grossPay = taxableIncome * taxRate/100;

    // calculate nhif deductions
    let nhifDeduction = basicSalary * nhifTaxRate/100;
    // calculate nssf deductions
    let nssfDeduction = basicSalary * nssfTaxRate/100;
    // calculate netsalary


    const deductions = nhifDeduction + nssfDeduction;

    const salary= grossPay - deductions;
   

    console.log(`gross pay is ${grossPay}`);
    console.log(`nhif deductions is ${nhifDeduction}`);
    console.log(`nssf deductions is ${nssfDeduction}`);
    console.log(`net salary is ${salary}`);

}
netSalary(1000, 25) 