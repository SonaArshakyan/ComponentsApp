import { NgModule } from "@angular/core";
import { EffectsFeatureModule, EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthorEffects } from "./authors.effects";
import * as authorsReducers from "./authors.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(
        authorsReducers.authorsFeatureKey,
        authorsReducers.authorsReducer
    ), EffectsModule.forFeature([AuthorEffects])
  ],
})
export class AuthorModule {}