import 'reflect-metadata';
import { Container } from 'inversify';
import { GetTopStoriesUseCase } from '../domain/usecases/get-top-stories.usecase';
import { TYPES } from './types';
import { StoryRepository } from '../domain/repositories/story.repository';
import { RemoteStoryRepository } from '../data/remote-story.repository';
import { HackerNewsApi } from '../infrastructure/api/hacker-news-api';
import { API_BASE_URL } from '../config';
import { StoriesBloc } from '../presentation/stories-bloc';

const container = new Container();

container
  .bind<HackerNewsApi>(TYPES.HackerNewsApi)
  .toConstantValue(new HackerNewsApi(API_BASE_URL));
container
  .bind<StoryRepository>(TYPES.StoryRepository)
  .to(RemoteStoryRepository);
container
  .bind<GetTopStoriesUseCase>(TYPES.GetTopStoriesUseCase)
  .to(GetTopStoriesUseCase);
container.bind<StoriesBloc>(TYPES.StoriesBloc).to(StoriesBloc);

export default container;
