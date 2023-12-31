import { StoryFn, Meta } from "@storybook/react";
import { InputSearch } from ".";
// @ts-ignore
import { AudioOutlined } from 'antd-component';

export default {
  title: "Example/InputSearch",
  component: InputSearch,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof InputSearch>;

const Template: StoryFn<typeof InputSearch> = (args) => <InputSearch {...args} />;

export const InputSearchWithDefaultValue = Template.bind({});
InputSearchWithDefaultValue.args = {
  defaultValue: 'Halo rindev'
};

export const InputSearchWithPlaceholder = Template.bind({});
InputSearchWithPlaceholder.args = {
  placeholder: 'Search Here...'
};

export const InputSearchWithSuffixIcon = Template.bind({});
InputSearchWithSuffixIcon.args = {
  placeholder: 'Search...',
  suffix: (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  )
};

export const InputSearchWithAllowClear = Template.bind({});
InputSearchWithAllowClear.args = {
  placeholder: 'Search...',
  allowClear: true
};

export const InputSearchWithClassname = Template.bind({});
InputSearchWithClassname.args = {
  placeholder: 'Search...',
  className: 'w-[400px] p-2 rounded !bg-red-400 !border-red-400'
};