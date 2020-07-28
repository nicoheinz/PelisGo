import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataMovieService {
  
  film = {
      id: 'as',
      tittle: '',
      gender: '',
      actor: '',
      director: '',
      qualification: '',
      url_img: '',
      url_trailer: '',
      url_video: '',
      quality: '',
      duration: '',
      year: '',
      comments: '',
      created_at: '',
      updated_at: '',
  }

  constructor() { 
    
  }
}
