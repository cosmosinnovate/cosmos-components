import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import VStack, { VStackProps } from "./VStack";

export default {
  title: "Components/VStack",
  component: VStack,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<VStackProps> = (args) => <VStack {...args} />;

// Reuse that template for creating different stories
export const ColumnView = Template.bind({});
ColumnView.args = { children: "Column View 😃", backgroundColor: 'pink', sx: { padding: 10 }, color: '#FFF'};
