import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'

import { ProxyHttpService } from './servisec/proxy-http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { CardsComponent } from './sharedComps/cards/cards.component';
import { CarouselComponent } from './sharedComps/carousel/carousel.component';
import { HomePgComponent } from './views/home-pg/home-pg.component';
import { AboutPgComponent } from './views/about-pg/about-pg.component';
import { RubenGalavizComponent } from './views/about-pg/ruben-galaviz/ruben-galaviz.component';
import { SearchResultsComponent } from './views/nav-bar/search-results/search-results.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardsComponent,
    CarouselComponent,
    HomePgComponent,
    AboutPgComponent,
    RubenGalavizComponent,
    SearchResultsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    
  ],
  providers: [ProxyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
