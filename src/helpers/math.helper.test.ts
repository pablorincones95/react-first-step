import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("math helper add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("math helper subtract", () => {
  test("should subtract two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("math helper multiply", () => {
  test("should multiply two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});
