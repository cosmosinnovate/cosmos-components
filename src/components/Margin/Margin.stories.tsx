import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React } from "react";
import HStack from "../HStack";
import VStack from "../VStack";
import Text from "../Text";
import Margin, { MarginProps } from "./Margin";

export default {
  title: "Components/Margin",
  component: Margin,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<MarginProps> = (args) => <Margin {...args} />;

// Reuse that template for creating different stories
export const MarginView = Template.bind({});
MarginView.args = {
  children: (
    <Margin margin={10}>
      <VStack backgroundColor="orange">
        <HStack backgroundColor="gray">
          <Text color="#000">This is Margin testing</Text>
        </HStack>
      </VStack>
    </Margin>
  ),
  margin: 10,
};
