import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/internal/operators';
import { DataMovieService } from '../services/data-movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  onVideoPaused(ev: any) {
    console.log('User paused the video');
  }

  
  public tittle;
  public img;
  public starts;
  public gender;
  public year;
  public films;
  private state$: Observable<object>;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public dataMovie: DataMovieService
  ) { 
    this.tittle = dataMovie.film.tittle;
    this.films = [
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      },
      { 
        img: "./assets/img/fast2.jpg",
        starts: "6.9",
        name: "Rapido y Furioso 9",
        gender: "Acción",
        year: "2020"
      }
    ];
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
   
}
