import { Story } from '../../domain/entities/Story';
import { IStoryRepository } from '../../domain/repositories/IStoryRepository';

export class InMemoryStoryRepository implements IStoryRepository {
  private stories: Story[] = [];

  async getTopStories(): Promise<Story[]> {
    return this.stories;
  }

  addStory(story: Story) {
    this.stories.push(story);
  }

  reset() {
    this.stories = [];
  }
}
