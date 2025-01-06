function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('Name is null or undefined');
  } else {
    console.log(name.toUpperCase());
  }
}

printName(null); // Output: Name is null or undefined
printName('John'); // Output: JOHN
printName(undefined); // Output: Name is null or undefined