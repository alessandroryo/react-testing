import { sum, mult } from "../helpers/math";

describe("Basic testing", () => {
  it("Testing - Basic", () => {
    expect(true).toBe(true);
  });

  it("Sum values", () => {
    expect(1 + 2).toBe(3);
    expect(1 + 2).not.toBe(4);
  });
});

describe("Math functions", () => {
  test("Sum function", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(4);
  });

  test("Mult function", () => {
    expect(mult(1, 2)).toBe(2);
    expect(mult(3, 2)).not.toBe(4);
  });
});
