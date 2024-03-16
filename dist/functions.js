"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.4;
}
function calculateTax1(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.4;
}
function calculateTax2(income, taxYear = 2022) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.4;
}
console.log(calculateTax(10000, 2022));
//# sourceMappingURL=functions.js.map