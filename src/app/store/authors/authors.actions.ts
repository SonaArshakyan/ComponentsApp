import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/models/author';

export const requestAuthors = createAction('[Authors] Get All Authors');
export const requestAddAuthor = createAction('[Authors] Add  Author',props<{ author: Author }>());
