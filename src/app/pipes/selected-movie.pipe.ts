import { PipeTransform, Pipe } from '@angular/core';
import { Film } from '../model/film.model';

@Pipe({
    name: 'selectedMovie'
})

export class SelectedMoviePipe implements PipeTransform {
    transform(allMovies: Film[], filmId: number): any{
        return allMovies.filter(m => m.id === filmId);
    }
}