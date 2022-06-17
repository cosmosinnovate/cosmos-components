import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import VStack, { VStackProps } from "./VStack";
import Button from "../Button";
import Center from "../Center";

export default {
  title: "Components/VStack",
  component: VStack,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<VStackProps> = (args) => <VStack {...args} />;

// Reuse that template for creating different stories
export const ColumnView = Template.bind({});
ColumnView.args = {
  children: "Column View 😃",
  backgroundColor: "pink",
  sx: { padding: 10 },
  color: "#FFF",
};

export const ColumnViewCenter = Template.bind({});
ColumnViewCenter.args = {
  children: (
    <>
      <p>Horizontal Stacking</p>
      <p>Horizontal Stacking</p>
    </>
  ),
  backgroundColor: "pink",
  alignItems: "center",
  justifyContent: "center",
  sx: { padding: 10 },
  color: "#FFF",
};

export const ColumnViewUI = Template.bind({});
ColumnViewUI.args = {
  children: (
    <VStack>
      <Button
        width={200}
        type={"button"}
        size="small"
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Submit
      </Button>
      <Button
        width={200}
        type={"button"}
        size="small"
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Submit
      </Button>
      <p>Horizontal Stacking</p>
    </VStack>
  ),
  backgroundColor: "pink",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  sx: { padding: 10 },
  color: "#FFF",
};
