import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { GetTopStoriesUseCase } from '../domain/usecases/get-top-stories.usecase';
import { Bloc } from './bloc';
import { initialState, StoriesState } from './stories-state';

@injectable()
export class StoriesBloc extends Bloc<StoriesState> {
  constructor(
    @inject(TYPES.GetTopStoriesUseCase)
    private readonly getTopStoriesUseCase: GetTopStoriesUseCase
  ) {
    super(initialState);

    this.loadStories();
  }

  public async loadStories() {
    const stories = await this.getTopStoriesUseCase.execute();
    this.setState({ stories, loading: false });
  }
}
