import { StoryFn, Meta } from "@storybook/react";
import { Input } from ".";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const InputDefaultValue = Template.bind({});
InputDefaultValue.args = {
  value: "Halo",
};

export const InputPlacholder = Template.bind({});
InputPlacholder.args = {
  value: "Halo",
  placeholder: "Search here...",
};