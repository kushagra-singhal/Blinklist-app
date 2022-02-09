import TemplateComponent from "./TemplateComponent";
import { ComponentStory } from "@storybook/react";

export default {
    title: 'Templates/Templates',
    component: TemplateComponent
}

export const Templates: ComponentStory<typeof TemplateComponent> = () => <TemplateComponent />;