import { Story } from '../../domain/entities/Story';

export interface IGetTopStoriesUseCase {
  execute: () => Promise<Story[]>;
}
