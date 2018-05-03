import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService } from './service/movies.service';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './MyHomeComponent/MyHomeComponent.component';
import { MyMovieComponentComponent } from './MyMovieComponent/MyMovieComponent.component';


const routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component:MyHomeComponentComponent  },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})


export class AppModule { }
