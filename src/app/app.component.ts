import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from './api';

@Component({
  selector: 'drop-down',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api]
})
export class AppComponent {
  constructor ( private api: Api ) {}

  title = 'app';
  data = [];
  defaultValue = 'Movie: ';
  selected = null;
  show = false;

  setInitialState() {
    this.selected = null;
    this.show = false;
  }

  getHeroes() {
    this.api.getMovies().subscribe( ( { results } ) => this.data = results.map( movie => movie.original_title ) );
  }

  open() {
    this.show = !this.show;
  }

  select( value ) {
    this.selected = this.defaultValue + value;
    this.open();
  }

  clear() {
    this.setInitialState();
  }

  ngOnInit() {
    this.getHeroes()
  }
}
