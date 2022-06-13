import { composeStory } from '@storybook/testing-react';

export function Helper({meta, story}) {
  const Story = composeStory(story, meta);
  return (
    <div>
      <Story/>
      <div>{Story.name}</div>
    </div>
  )
}
