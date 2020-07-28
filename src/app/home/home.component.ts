import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataMovieService } from '../services/data-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  genders;
  years;
  otherOptions;
  films:any= [];
  items = [];
  pageOfItems: Array<any>;
  typefilterargs = '';
  filterargs = '';
  tittle= '';

  constructor( 
    private movieService: MovieService,
    public router: Router,
    private dataMovie: DataMovieService,
    private route: ActivatedRoute
  ) {
    if (this.route.snapshot.params.type !== undefined) {
      this.typefilterargs = this.route.snapshot.params.type;
      this.filterargs = this.route.snapshot.params.type;
    }
  }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data)=>{
      this.items = data;
    });

    this.genders = [
      "Todos",
      "Acción",
      "Animación",
      "Aventura",
      "Bélica",
      "Ciencia ficción",
      "Comedia",
      "Crimen",
      "Documental",
      "Drama",
      "Familia",
      "Fantasía",
      "Historia",
      "Misterio",
      "Música",
      "Película de TV",
      "Romance",
      "Suspense",
      "Terror",
      "Western"
    ];

    this.genders = [
      "Todos",
      "Acción",
      "Animación",
      "Aventura",
      "Bélica",
      "Ciencia ficción",
      "Comedia",
      "Crimen",
      "Documental",
      "Drama",
      "Familia",
      "Fantasía",
      "Historia",
      "Misterio",
      "Música",
      "Película de TV",
      "Romance",
      "Suspense",
      "Terror",
      "Western"
    ];

    this.years = [
      "Todos",
      "1966",
      "1970",
      "1972",
      "1974",
      "1979",
      "1981",
      "1983",
      "1985",
      "1986",
      "1987",
      "1988",
      "1990",
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020"
    ];

    this.otherOptions = [
      "Todos",
      "Estrenos",
      "Recomendadas"
    ];
  }

  onChangePage(pageOfItems: Array<any>) {
      this.pageOfItems = pageOfItems;
  }

  sendFilm(data) {
    this.dataMovie.film.id = data.id;
    this.dataMovie.film.tittle= data.tittle;
    this.dataMovie.film.gender= data.gender;
    this.dataMovie.film.actor= data.actor;
    this.dataMovie.film.director= data.director;
    this.dataMovie.film.qualification= data.qualification;
    this.dataMovie.film.url_img= data.url_img;
    this.dataMovie.film.url_trailer= data.url_trailer;
    this.dataMovie.film.url_video= data.url_video;
    this.dataMovie.film.quality= data.quality;
    this.dataMovie.film.duration= data.duration;
    this.dataMovie.film.year= data.year;
    this.dataMovie.film.comments= data.comments;
    this.dataMovie.film.created_at= data.created_at;
    this.dataMovie.film.updated_at= data.updated_at;

    this.router.navigate(['/detail',this.dataMovie.film.tittle]);
  }

  yearFilter(value) {
    this.typefilterargs = 'year';
    this.filterargs = value;
  }

  genderFilter(value) {
    this.typefilterargs = 'gender';
    this.filterargs = value;
  }

  otherOpcionFilter(value) {
    this.typefilterargs = value;
    this.filterargs = value;
  }

  tittleFilter(value) {
    console.log(value);
    this.typefilterargs = 'tittle';
    this.filterargs = value;
  }

  movieFilter() {
    this.typefilterargs = 'peliculas';
    this.filterargs = 'peliculas';
  }

  serieFilter() {
    this.typefilterargs = 'series';
    this.filterargs = 'series';
  }
}