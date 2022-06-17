import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Line, { LineProps } from "./Line";

export default {
  title: "Components/Line",
  component: Line,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LineProps> = (args) => <Line {...args} />;

// Reuse that template for creating different stories
export const LineView = Template.bind({});
LineView.args = {
  backgroundColor: "#000", width: 4
};
