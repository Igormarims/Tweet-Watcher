import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { Twiteer } from 'src/app/model/twiteer.model';
import { User } from 'src/app/model/user.model';
import { HomeService } from 'src/app/services/home.service';
import * as HomeActions from '../../state/home.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  username: string = '';

  user: User = {
    name: '',
    username: '',
    id: '',
  };

  myTweets: Twiteer[] = [];

  tweets: Twiteer[] = [];

  my: User = {
    name: '',
    username: '',
    id: ''
  };
  createText: string = '';


  constructor(private store: Store, private homeService: HomeService) { }

  ngOnInit(): void {
    this.store.subscribe((storeData: any) => {
      if (storeData.user.user) {
        this.user = storeData.user.user;
      }
      if (storeData.user.tweets) {
        this.tweets = storeData.user.tweets;
      }
    });
    this.myUser();
    this.createTweetNew();
  }

  myUser(): void {
    this.homeService.myUser(environment.my_nome).
      subscribe((dados: any) => {
        this.my = dados.data[0];
      });

  }

  createTweetNew(): void {
    this.homeService.createTweetNew(environment.my_twitterId)
      .subscribe((tw: any) => {
        this.myTweets = tw.data;
      });

  }

  setUsername($event: any): void {
    this.username = $event.target.value;

  }

  getUser(): void {

    this.store.dispatch(HomeActions.getUser({ name: this.username }));
    if (this.user.id) {
      this.getTweets();
    }

  }

  getTweets(): void {
    this.store.dispatch(HomeActions.getTweets({ id: this.user.id }));
  }

  createTweet(event: any): void {
    this.createText = event.value

  }



}
