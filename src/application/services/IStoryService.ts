import { Story } from '../../domain/entities/Story';

export interface IStoryService {
  getTopStories: () => Promise<Story[]>;
}
