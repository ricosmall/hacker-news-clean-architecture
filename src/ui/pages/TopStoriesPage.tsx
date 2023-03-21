import React from 'react';
import AppHeader from '../components/AppHeader';
import StoryList from '../components/StoryList';
import { TYPES } from '../../di/types';
import container from '../../di/containers';
import { StoriesBloc } from '../../presentation/stories-bloc';
import { useBlocState } from '../hooks/use-bloc-state';

const TopStoriesPage: React.FC = () => {
  const bloc = container.get<StoriesBloc>(TYPES.StoriesBloc);
  const state = useBlocState(bloc);

  return (
    <>
      <AppHeader title="Hacker News Top Stories" />
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <StoryList stories={state.stories} />
      )}
    </>
  );
};

export default TopStoriesPage;
