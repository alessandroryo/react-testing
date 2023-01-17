export function salaryAfterTax(salary) {
  const TAX = 10 / 100;
  const salaryNetto = salary - salary * TAX;

  return `Salary after tax is Rp ${salaryNetto}`;
}

export function greeting(name) {
  return `Hello ${name}`;
}
