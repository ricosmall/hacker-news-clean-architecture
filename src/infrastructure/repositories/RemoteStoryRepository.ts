import { Story } from '../../domain/entities/Story';
import { IStoryRepository } from '../../domain/repositories/IStoryRepository';
import { HackerNewsApi } from '../api/HackerNewsApi';
import { injectable } from 'inversify';

@injectable()
export class RemoteStoryRepository implements IStoryRepository {
  async getTopStories(): Promise<Story[]> {
    const topStoryIds = await HackerNewsApi.getTopStories();
    const topStories: Story[] = await Promise.all(
      topStoryIds.slice(0, 30).map((id) => HackerNewsApi.getStoryById(id))
    );

    return topStories;
  }
}
