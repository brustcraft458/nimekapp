import { Component, OnInit } from '@angular/core';
import { ApiFilmData, FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  filmList: ApiFilmData[] = []

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((res) => {
      this.filmList = res.completed
    })
  }

  trimTitle(title: string, maxLength: number): string {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  }

  trimEndpoint(urlpoint: string): string {
    let strim = urlpoint.split("/")
    let idx = (strim.length - 1) - 1
    return strim[idx]
  }


}
