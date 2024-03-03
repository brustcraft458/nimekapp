import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiFilm {
  status: boolean
  message: string
  completed: FilmDetail[]
  currentPage: string
}

export interface ApiDownloadUrl {
  title: string
  url: string
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
  private apiUrl = 'https://api-nimekapp.vercel.app/api/v1'

  constructor(private http: HttpClient) { }

  getFilms(): Observable<ApiFilm> {
    return this.http.get<ApiFilm>(`${this.apiUrl}/completed/1`)
  }

  getDownloadUrl(urlpoint: string): Observable<ApiDownloadUrl[]> {
    const htmlApiParse = (text: string) => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(text, 'text/html')
      let result: ApiDownloadUrl[] = []
      let downloadElm = htmlDoc.querySelector(".download")?.querySelectorAll("li")
      downloadElm?.forEach(elm => {
        let data = {
          'title': elm.querySelector("strong")?.innerText || '',
          'url': elm.querySelector("a")?.href || ''
        }
        if (data.title != '' && data.url != '') {
          result.push(data)
        }
      })

      return result
    }

    return new Observable((observer) => {
      this.http.get(urlpoint, {responseType: 'text'}).subscribe(res => {
        let result = htmlApiParse(res)
        observer.next(result)
        observer.complete()
      })
    })
  }

  postFilm() {
    // return this.http.post<any>(this.apiUrl, film);
  }
}
