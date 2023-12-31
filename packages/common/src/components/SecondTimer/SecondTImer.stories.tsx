import {Meta, StoryFn} from '@storybook/react' 
import SecondTimer from '.'

export default {
    title: "Example/SecondTimer",
    component: SecondTimer,
    parameters: {
        layout: "fullscreen"
    }
} as Meta<typeof SecondTimer>

const Template: StoryFn<typeof SecondTimer> = (args) => <SecondTimer {...args}/>

export const SecondTimerDefault = Template.bind({})
SecondTimerDefault.args = {}

export const SecondTimerWithDefaultValue = Template.bind({})
SecondTimerWithDefaultValue.args = {
    defaultTime: 50
}