type Employee = {
    readonly id: number ,
    name: string,
    retire: (date: Date) => void;
}

let employee2: Employee = {
    id: 1,
    name: "Alaa",
    retire: (date: Date) => {
        console.log("retired on " + date);
    },
};