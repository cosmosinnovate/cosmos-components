import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card from "./Card";
import { ElementProps } from "../interfaces";
import HStack from "../HStack";
import { Font } from "..";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Card component
const Template: Story<ElementProps> = (args) => <Card {...args} />;

// Reuse that template for creating different stories
export const CardView = Template.bind({});
CardView.args = {
  backgroundColor: "#FFF",
  children: "CardView 😃",
  elevation: 0,
};

export const CardElevation = Template.bind({});
CardElevation.args = {
  backgroundColor: "#18A0FB",
  justifyContent: "space-around",
  alignItems: "center",
  children: [
    // Children inside the card
    <a href="https://www.google.com" target="blank">
      <HStack justifyContent="center">
        <Font>CardElevation 😃</Font>
      </HStack>
    </a>,
  ],
  elevation: 1,
};
