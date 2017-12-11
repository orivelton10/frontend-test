import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { ServiceRanking } from './ranking.service';


@NgModule({
  declarations: [
    AppComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServiceRanking],
  bootstrap: [AppComponent]
})
export class AppModule { }
