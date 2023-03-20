import { Story } from '../../domain/entities/Story';
import { IStoryRepository } from '../../domain/repositories/IStoryRepository';
import { HackerNewsApi } from '../api/HackerNewsApi';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class RemoteStoryRepository implements IStoryRepository {
  async getTopStories(): Promise<Story[]> {
    const topStoryIds = await HackerNewsApi.getTopStories();
    const topStories: Story[] = [];

    for (let i = 0; i < 10; i++) {
      const story = await HackerNewsApi.getStoryById(topStoryIds[i]);
      topStories.push(story);
    }

    return topStories;
  }
}
