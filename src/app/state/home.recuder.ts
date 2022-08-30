import {  createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.action';

export interface State {
  user: any;
  tweets: Array<any>;
  
}

export const initialState: State = {
  user: {},
  tweets: [],
  
};

export const userReducer = createReducer(
  initialState,
  on(HomeActions.getUserSuccess, (state, action: any) => ({
    ...state,
    user: action.user,
  })),
   
  on(HomeActions.getTweetsSuccess, (state, action: any) => {
    console.log(action.tweets)
    return {
      ...state,
      tweets: action.tweets,
    };
  })
);
