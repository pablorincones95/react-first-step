import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("shoud rende firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Pablo");
  });

  test("shoud macth snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
