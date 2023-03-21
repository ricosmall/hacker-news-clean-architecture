import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { Story } from '../domain/entities/story';
import { StoryRepository } from '../domain/repositories/story.repository';
import { HackerNewsApi } from '../infrastructure/api/hacker-news-api';

@injectable()
export class RemoteStoryRepository implements StoryRepository {
  constructor(
    @inject(TYPES.HackerNewsApi) private readonly hackerNewsApi: HackerNewsApi
  ) {}

  async getTopStories(): Promise<Story[]> {
    const topStoryIds = await this.hackerNewsApi.getTopStories();
    const topStories: Story[] = await Promise.all(
      topStoryIds.slice(0, 30).map((id) => this.hackerNewsApi.getStoryById(id))
    );

    return topStories;
  }
}
