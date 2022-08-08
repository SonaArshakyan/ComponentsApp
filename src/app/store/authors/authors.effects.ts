import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/author.service';
import * as AuthorActions from './authors.actions';
@Injectable()
export class AuthorEffects {

    getAuthors$ = createEffect(() => this.actions$.pipe(
    ofType(AuthorActions.requestAuthors),
    mergeMap(() => this.authorsService.getAllAuthors()
      .pipe(
        map(authors => (AuthorActions.requestAuthorsSuccess({authors: authors}) )),
        catchError( () => of(AuthorActions.requestAuthorsFail() ))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}