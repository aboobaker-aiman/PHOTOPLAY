/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\home\home.component.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:27:11 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Component, OnInit } from '@angular/core';
import { PhotoVideoService, Pictures, Videos } from '../photo-video.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedType = 'photos';
  images: Pictures;
  videos: Videos;
  headerBackground: Pictures;
  searchText = '';
  favoriteImageArray = new Array(15).fill(false);
  favoriteVideoArray = new Array(15).fill(false);
  favoriteImages: Pictures[] = [];
  favoriteVideos: Videos[] = [];

  constructor(
    private readonly photoViodeoService: PhotoVideoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // if (this.router.url.includes('video')) {
    //   this.selectedType = 'videos';
    //   this.route.params.subscribe(params => {
    //     this.searchText = params.id;
    //     this.searchDetails();
    //     this.searchText = '';
    //   });
    // } else if (this.router.url.includes('photo')) {
    //   this.selectedType = 'photos';
    //   this.route.params.subscribe(params => {
    //     this.searchText = params.id;
    //     this.searchDetails();
    //     this.searchText = '';
    //   });
    // } else {
    //   this.photoViodeoService.getAllImages('animal').subscribe(
    //     (res: any) => {
    //       this.images = res;
    //       // console.log(res);
    //     },
    //     (error: any) => {
    //       window.alert(error);
    //     }
    //   );
    // }
    // this.photoViodeoService.getHeaderBackground().subscribe(
    //   (res: any) => {
    //     this.headerBackground = res[0].src.medium;
    //     console.log(res[0].src.medium);
    //   },
    //   (error: any) => {
    //     window.alert(error);
    //   }
    // );
  }

  setSelectedType(type: string) {
    this.selectedType = type;
    console.log(type);

    if (type === 'videos') {
      this.photoViodeoService.getAllVideos('animal').subscribe(
        (res: any) => {
          this.videos = res;
          console.log(res);
        },
        (error: any) => {
          window.alert(error);
        }
      );
    } else if (type === 'photos') {
      this.photoViodeoService.getAllImages('animal').subscribe(
        (res: any) => {
          this.images = res;
          console.log(res);
        },
        (error: any) => {
          window.alert(error);
        }
      );
    } else {
      this.favoriteImages = this.photoViodeoService.getFavoriteImages();
      this.favoriteVideos = this.photoViodeoService.getFavoriteVideos();
    }
  }

  detailedPhoto(image) {
    this.photoViodeoService.setDetailedFile(image);
    this.router.navigateByUrl('/photo-details');
  }

  detailedVideo(video) {
    this.photoViodeoService.setDetailedFile(video);
    this.router.navigateByUrl('/video-details');
  }

  search(event) {
    this.searchText = event.target.value;
    console.log(event.target.value);
  }

  searchDetails() {
    if (this.searchText.length >= 3) {
      this.favoriteImageArray = new Array(15).fill(false);
      this.favoriteVideoArray = new Array(15).fill(false);

      if (this.selectedType === 'videos') {
        this.photoViodeoService.getAllVideos(this.searchText).subscribe(
          (res: any) => {
            this.videos = res;
            console.log(res);
          },
          (error: any) => {
            window.alert(error);
          }
        );
      } else {
        this.selectedType = 'photos';
        this.photoViodeoService.getAllImages(this.searchText).subscribe(
          (res: any) => {
            this.images = res;
            console.log(res);
          },
          (error: any) => {
            window.alert(error);
          }
        );
      }
    } else {
      window.alert('Please Enter atleast 3 digits to search');
    }
  }

  unlike(index, data, type) {
    if (type === 'image') {
      this.photoViodeoService.removeFavoriteImage(data);
      this.favoriteImageArray[index] = false;
    } else {
      this.photoViodeoService.removeFavoriteVideo(data);
      this.favoriteVideoArray[index] = false;
    }
  }

  like(index, data, type) {
    if (type === 'image') {
      this.photoViodeoService.setFavoriteImages(data);
      this.favoriteImageArray[index] = true;
    } else {
      this.photoViodeoService.setFavoriteVideos(data);
      this.favoriteVideoArray[index] = true;
    }
  }
}
