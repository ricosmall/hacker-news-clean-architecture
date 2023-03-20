import React, { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import StoryList from '../components/StoryList';
import { useInject } from '../../infrastructure/container';
import { TYPES } from '../../infrastructure/container';
import { IGetTopStoriesUseCase } from '../../application/usecases/IGetTopStoriesUseCase';
import { Story } from '../../domain/entities/Story';

const TopStoriesPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]);
  const getTopStoriesUseCase = useInject<IGetTopStoriesUseCase>(
    TYPES.IGetTopStoriesUseCase
  );

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const stories = await getTopStoriesUseCase.execute();
        setStories(stories);
      } finally {
        setLoading(false);
      }
    }

    fetchTopStories();
  }, [getTopStoriesUseCase]);

  return (
    <>
      <AppHeader title="Hacker News Top Stories" />
      {loading ? <p>Loading...</p> : <StoryList stories={stories} />}
    </>
  );
};

export default TopStoriesPage;
