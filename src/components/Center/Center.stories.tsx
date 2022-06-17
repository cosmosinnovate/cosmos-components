import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Center, { CenterProps } from "./Center";
import Button from "../Button";
import HStack from "../HStack";

export default {
  title: "Components/Center",
  component: Center,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CenterProps> = (args) => <Center {...args} />;

// Reuse that template for creating different stories
export const CenterView = Template.bind({});
CenterView.args = {
  children: (
    <Center>
      <Button
        type={"button"}
        size="large"
        width={200}
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Login
      </Button>
      <Button
        type={"button"}
        size="large"
        width={200}
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Login
      </Button>
    </Center>
  ),
  height: "400px",
  backgroundColor: "pink",
  sx: { padding: 10 },
  color: "#FFF",
};
