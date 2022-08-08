import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Author } from 'src/app/models/author';
import { AuthorsState } from './authors.reducer';
import * as AuthorActions from './authors.actions';
import * as AuthorSelectors from './authors.selectors';

@Injectable()
export class AuthorsStateFacade {
  authors$ = this.store.pipe(select(AuthorSelectors.getAllAuthors));
  addedAuthor$ = this.store.pipe(select(AuthorSelectors.getAddedAuthor));

  constructor(private store: Store<AuthorsState>) {}

  getAuthors() {
    this.store.dispatch(AuthorActions.requestAuthors());
  }

  addAuthor(author:Author) {
    this.store.dispatch(AuthorActions.requestAddAuthor({author:author}));
  }
}