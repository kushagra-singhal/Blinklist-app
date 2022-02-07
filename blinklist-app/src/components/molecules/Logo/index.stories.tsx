import Logo from './index';
import {ComponentStory, ComponentMeta} from '@storybook/react';

const LogoComponent = {
    title: 'Molecules/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

export const LogoComp: ComponentStory<typeof Logo> = (args:any) => <Logo {...args} />

LogoComp.args ={
    height: 30,
    url: '/assets/logo.png',
    name: 'Blinklist'
}

export default LogoComponent;