import {Meta, StoryFn} from '@storybook/react' 
import MenuDropdown from '.'

export default {
    title: "Example/MenuDropdown",
    component: MenuDropdown,
    parameters: {
        layout: "fullscreen"
    }
} as Meta<typeof MenuDropdown>

const Template: StoryFn<typeof MenuDropdown> = (args) => <MenuDropdown {...args}/>

export const MenuDropdownDefault = Template.bind({})
MenuDropdownDefault.args = {
    menus: [
        {label: "Homepage", value: "homepage", onClick: () => console.log('homepage')},
        {label: "Porfolio", value: "porfolio", onClick: () => console.log('Porfolio')},
        {label: "About", value: "about", onClick: () => console.log('About')},
    ]
}

export const MenuDropdownCustomIcon = Template.bind({})
MenuDropdownCustomIcon.args = {
    menus: [
        {label: "Homepage", value: "homepage", onClick: () => console.log('homepage')},
        {label: "Porfolio", value: "porfolio", onClick: () => console.log('Porfolio')},
        {label: "About", value: "about", onClick: () => console.log('About')},
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
}