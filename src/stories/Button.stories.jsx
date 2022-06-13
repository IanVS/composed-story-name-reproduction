import { Button } from './Button';
import {Helper} from './Helper';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  args: {
    label: 'button'
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = {
  args: {
    primary: true
  },
  name: "Primary",
}

export const Secondary = {
  args: {}
}

export const PrimaryNamed = {
  render: () => {
    return <Helper meta={meta} story={Primary}/>
  }
}
