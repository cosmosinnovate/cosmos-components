import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React } from "react";
import Article from "../Article";
import Button from "../Button";
import HStack from "../HStack";
import { ElementProps } from "../interfaces";
import Line from "../Line";
import Navbar from "../Navbar";
import Text from "../Text";
import VStack from "./VStack";

export default {
  title: "Components/VStack",
  component: VStack,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ElementProps> = (args) => <VStack {...args} />;

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
    <VStack className="div">
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
export const Hero = Template.bind({});
Hero.args = {
  children: (
    <>
      <VStack height="100%">
        {/* Navbar */}
        <Navbar
          justifyContent="space-between"
          alignItems="center"
          elevation={2}
          menuColor="white"
          logoImage="https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png"
          logoWidth={"60px"}
        >
          <HStack
            className="menu"
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <HStack justifyContent="center" width="100%">
              <Text type="p" weight={200}>
                Home
              </Text>
            </HStack>
            <HStack justifyContent="center">
              <Text type="p" weight={300}>
                About
              </Text>
            </HStack>
            <HStack justifyContent="center">
              <Text type="p" weight={300}>
                Example
              </Text>
            </HStack>
            <HStack justifyContent="center">
              <Text type="p" color="#FFF">
                Investments
              </Text>
            </HStack>
            <HStack justifyContent="center">
              <Text type="p" color="#FFF">
                Startups
              </Text>{" "}
            </HStack>
            <HStack justifyContent="center">
              <Text type="p" color="#FFF">
                Blog
              </Text>{" "}
            </HStack>
          </HStack>
        </Navbar>

        {/* <Modal
          maxWidth={"600px"}
          backgroundColor="#FFF"
          alignItems="center"
          rounded={20}
          sx={{ padding: 20 }}
        >
          <Text>QUALITY SOLUTION</Text>

          <HStack wrap="wrap">
            <VStack
              alignItems="center"
              border="#D8D8D8"
              rounded={10}
              sx={{ padding: 10 }}
            >
              <Text>TRUSTWORTHY TEAM</Text>
              <Text type="p"weight={300} size={16} textAlign="center">
                We are a distributed team of engineers and designers ready to
                serve your startup
              </Text>
            </VStack>
          </HStack>
        </Modal> */}

        {/* Hero */}
        <VStack alignItems="center">
          <Text
            type="h1"
            weight={800}
            size={100 / 2.3}
            color={"#FFF"}
            textAlign="center"
          >
            Innovation Starts Here
          </Text>
          <Text type="h2" size={40} textAlign="center" weight={600}>
            Time to unleash your product potential today
          </Text>
          <Button
            size={"medium"}
            type={"button"}
            elevation={5}
            backgroundColor={"#000"}
            onClick={() => console.log("We are still under construction")}
            width={200}
            rounded={40}
          >
            <Text type="span" color="white" weight={400} size={20}>
              Hit me up
            </Text>
          </Button>
        </VStack>
        <VStack alignItems="center" height="50px"></VStack>
      </VStack>

      {/* About */}
      <Article
        height="100vh"
        alignItems="center"
        justifyContent="center"
        maxWidth="1200px"
        flexDirection="column"
        gap={40}
        sx={{ mt: 40 }}
      >
        <HStack justifyContent="center">
          <Text type="h2" size={50}>
            ABOUT US
          </Text>
        </HStack>
        <Text type="p" textAlign="center" weight={400} size={20}>
          Our goal is to help entrepreneurs go to market rapidly at an afforable
          cost without compromising the build quality of their software product.
          We want to be your solutions provider and succeed with you.
        </Text>

        <HStack wrap="wrap">
          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>TRUSTWORTHY TEAM</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>IMPACT DRIVEN</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>QUALITY SOLUTION</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>STARTUP EXPERIENCE</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>
        </HStack>
      </Article>

      <Article
        height="100vh"
        alignItems="center"
        justifyContent="center"
        maxWidth="1200px"
        flexDirection="column"
        gap={40}
        sx={{ mt: 40 }}
      >
        <HStack justifyContent="center">
          <Text type="h2" size={50}>
            ABOUT US
          </Text>
        </HStack>
        <Text type="p" textAlign="center" weight={400} size={20}>
          Our goal is to help entrepreneurs go to market rapidly at an afforable
          cost without compromising the build quality of their software product.
          We want to be your solutions provider and succeed with you.
        </Text>

        <HStack wrap="wrap">
          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>TRUSTWORTHY TEAM</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>IMPACT DRIVEN</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 10 }}
          >
            <Text>QUALITY SOLUTION</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>

          <VStack
            alignItems="center"
            border="#D8D8D8"
            rounded={10}
            sx={{ padding: 20 }}
          >
            <Text>STARTUP EXPERIENCE</Text>
            <Line backgroundColor="#18A0FB" height={2} width={50} />
            <Text type="p" weight={300} size={16} textAlign="center">
              We are a distributed team of engineers and designers ready to
              serve your startup
            </Text>
          </VStack>
        </HStack>
      </Article>
    </>
  ),
};
