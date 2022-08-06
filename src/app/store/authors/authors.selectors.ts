import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorsFeatureKey, AuthorsState } from './authors.reducer';

const selectFeature = createFeatureSelector<AuthorsState>(authorsFeatureKey);

export const getAllAuthors = createSelector(
    selectFeature,
  (state: AuthorsState) => state.authors
);
export const getAddedAuthor = createSelector(
  selectFeature,
  (state: AuthorsState) => state.addedAuthor
);
