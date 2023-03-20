import { IStoryRepository } from '../../domain/repositories/IStoryRepository';
import { IStoryService } from './IStoryService';
import { Story } from '../../domain/entities/Story';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { TYPES } from '../../infrastructure/container';

@injectable()
export class StoryService implements IStoryService {
  private readonly storyRepository: IStoryRepository;
  constructor(
    @inject(TYPES.IStoryRepository) storyRepository: IStoryRepository
  ) {
    this.storyRepository = storyRepository;
  }

  async getTopStories(): Promise<Story[]> {
    return await this.storyRepository.getTopStories();
  }
}
