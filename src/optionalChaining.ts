/**
 * whenever we deal with null values, we have to do null checks to avoid runtime errors.
 */

type Customer ={
    birthday?: Date;
}

function getCustomer(id: number) :Customer| null |undefined {
    return id===0 ? null:{birthday: new Date()};
}

let customer = getCustomer(1);

//Optional property access operator 
//chaning operator 
    console.log(customer?.birthday?.getFullYear()); // the result will be undefined, if the customer is null or undefined, otherwise it will return the value of the birthday property.

//Optional element access operator 
//when dealing with arrays

//if(customers !==null || customers !==undefined)

// customers?.[0]


let log: any =null;

log?.('Hello world'); 