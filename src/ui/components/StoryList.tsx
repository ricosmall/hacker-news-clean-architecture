import React from 'react';
import { Story } from '../../domain/entities/story';
import StoryListItem from './StoryListItem';

interface Props {
  stories: Story[];
}

const StoryList: React.FC<Props> = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <StoryListItem key={story.id} story={story} />
      ))}
    </ul>
  );
};

export default StoryList;
