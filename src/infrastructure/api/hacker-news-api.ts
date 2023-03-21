import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { Story } from '../../domain/entities/story';

@injectable()
export class HackerNewsApi {
  constructor(private readonly baseUrl: string) {}

  private async get<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse = await axios.get(
      `${this.baseUrl}${endpoint}.json`
    );
    return response.data;
  }

  async getTopStories(): Promise<number[]> {
    return await this.get<number[]>('topstories');
  }

  async getStoryById(storyId: number): Promise<Story> {
    const story: any = await this.get(`item/${storyId}`);
    return new Story(
      story.id,
      story.title,
      story.url,
      story.by,
      story.score,
      new Date(story.time * 1000)
    );
  }
}
