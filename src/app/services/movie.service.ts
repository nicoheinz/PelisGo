import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';

export interface Movie {
  id: Number,
  tittle: String,
  gender: String,
  actor: String,
  director: String,
  qualification: String,
  url_img: String,
  url_trailer: String,
  url_video: String,
  quality: String,
  duration: String,
  year: String,
  comments: String,
  created_at: String,
  updated_at: String,
}

const API_URL: string = 'http://127.0.0.1:8000/api';
const API_KEY: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmM3MjEyYzZjYjhlODE2YTI1NTRjNjdhNWY1OTZjZDU0MDViNjQ2YjRiOGVlODMwZmMyYTM3ZWQ3YjY5NDMwZDlkMjgyMTM4ZGQzOTBmZmQiLCJpYXQiOjE1ODUwMDc4MTYsIm5iZiI6MTU4NTAwNzgxNiwiZXhwIjoxNjE2NTQzODE2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KTf1a1xaqWkuXzLTtO_v0d-5b7sjiv_Q_wWCVe4S84kurgz305JNyqqzruSb6dbSxkntqMVGTkTr7Y-yS6kPt_sT5bTMrw_iGhwSWBKwagH2xBe9yFmR7aweFtIDontOqEL890XUxx4BGmj9xowe1-vAmsH5bDHRAHt7173Y5r8ST-Lh9ViBqrsLT0-4y6owrVW-m61PLYuATH4EjFd72JdCSZ9N7cKzg4dsH7ocXopy0HZS-TeoPuOJcvmjMoqP4UoqNW5yg0dsxrKVOQdwGrgCFKkkJzZRZwsTuY7QjB4YfWQetC0UyEJx-s7GUKLRzzCftF5sPGlC1CjGO_4vhA8HVuGiw9klNAsi-Cpob2U0_tea4E7IHj0wyfXl8bO8SsBqyxLpA9MhacaQrS5pp0WUTinujAqE6VuCjkBY3bvb5wmCUPvP1piri6z9ORTROaWLzF7Cb3JcVytYK7EF47rbJwLlcjnjdFH9SxPa4qpCQwW8t3VM8MV9or4I79cZRxjIVQWAaVqoeCRtkbn_1WwHjJzVGHI5fYmDjnunZRK5gQK4P9Yr3RzPvkWyUWLSDNJxC9oRZtnHm-0-JoqcdxafTTwykT5G8yOPSZWls0pOAnUZPpRs24hE9IJGH3EQqx635edquVE_-N-8P0m5gG2kLjGsH8jNCw6t-iUE4fw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ API_KEY
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { 

  }

  /*getAllMovies(): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', '');
    return this.http.get<Movie[]>(API_URL, httpOptions).pipe(
      retry(3), catchError(this.handleError<Movie[]>('getAllMovies', [])));
  }*/

  getAllMovies(): Observable<any> {
    return this.http.get<Movie[]>(API_URL+'/movie/', httpOptions).pipe(
      retry(1), catchError(this.handleError<Movie[]>('getAllMovies', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}