// import Icon from "./index";

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { MoreHoriz,PersonSharp } from "@mui/icons-material";


// export default {
//     title: 'atoms/icons',
//     component: Icon,
// } as ComponentMeta<typeof Icon>;

// const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

// export const more = Template.bind({});

// more.args = {
//     Icons: <MoreHoriz></MoreHoriz>
// }

// export const person = Template.bind({});

// person.args = {
//     Icons: <PersonSharp></PersonSharp>
// }



import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';

import Icon from './index';
const IconComponent = {
    title: "Atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const Timer: ComponentStory<typeof Icon> = (args) => <Icon icon={<AccessAlarmIcon color="primary" />}></Icon>;
export const DropUp: ComponentStory<typeof Icon> = (args) => <Icon icon={<KeyboardArrowUpIcon/>}></Icon>;
export const DropDwon: ComponentStory<typeof Icon> = (args) => <Icon icon={<ExpandMoreIcon/>}></Icon>;
export const Search: ComponentStory<typeof Icon> = (args) => <Icon icon={<SearchIcon/>}></Icon>;
export const AddIcons: ComponentStory<typeof Icon> = (args) => <Icon icon={<AddIcon/>}></Icon>;

export default IconComponent;