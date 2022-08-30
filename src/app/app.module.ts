  // imports angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// imported from libraries
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
 
// my imports
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { userReducer } from './state/home.recuder';
import { HomeEffects } from './state/home.effect';
import { BtnModule } from './components/button/btn/btn.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    CardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    StoreModule.forRoot({
      user: userReducer
    }, {}),
    EffectsModule.forRoot([
      HomeEffects
    ]),
   
    BtnModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
