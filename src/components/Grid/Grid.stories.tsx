import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid, { GridProps } from "./Grid";
import Card from "../Card";
import Text from "../Text";
import Container from "../Container";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<GridProps> = (args) => <Grid {...args} />;

// Reuse that template for creating different stories
export const TextView = Template.bind({});
TextView.args = {
  justifyContent: "center",
  gap: "10px",
  children: [
      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,

      <Card elevation={1}>
        <Text weight={300}>
          I am text. You can change me to anything you want. H1...H6, p, span
        </Text>
      </Card>,
  ],
};
