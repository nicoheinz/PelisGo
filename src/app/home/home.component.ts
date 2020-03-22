import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public genders;
  public years;
  public otherOptions;
  public films;
  public items;

  constructor() { 
    
  }

  ngOnInit() {

    this.films = [
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: false
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: false
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020",
        movie: true
      },
    ];

    this.items = [];
    let sizeItems = Math.round(this.films.length/25) + 1;

    for(var x=1; x<=sizeItems;x++) {
      this.items.push(x);
    } 

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

}
