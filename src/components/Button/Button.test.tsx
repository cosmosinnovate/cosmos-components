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
  test("renders the Button component: large", () => {
    render(
      <Button
        size="large"
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
  test("renders the Button component: medium", () => {
    render(
      <Button
        size="medium"
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
  test("renders the Button component: small", () => {
    render(
      <Button
        size="small"
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
  test("renders the Button component: elevation", () => {
    render(
      <Button
        elevation={2}
        size="small"
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
  test("renders the Button component: rounded", () => {
    render(
      <Button
        rounded={20}
        elevation={2}
        size="small"
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
  test("renders the Button component: disabled", () => {
    render(
      <Button
        disabled={true}
        elevation={2}
        size="small"
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
  test("renders the Button component: position", () => {
    render(
      <Button
        disabled={true}
        elevation={2}
        size="small"
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
  test("renders the Button component: children", () => {
    render(
      <Button
        size="small"
        position="absolute"
        type={"submit"}
        onClick={() => {
          console.info("Button");
        }}
      >
        Submit
      </Button>
    );
  });
});
