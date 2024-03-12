import { Injectable } from '@angular/core';
import { ApiDownloadUrl } from './film.service';

@Injectable({
  providedIn: 'root'
})
export class FilmParserService {
  domParser = new DOMParser()
  constructor() {}

  downloadUrl(text: string) {
    const htmlDoc = this.domParser.parseFromString(text, 'text/html')
    let result: ApiDownloadUrl[] = []
    let downloadElm = htmlDoc.querySelector(".download")?.querySelectorAll("li")
    downloadElm?.forEach(elm => {
      let data = {
        'title': elm.querySelector("strong")?.innerText || '',
        'url': elm.querySelector("a")?.href || ''
      }
      if (data.title == '' || data.url == '') {return}

      result.push(data)
    })

    return result
  }

  filmDetailed(textarr: string[]) {
    let data: any = {}
    textarr.forEach((text) => {
      let match: any = text.match(/(.+): (.+)/)
      let key = match[1].toLowerCase().replaceAll(" ", "_")
      let val = match[2]
      data[key] = val
    })
    return data
  }
}
