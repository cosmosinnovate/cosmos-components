import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React, Fragment } from "react";
import Article from "../Article";
import Button from "../Button";
import Center from "../Center";
import HStack from "../HStack";
import Line from "../Line";
import Text from "../Text";
import Padding, { PaddingProps } from "./Padding";

export default {
  title: "Components/Padding",
  component: Padding,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PaddingProps> = (args) => <Padding {...args} />;

// Reuse that template for creating different stories
export const PaddingView = Template.bind({});
PaddingView.args = {
  children: (
    <HStack backgroundColor="yellow">
      <Text>This is padding testing</Text>
    </HStack>
  ),
  padding: 0,
};
