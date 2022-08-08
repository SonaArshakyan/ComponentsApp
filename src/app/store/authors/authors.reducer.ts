import { createReducer, on } from '@ngrx/store';
import { Author } from 'src/app/models/author';
import * as AuthorActions from './authors.actions';

export const authorsFeatureKey = "authors";

export interface AuthorsState {
    authors: Author[];
    addedAuthor: Author | null;
  }

export const initialState: AuthorsState = {
    authors: [],
    addedAuthor : null
};
export const authorsReducer = createReducer(
    initialState,
    on(AuthorActions.requestAuthors, state => ({ ...state, authors: state.authors })),
    on(AuthorActions.requestAddAuthor, (state, { author }) => ({ ...state , addedAuthor: author })),
    on(AuthorActions.requestAuthorsSuccess, (state, { authors }) => ({ ...state, authors: authors })),
    on(AuthorActions.requestAuthorsFail, (state) => ({ ...state }))
  );
