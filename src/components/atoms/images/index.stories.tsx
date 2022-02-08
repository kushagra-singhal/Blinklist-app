// import Img from "./index";
// import { ComponentStory, ComponentMeta } from "@storybook/react";

// export default {
//     title: 'atoms/images',
//     component: Img,
// };

// const Template: ComponentStory<typeof Img> = (args) => <Img {...args}/>;

// export const cardImage = Template.bind({})
// cardImage.args = {
//     src: "assets/1.jpg",
//     height: "292px",
//     width: "294.1px"
// }

import Image from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const ImageComponent = {
    title : 'Atoms/Image',
    component: Image
} as ComponentMeta<typeof Image>;

export const Template: ComponentStory<typeof Image>  = (args:any) => <Image {...args} />

Template.args = {
    height: 300,
    width: 280,
    src: '/assets/book.png',
    sx: {border: '1px solid grey'}
}

export default ImageComponent;