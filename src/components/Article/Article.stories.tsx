import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Article, { ArticleProps } from "./Article";
import Button from "../Button";
import Center from "../Center";

export default {
  title: "Components/Article",
  component: Article,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ArticleProps> = (args) => <Article {...args} />;

// Reuse that template for creating different stories
export const AritcleViewUI = Template.bind({});
AritcleViewUI.args = {
  children: [
    <p> What is Lorem Ipsum?</p>,
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>,
  ],
  backgroundColor: "pink",
  gap: 0,
  position: "relative",
  alignItems: "start",
  justifyContent: "start",
  sx: { padding: 10 },
  color: "#FFF",
};
