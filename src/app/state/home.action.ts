import { createAction, props } from '@ngrx/store';

const HOME_GET_USER = '[Home Component] get user';
const HOME_GET_USER_SUCCESS = '[Home Component] get user success';
const HOME_GET_USER_FAILURE = '[Home Component] get user failure';

export const getUser = createAction(HOME_GET_USER, props<{ name: string }>());
export const getUserSuccess = createAction(HOME_GET_USER_SUCCESS, props<any>());
export const getUserFailure = createAction(HOME_GET_USER_FAILURE, props<any>());


const HOME_GET_TWEETS = '[Home Component] get tweets';
const HOME_GET_TWEETS_SUCCESS = '[Home Component] get tweets success';
const HOME_GET_TWEETS_FAILURE = '[Home Component] get tweets failure';

export const getTweets = createAction(HOME_GET_TWEETS, props<{ id: string }>());
export const getTweetsSuccess = createAction(HOME_GET_TWEETS_SUCCESS, props<any>());
export const getTweetsFailure = createAction(HOME_GET_TWEETS_FAILURE, props<any>());
