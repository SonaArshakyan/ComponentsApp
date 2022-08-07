import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/models/author';

export const requestAuthors = createAction('[Authors] Get All Authors');
export const requestAddAuthor = createAction('[Authors] Add  Author',props<{ author: Author }>());
export const requestAuthorsSuccess = createAction('[Authors Success] Get Authors Success', props<{ authors: Author[] }>());
export const requestAuthorsFail = createAction('[Authors Failure] Get Authors Failure');
