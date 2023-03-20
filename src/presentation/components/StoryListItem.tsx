import React from 'react';
import { Story } from '../../domain/entities/Story';

interface Props {
  story: Story;
}

const StoryListItem: React.FC<Props> = ({ story }) => {
  return (
    <li>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
      </a>{' '}
      by <span>{story.author}</span> | Score: {story.score}
    </li>
  );
};

export default StoryListItem;
