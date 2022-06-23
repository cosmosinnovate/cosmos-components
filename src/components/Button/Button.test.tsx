import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

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

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button
        children="Hello world!"
        type={"button"}
        onClick={() => {
          console.info("Button");
        }}
      />
    );
  });
});

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button
        position="absolute"
        children="Hello world!"
        type={"button"}
        onClick={() => {
          console.info("Button");
        }}
      />
    );
  });
});

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button
        position="absolute"
        children="Hello world!"
        type={"button"}
        onClick={() => {
          console.info("Button");
        }}
      />
    );
  });
});
