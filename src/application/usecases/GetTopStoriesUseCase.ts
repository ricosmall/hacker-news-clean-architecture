import { IGetTopStoriesUseCase } from './IGetTopStoriesUseCase';
import type { IStoryService } from '../services/IStoryService';
import { Story } from '../../domain/entities/Story';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';

@injectable()
export class GetTopStoriesUseCase implements IGetTopStoriesUseCase {
  constructor(
    @inject(TYPES.IStoryService) private readonly storyService: IStoryService
  ) {}

  async execute(): Promise<Story[]> {
    return await this.storyService.getTopStories();
  }
}
