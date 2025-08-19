/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should render the correct number if ItemCounter component", () => {
    render(<FirstStepApp />);

    const iteCounter = screen.getAllByTestId("ItemCounter");

    expect(iteCounter.length).toBe(3);
    screen.debug();
  });

  test("should render ItemCOunter with correct props", () => {
    render(<FirstStepApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo switch",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo gamecube",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super smash",
      quantity: 3,
    });
  });
});
