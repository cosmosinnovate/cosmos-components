import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React } from "react";
import VStack from "../VStack";
import Text from "../Text";
import Container, { ContainerProps } from "./Container";
import Padding from "../Padding";

export default {
  title: "Components/Container",
  component: Container,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ContainerProps> = (args) => <Container {...args} />;

// Reuse that template for creating different stories
export const ContainerView = Template.bind({});
ContainerView.args = {
  children: (
    <VStack backgroundColor="orange">
      <Padding>
        <Text color="#000">This is Margin testing</Text>
      </Padding>
    </VStack>
  ),
};
