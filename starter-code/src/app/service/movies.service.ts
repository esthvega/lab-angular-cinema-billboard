import { Injectable } from "@angular/core";
import { MoviesInterface } from "./moviesInterface";
import moviesList from "../../sample-movies";
import * as _ from 'underscore';

@Injectable()
export class MoviesService {
  movies: Array<MoviesInterface> = moviesList;

  constructor() {}
  getMovies() {
    return this.movies;
  }
  getMovie(id) {
    return _.findWhere(this.movies, { id });
  }
}
