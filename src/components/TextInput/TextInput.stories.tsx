import React from "react";
import { Story, Meta } from "@storybook/react";
import TextInput, { InputProps } from "./TextInput";

export default {
  title: "Form/Input",
  component: TextInput,
  argTypes: {},
} as Meta<typeof TextInput>;

const Template: Story<InputProps> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Success",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled",
};
