import { Story } from '../domain/entities/story';

export interface StoriesState {
  loading: boolean;
  stories: Story[];
}

export const initialState: StoriesState = {
  loading: true,
  stories: [],
};
