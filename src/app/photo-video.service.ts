/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\photo-video.service.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:38:23 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { JsonConvert, JsonObject, JsonProperty } from 'json2typescript';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

/* Model class for Pictures */
@JsonObject('Pictures')
export class Pictures {
  @JsonProperty('avg_color', String, true)
  avg_color: string = undefined;
  @JsonProperty('height', Number, true)
  height: number = undefined;
  @JsonProperty('id', Number, true)
  id: number = undefined;
  @JsonProperty('liked', Boolean, true)
  liked: boolean = undefined;
  @JsonProperty('photographer', String, true)
  photographer: string = undefined;
  @JsonProperty('photographer_id', Number, true)
  photographer_id: number = undefined;
  @JsonProperty('photographer_url', String, true)
  photographer_url: string = undefined;
  @JsonProperty('src', Object, true)
  src: object = {};
  @JsonProperty('url', String, true)
  url: string = undefined;
  @JsonProperty('width', Number, true)
  width: number = undefined;
}

/* Model class for Pictures */
@JsonObject('Videos')
export class Videos {
  @JsonProperty('avg_color', String, true)
  avg_color: string = undefined;
  @JsonProperty('height', Number, true)
  height: number = undefined;
  @JsonProperty('id', Number, true)
  id: number = undefined;
  @JsonProperty('liked', Boolean, true)
  liked: boolean = undefined;
  @JsonProperty('photographer', String, true)
  photographer: string = undefined;
  @JsonProperty('photographer_id', Number, true)
  photographer_id: number = undefined;
  @JsonProperty('photographer_url', String, true)
  photographer_url: string = undefined;
  @JsonProperty('src', Object, true)
  src: object = {};
  @JsonProperty('url', String, true)
  url: string = undefined;
  @JsonProperty('width', Number, true)
  width: number = undefined;
  @JsonProperty('video_pictures', Object, true)
  video_pictures = {};
  @JsonProperty('video_files', Object, true)
  video_files = {};
  @JsonProperty('user', Object, true)
  user = {};
}

@Injectable({
  providedIn: 'root'
})
export class PhotoVideoService {
  defaultHeaders = new HttpHeaders();
  file: Videos;
  searchText: string;
  favoriteImage = [];
  favoriteVideos = [];

  private URLs = {
    header: 'curated',
    images: 'search?query=',
    videos: 'videos/search?query='
  };

  constructor(
    private readonly http: HttpClient,
    private readonly loaderService: LoaderService
  ) {}

  protected httpHeaderOption() {
    let defaultHeader = new HttpHeaders();
    defaultHeader = defaultHeader.append(
      'Authorization',
      environment.pixelApiKey
    );
    const httpOptions = {
      headers: defaultHeader,
      observe: 'response'
    };
    return httpOptions;
  }

  getHeaderBackground(): Observable<Pictures[] | Error> {
    return new Observable(observer => {
      this.loaderService.display(true);
      const httpOptions: any = this.httpHeaderOption();

      this.http
        .get(environment.baseUrl + this.URLs.header, httpOptions)
        .subscribe(
          (res: any) => {
            const jsonConvert = new JsonConvert();
            const photos: Pictures[] = jsonConvert.deserializeArray(
              res.body.photos,
              Pictures
            );
            this.loaderService.display(false);

            observer.next(photos);
            observer.complete();
          },
          (errors: any) => {
            observer.error(errors.message);
            observer.complete();
          }
        );
    });
  }

  getAllImages(text: string): Observable<Pictures[] | Error> {
    return new Observable(observer => {
      this.loaderService.display(true);
      const httpOptions: any = this.httpHeaderOption();

      this.http
        .get(environment.baseUrl + this.URLs.images + text, httpOptions)
        .subscribe(
          (res: any) => {
            const jsonConvert = new JsonConvert();
            const photos: Pictures[] = jsonConvert.deserializeArray(
              res.body.photos,
              Pictures
            );
            this.loaderService.display(false);

            observer.next(photos);
            observer.complete();
          },
          (errors: any) => {
            observer.error(errors.message);
            observer.complete();
          }
        );
    });
  }

  getAllVideos(text: string): Observable<Videos[] | Error> {
    return new Observable(observer => {
      this.loaderService.display(true);
      const httpOptions: any = this.httpHeaderOption();

      this.http
        .get(environment.baseUrl + this.URLs.videos + text, httpOptions)
        .subscribe(
          (res: any) => {
            const jsonConvert = new JsonConvert();
            const videos: Videos[] = jsonConvert.deserializeArray(
              res.body.videos,
              Videos
            );
            this.loaderService.display(false);

            observer.next(videos);
            observer.complete();
          },
          (errors: any) => {
            observer.error(errors.message);
            observer.complete();
          }
        );
    });
  }

  setDetailedFile(file): void {
    this.file = file;
  }

  getFileDetailes(): Videos {
    return this.file;
  }

  setFavoriteImages(item) {
    this.favoriteImage.push(item);
  }

  setFavoriteVideos(item) {
    this.favoriteVideos.push(item);
  }

  getFavoriteImages(): Pictures[] {
    return this.favoriteImage;
  }

  getFavoriteVideos(): Videos[] {
    return this.favoriteVideos;
  }

  removeFavoriteImage(item) {
    this.favoriteImage.forEach((element, index) => {
      if (element.id === item.id) {
        this.favoriteImage.splice(index, 1);
      }
    });
  }

  removeFavoriteVideo(item) {
    this.favoriteVideos.forEach((element, index) => {
      if (element.id === item.id) {
        this.favoriteVideos.splice(index, 1);
      }
    });
  }
}
