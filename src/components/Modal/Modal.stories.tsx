import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Modal from "./Modal";
import { ElementProps } from "../interfaces";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ElementProps> = (args) => <Modal {...args} />;

// Reuse that template for creating different stories
export const ModalView = Template.bind({});
ModalView.args = {
  children:
    "I am text. You can change me to anything you want. H1...H6, p, span",
  color: "#000",
  alignItems: "center",
};
