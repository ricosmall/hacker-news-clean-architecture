import { Story } from '../entities/story';

export interface StoryRepository {
  getTopStories: () => Promise<Story[]>;
}
