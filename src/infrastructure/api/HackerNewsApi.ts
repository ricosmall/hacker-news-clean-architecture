import axios, { AxiosResponse } from 'axios';
import { Story } from '../../domain/entities/Story';

const HACKER_NEWS_API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export class HackerNewsApi {
  private static async get<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse = await axios.get(
      `${HACKER_NEWS_API_BASE_URL}${endpoint}.json`
    );
    return response.data;
  }

  static async getTopStories(): Promise<number[]> {
    return await this.get<number[]>('topstories');
  }

  static async getStoryById(storyId: number): Promise<Story> {
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
