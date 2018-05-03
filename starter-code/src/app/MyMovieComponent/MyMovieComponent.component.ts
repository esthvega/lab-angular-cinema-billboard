import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../service/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-MyMovieComponent",
  templateUrl: "./MyMovieComponent.component.html",
  styleUrls: ["./MyMovieComponent.component.css"]
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movie: object;
  constructor(private router: ActivatedRoute, public movieSample: MoviesService ) {}
  ngOnInit() {
    this.router.params.subscribe(
      params => (this.movieId = Number(params["id"]))
    );
    this.movie = this.movieSample.getMovie(this.movieId)
  }
}
