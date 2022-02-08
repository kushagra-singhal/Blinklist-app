//demo card component part

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import Card from "./index";

// export default {
//     title: "organism/Card",
//     component: Card
// } as ComponentMeta<typeof Card>

// const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

// export const card = Template.bind({});

// card.args = {
//     imgsrc: "assets/1.jpg",
//     bookname: "Bring Your Human To Work",
//     author: "Erica Keswin",
    
// }





import Card from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const CardComponent = {
    title : 'Organisms/Card',
    component: Card,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
    },
} as ComponentMeta<typeof Card>;


 const Template: ComponentStory<typeof Card>  = (args:any) => <BrowserRouter> <Card {...args} /></BrowserRouter>


export const Library = Template.bind({});

Library.args = {
    imgHeight: 300,
    
    url: "https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1644796800&Signature=G7JE7SH9Nc8QWL7BqnZd7cVi~jU1YV4BEIs-5ZyYLgbubie-U3HYIk8L~FEaUr1T-XtKXZ9qAFppde5jhVwnmqv10B9LM4FNCrj6CrA7b9n8xD~1r31BoBVBYx013SJ3jc1WN~IyISiygXn-ZXlWDpzmObf93ad0P5D6ZaJS0p41E~1WNKN3d-JpNAI9l95yEq4ndRWQKwZem4XQYydA7YMe6qD4yLwtxNUAxt3p1rkK78Otiug9-26iOHKPbytnS5MvIj~LGcBae-eeorMZOXcxhAYaxOdz~iaxvtGyHAn5He5JxowCfhKFwzvkbHONQWfMf4keedfasi05ETnwSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    imgsrc: "assets/beyondEntrepreneurship.png",
    bookName: "Beyond Entrepreneurship",
    writerName: "Jim Collins & Bill Lazier",
    timeRead: "14-minute read",
    width: 350,
    progress: 60,
    inLibrary: true,
}


export const Finished = Template.bind({})

Finished.args = {
    url: "https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644796800&Signature=T~7H15x6hpXhpjT23JCdCxWPkjeXZjG8vMyk9-5F2aSvM~Q3Xm53aBErjFYFZtysIoWTlxMcHQAVi~oy95cDbUGaboO65EnTj-gt-YqsOTaDNayHE3c1Mtp6M0RB-eLp0s2WvFGDY06tHMbjPiqe5Nc5sOSY~LlAwApis7NQC0TBYFvQNt3zzeC3Bjd8LXoTsPuMTs5r60yzCKJvC5kMEXvknM8mfSW9Aa7Jsy2srNqSSKrl6EkNu6GvzSObawUvP7OgbDt25k6rlidlVvQYZ24222z0gOZws3ox9ClWYXo5-NiSc46aFJpwGoHc2xRaVMGw-Smj6vGQSwjGS-K71w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    imgHeight: 300,
    imgsrc:"assets/beingBoss.png",
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
}

export default CardComponent;
