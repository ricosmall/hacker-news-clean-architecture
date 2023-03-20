import { IGetTopStoriesUseCase } from './IGetTopStoriesUseCase';
import { IStoryService } from '../services/IStoryService';
import { Story } from '../../domain/entities/Story';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { TYPES } from '../../infrastructure/container';

@injectable()
export class GetTopStoriesUseCase implements IGetTopStoriesUseCase {
  private readonly storyService: IStoryService;
  constructor(@inject(TYPES.IStoryService) storyService: IStoryService) {
    this.storyService = storyService;
  }

  async execute(): Promise<Story[]> {
    return await this.storyService.getTopStories();
  }
}
