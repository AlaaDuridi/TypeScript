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
