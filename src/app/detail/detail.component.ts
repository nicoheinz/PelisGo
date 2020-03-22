import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService, InitParams, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

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

  @ViewChild (FBVideoComponent, { static: false }) video: FBVideoComponent;

  ngAfterViewInit() {
    this.video.play();
    this.video.pause();
    this.video.getVolume();
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
  
  constructor(
    public route: ActivatedRoute,
    private fb: FacebookService
  ) { 
    

    let params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share'
    };
   
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
      
    this.img = "./assets/img/fast2.jpg";
    this.starts= "6.9";
    this.gender = "Acción";
    this.year= "2020";

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
      let a = this.route.params.subscribe(params => {
        this.tittle = params['tittle'];
      });
   }

}
