import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

/**
 * Test for these props
 */

// size,
// position,
// primary,
// disabled,
// rounded,
// elevation,
// type,
// children,

describe("Card", () => {
  test("renders the Card component: large", () => {
    render(<Card size="large" />);
  });
});

describe("Card", () => {
  test("renders the Card component: elevation", () => {
    render(<Card size="large" />);
  });
});
