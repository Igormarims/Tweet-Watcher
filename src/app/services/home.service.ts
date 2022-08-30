  // imports angular
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// imported from libraries
import { Observable } from 'rxjs';

// my imports
import { environment } from 'src/environments/environment';
import { Twiteer } from '../model/twiteer.model';
import { User } from '../model/user.model';

const headers = new HttpHeaders({
  Authorization: `Bearer ${environment.token_twitter}`
});

@Injectable({
  providedIn: 'root',
})
export class HomeService {


  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(
      `/2/users/by?usernames=${username}`,
      { headers }
    );
  }


  myUser(username: string): Observable<User> {

    return this.http.get<User>(
      `/2/users/by?usernames=${username}`,
      { headers }
    );
  }

  createTweetNew(idTw: string): Observable<Twiteer[]> {
    return this.http.get<Twiteer[]>(
      `/2/users/${idTw}/tweets?max_results=10&exclude=replies,retweets`,
      { headers }
    );

  }


  getTweets(userId: string): Observable<Twiteer[]> {
    return this.http.get<Twiteer[]>(
      `/2/users/${userId}/tweets?max_results=10&exclude=replies,retweets`,
      { headers }
    );
  }

  createTweet(id: any, tw: any): Observable<Twiteer> {
    return this.http.post<Twiteer>('/2//2/tweets', tw, { headers })
  };
}
