import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextProps> = (args) => <Text {...args} />;

// Reuse that template for creating different stories
export const TextView = Template.bind({});
TextView.args = {
  type: "h1",
  children:
    "I am text. You can change me to anything you want. H1...H6, p, span",
  color: "pink",
  size: 28,
  weight: 600,
};
