import { lessThanEqual } from "../../src/rules";

describe("lessThanEqual", () => {
  const input = document.createElement("input");
  input.value = "5";

  it("should return false if value is greater", () => {
    expect(lessThanEqual(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(lessThanEqual(input, "3")).toBeFalsy();
  });

  it("should return true if value is smaller", () => {
    expect(lessThanEqual(input, 6)).toBeTruthy();
  });

  it("should return true if value is equal", () => {
    expect(lessThanEqual(input, 5)).toBeTruthy();
  });
});
