import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  constructor (
    private http: Http
  ) {}

  url = `https://api.themoviedb.org/3/movie/popular?api_key=c2731f22daeec0bc7fb47c2c1e052e57`;

  getMovies() {
    return this.http.get( this.url ).map( ( res:Response ) => res.json() );
  }
}
