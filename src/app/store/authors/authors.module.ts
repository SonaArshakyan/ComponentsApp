import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import * as authorsReducers from "./authors.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(
        authorsReducers.authorsFeatureKey,
        authorsReducers.authorsReducer
    ),
  ],
})
export class AuthorModule {}