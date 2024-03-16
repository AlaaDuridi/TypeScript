let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Alaa",
  retire: (date: Date) => {
    console.log("retired on " + date);
  },
};

// employee.id =0; //this should not be valid, so we add readonly before the id property


/**
 * there is three problems with this objec implementation:
 * Problem One: if you want to create another employee object, you have to repeat this structure, you'll end up duplicating your code, which is bad
 * 
 * Problem two: the other employee object might have other properties, so these two objects might not have a consistent shape because we don't
 *  have a single place to define the shape of the employee object
 * 
 * Problem three:  this structure is making our code hard to understand, this is where we use a type alias, using a tyope alias we can define a custom type
 * */