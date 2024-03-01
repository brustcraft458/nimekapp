import { Component, OnInit } from '@angular/core';
import { FilmDetail, FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  filmList: FilmDetail[] = []

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((res) => {
      // console.log(tes.title)
      this.filmList = res.completed
    })
  }

  trimTitle(title: string, maxLength: number): string {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  }


}
