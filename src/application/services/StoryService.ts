import type { IStoryRepository } from '../../domain/repositories/IStoryRepository';
import { IStoryService } from './IStoryService';
import { Story } from '../../domain/entities/Story';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';

@injectable()
export class StoryService implements IStoryService {
  constructor(
    @inject(TYPES.IStoryRepository)
    private readonly storyRepository: IStoryRepository
  ) {}

  async getTopStories(): Promise<Story[]> {
    return await this.storyRepository.getTopStories();
  }
}
