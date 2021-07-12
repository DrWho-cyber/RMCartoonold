import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPgComponent } from './views/about-pg/about-pg.component';
import { RubenGalavizComponent } from './views/about-pg/ruben-galaviz/ruben-galaviz.component';
import { HomePgComponent } from './views/home-pg/home-pg.component';

const routes: Routes = [
  {path:'', 
  component: HomePgComponent},
  {path:'about', 
  component: AboutPgComponent,
  children:[
    {path:'Ruben-galaviz', 
    component: RubenGalavizComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
