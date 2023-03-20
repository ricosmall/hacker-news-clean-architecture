import { Container, interfaces } from 'inversify';
import 'reflect-metadata';
import { IGetTopStoriesUseCase } from '../application/usecases/IGetTopStoriesUseCase';
import { GetTopStoriesUseCase } from '../application/usecases/GetTopStoriesUseCase';
import { IStoryService } from '../application/services/IStoryService';
import { StoryService } from '../application/services/StoryService';
import { IStoryRepository } from '../domain/repositories/IStoryRepository';
import { StoryRepository } from '../domain/repositories/StoryRepository';
import { InMemoryStoryRepository } from './repositories/InMemoryStoryRepository';
import { RemoteStoryRepository } from './repositories/RemoteStoryRepository';
import React, { useContext } from 'react';

export const TYPES = {
  IGetTopStoriesUseCase: Symbol.for('IGetTopStoriesUseCase'),
  IStoryService: Symbol.for('IStoryService'),
  IStoryRepository: Symbol.for('IStoryRepository'),
};

const container = new Container();

container
  .bind<IStoryRepository>(TYPES.IStoryRepository)
  .to(RemoteStoryRepository);
container.bind<IStoryService>(TYPES.IStoryService).to(StoryService);
container
  .bind<IGetTopStoriesUseCase>(TYPES.IGetTopStoriesUseCase)
  .to(GetTopStoriesUseCase);

// create the context object that will hold the container
const InversifyContext = React.createContext<Container>(container);

// define the hook that retrieves the container from the context
export function useInject<T>(
  serviceIdentifier: interfaces.ServiceIdentifier<T>
): T {
  const container = useContext(InversifyContext);
  if (!container) {
    throw new Error('Inversify container not found!');
  }
  return container.get<T>(serviceIdentifier);
}

export default container;
