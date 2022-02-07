import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./index";

const TypographyComponent = {
    title: "Atoms/Typography",
    component: Typography,
  } as ComponentMeta<typeof Typography>;
  
  
//   export const Template: ComponentStory<typeof Typography>  = (args:any) => (
//       <Typography {...args} >Erica Keswin</Typography>
//   )
  

export const Typography1: ComponentStory<typeof Typography> = (args) => <Typography{...args} />

Typography1.args = {

    variant:"h5",
    children:"Beyond Entrepreneurship",
    
}

  export default TypographyComponent;
