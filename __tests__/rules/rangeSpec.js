import { range } from "../../src/rules";

describe("range", () => {
  const input = document.createElement("input");
  input.value = "2";

  it("should return false if value is smaller than min value", () => {
    expect(range(input, 3, 6)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(range(input, "3", "6")).toBeFalsy();
  });

  it("should return true if value is equal than min value", () => {
    expect(range(input, 2, 6)).toBeTruthy();
  });

  it("should return true if value is equal than max value", () => {
    expect(range(input, 0, 2)).toBeTruthy();
  });

  it("should return true if value is between min and max value", () => {
    expect(range(input, 0, 10)).toBeTruthy();
  });

  it("should return false if value is greater than max value", () => {
    expect(range(input, -10, 1)).toBeFalsy();
  });
});
