import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import * as HomeActions from './home.action';
import { HomeService } from '../services/home.service';

@Injectable()
export class HomeEffects {

  constructor(private actions$: Actions, private homeService: HomeService) {}
  
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getUser),
      exhaustMap((action) =>
        this.homeService.getUser(action.name).pipe(
          map((user: any) => {
            return HomeActions.getUserSuccess({ user: user.data[0] });
          }),
          catchError((error) => of(HomeActions.getUserFailure({ error })))
        )
      )
    )
  );

   getTweets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getTweets),
      exhaustMap((action) =>
        this.homeService.getTweets(action.id).pipe(
          map((tweets: any) => {
            return HomeActions.getTweetsSuccess({ tweets: tweets.data });
          }),
          catchError((error) => of(HomeActions.getUserFailure({ error })))
        )
      )
    )
  );

 
}
