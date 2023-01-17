import { salaryAfterTax, greeting } from "../helpers/salary";

describe("String", () => {
  test("Find out the net salary", () => {
    expect(salaryAfterTax(10000000)).toBe("Salary after tax is Rp 9000000");
  });

  test("Greeting", () => {
    expect(greeting("John")).toBe("Hello John");
  });
});
