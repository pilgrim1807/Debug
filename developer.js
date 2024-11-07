debugger;
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
debugger;
let totalJuniorDevelopersSalary = 0;
debugger;                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}
debugger;
console.log( totalJuniorDevelopersSalary);

