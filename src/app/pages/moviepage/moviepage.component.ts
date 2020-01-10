import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/model/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {

  private movieId: string;
  movie: Film;

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.filmService.getMovie(this.movieId).subscribe(
        res => {
          this.movie = res;
        }
      );
    });
  }

}
