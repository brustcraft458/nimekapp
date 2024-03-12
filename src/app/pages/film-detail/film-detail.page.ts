import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService, ApiDetailFilm, ApiDetailEpisode } from 'src/app/services/film.service';
import { Browser } from '@capacitor/browser';

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

  parseDownload(urlpoint: string) {
    this.filmService.getDownloadUrl(urlpoint).subscribe(data => {
      let url: any = data[0].url
      Browser.open({ url: url });
    });
  }

}
