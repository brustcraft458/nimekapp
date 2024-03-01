import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiResult {
  status: boolean
  message: string
  completed: FilmDetail[]
  currentPage: string
}

export interface FilmDetail {
  title: string
  thumb: string
  total_episode: string
  updated_on: string
  score: string
  endpoint: string
}


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://otakudesu-anime-api.vercel.app/api/v1/completed/1'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getFilms(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.apiUrl);
  }

  postFilm() {
    // return this.http.post<any>(this.apiUrl, film);
  }
}
