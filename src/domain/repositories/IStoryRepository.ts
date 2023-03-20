import { Story } from '../entities/Story';

export interface IStoryRepository {
  getTopStories: () => Promise<Story[]>;
}
