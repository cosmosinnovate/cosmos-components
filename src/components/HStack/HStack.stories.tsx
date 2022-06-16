import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import HStack, { HStackProps } from "./HStack";

export default {
  title: "Components/HStack",
  component: HStack,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<HStackProps> = (args) => <HStack {...args} />;

// Reuse that template for creating different stories
export const RowView = Template.bind({});
RowView.args = { children: "Column View 😃", backgroundColor: 'pink', sx: { padding: 1 }};
