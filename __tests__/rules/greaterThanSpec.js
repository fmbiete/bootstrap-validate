import { greaterThan } from "../../src/rules";

describe("greaterThan", () => {
  const input = document.createElement("input");
  input.value = "2";

  it("should return false if value is smaller", () => {
    expect(greaterThan(input, 3)).toBeFalsy();
  });

  it("should handle string arguments", () => {
    expect(greaterThan(input, "3")).toBeFalsy();
  });

  it("should return true if value is smaller", () => {
    expect(greaterThan(input, 1)).toBeTruthy();
  });

  it("should return false if value is equal", () => {
    expect(greaterThan(input, 2)).toBeFalsy();
  });
});
