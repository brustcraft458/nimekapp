import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService, ApiDetailFilm, ApiDetailEpisode } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  filmData: ApiDetailFilm = {
    thumb: '',
    sinopsis: [],
    detail: [],
    title: ''
  }

  episodeList: ApiDetailEpisode[] = []

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    const endpoint: any = this.route.snapshot.paramMap.get('endpoint')
    this.filmService.getDetail(endpoint).subscribe(res => {
      this.filmData = res.anime_detail
      this.episodeList = res.episode_list
    })
  }

}
