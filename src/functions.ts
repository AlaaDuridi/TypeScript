//use ? to make a parameter optional
function calculateTax(income : number, taxYear   :number = 2022) : number {
    //we can't compare a number with undefined, so we need to check if taxYear is defined
    if(taxYear <2022) {
        return income*1.2;
    }
    //remember: js by default returns undefined if no return statement is found, and undefined is not a number 
return income*1.4;
}

//sol 1 :
function calculateTax1(income : number, taxYear ?  :number): number {
    //we can't compare a number with undefined, so we need to check if taxYear is defined
    if((taxYear || 2022) <2022) {
        return income*1.2;
    }
    //remember: js by default returns undefined if no return statement is found, and undefined is not a number 
return income*1.4;
}

//sol 2: give it a default value if it is optional and it is not passed
function calculateTax2(income : number, taxYear   :number =2022): number {
    //we can't compare a number with undefined, so we need to check if taxYear is defined
    if((taxYear || 2022) <2022) {
        return income*1.2;
    }
    //remember: js by default returns undefined if no return statement is found, and undefined is not a number 
return income*1.4;
}

console.log(calculateTax(10_000, 2022)
);