import { greaterThanEqual } from "../../src/rules";

describe("greaterThanEqual", () => {
  const input = document.createElement("input");
  input.value = "2";

  it("should return false if value is smaller", () => {
    expect(greaterThanEqual(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(greaterThanEqual(input, "3")).toBeFalsy();
  });

  it("should return true if value is smaller", () => {
    expect(greaterThanEqual(input, 1)).toBeTruthy();
  });

  it("should return true if value is equal", () => {
    expect(greaterThanEqual(input, 2)).toBeTruthy();
  });
});
