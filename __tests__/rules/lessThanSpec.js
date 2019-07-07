import { lessThan } from "../../src/rules";

describe("lessThan", () => {
  const input = document.createElement("input");
  input.value = "5";

  it("should return false if value is greater", () => {
    expect(lessThan(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(lessThan(input, "3")).toBeFalsy();
  });

  it("should return true if value is smaller", () => {
    expect(lessThan(input, 6)).toBeTruthy();
  });

  it("should return false if value is equal", () => {
    expect(lessThan(input, 5)).toBeFalsy();
  });
});
