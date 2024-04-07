function sum<T extends number>(a: T, b: T): T {
  return (a + b) as T;
}

console.log(sum(1, 2));
