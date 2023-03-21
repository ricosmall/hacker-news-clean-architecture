import { Story } from '../entities/story';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/types';
import type { StoryRepository } from '../repositories/story.repository';

@injectable()
export class GetTopStoriesUseCase {
  constructor(
    @inject(TYPES.StoryRepository)
    private readonly storyRepository: StoryRepository
  ) {}

  async execute(): Promise<Story[]> {
    return await this.storyRepository.getTopStories();
  }
}
