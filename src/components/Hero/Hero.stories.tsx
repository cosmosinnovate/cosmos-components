import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Button from "../Button";
import Card, { CardProps } from "../Card/Card";
import Center from "../Center";
import HStack from "../HStack";
import Text from "../Text";
import VStack, { VStackProps } from "../VStack/VStack";

export default {
  title: "WebLayout/Hero",
  component: VStack,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Card component
const Template: Story<VStackProps> = (args) => <VStack {...args} />;

// Reuse that template for creating different stories
export const HeroLayout = Template.bind({});
HeroLayout.args = {
  backgroundColor: "#18A0FB",
  height: "100vh",
  children: (
    <>
      <HStack sx={{ pl: 10, pr: 10 }} justifyContent="space-between">
        <Text type="p">Cosmos Innovaiton</Text>
        <HStack>
          <Text type="p" color="#FFF">
            About
          </Text>
          <Text type="p" color="#FFF">
            Process
          </Text>
          <Text type="p" color="#FFF">
            Investments
          </Text>
          <Text type="p" color="#FFF">
            Startups
          </Text>
          <Text type="p" color="#FFF">
            Blog
          </Text>
        </HStack>
      </HStack>
      <VStack alignItems="center" justifyContent="center">
        <Center>
          <VStack alignItems="center">
            <Text type="h2" weight={400} size={50} color={"#FFF"}>
              Innovation starts here
            </Text>
            <Text>Time to unleash your product potential today</Text>
            <Button
              type={"button"}
              onClick={() => alert("You got me")}
              width={400}
              rounded={40}
            >
              TALK TO US
            </Button>
          </VStack>
        </Center>
      </VStack>
    </>
  ),
};
