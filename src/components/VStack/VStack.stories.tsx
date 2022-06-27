import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React } from "react";
import Button from "../Button";
import Center from "../Center";
import HStack from "../HStack";
import Text from "../Text";
import VStack, { VStackProps } from "./VStack";

export default {
  title: "Components/VStack",
  component: VStack,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<VStackProps> = (args) => <VStack {...args} />;

// Reuse that template for creating different stories
export const ColumnView = Template.bind({});
ColumnView.args = {
  children: "Column View 😃",
  backgroundColor: "pink",
  sx: { padding: 10 },
  color: "#FFF",
};

export const ColumnViewCenter = Template.bind({});
ColumnViewCenter.args = {
  children: (
    <>
      <p>Horizontal Stacking</p>
      <p>Horizontal Stacking</p>
    </>
  ),
  backgroundColor: "pink",
  alignItems: "center",
  justifyContent: "center",
  sx: { padding: 10 },
  color: "#FFF",
};

export const ColumnViewUI = Template.bind({});
ColumnViewUI.args = {
  children: (
    <VStack>
      <Button
        width={200}
        type={"button"}
        size="small"
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Submit
      </Button>
      <Button
        width={200}
        type={"button"}
        size="small"
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        Submit
      </Button>
      <p>Horizontal Stacking</p>
    </VStack>
  ),
  backgroundColor: "pink",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  sx: { padding: 10 },
  color: "#FFF",
};

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
        <VStack alignItems="center" gap={10}>
          <Text
            type="h1"
            weight={400}
            size={80}
            color={"#FFF"}
            textAlign="center"
          >
            Innovation starts here
          </Text>
          <Text type="h2" size={40} textAlign="center" weight={400}>
            Time to unleash your product potential today
          </Text>
          <Button
            size={"medium"}
            type={"button"}
            onClick={() => alert("You got me")}
            width={200}
            rounded={40}
          >
            <Text type="span" color="white" weight={400} size={20}>
              Hit me up
            </Text>
          </Button>
        </VStack>
      </VStack>
    </>
  ),
};
