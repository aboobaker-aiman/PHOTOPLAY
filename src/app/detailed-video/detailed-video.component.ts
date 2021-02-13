/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\detailed-video\detailed-video.component.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 12:07:50 pm
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Component, OnInit } from '@angular/core';
import { PhotoVideoService, Videos } from '../photo-video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-video',
  templateUrl: './detailed-video.component.html',
  styleUrls: ['./detailed-video.component.scss']
})
export class DetailedVideoComponent implements OnInit {
  fileDetails: Videos;
  searchText = '';
  favoriteVideo = false;

  constructor(
    private readonly photoViodeoService: PhotoVideoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fileDetails = this.photoViodeoService.getFileDetailes();
  }

  search(event) {
    this.searchText = event.target.value;
    console.log(event.target.value);
  }

  searchEnter() {
    if (this.searchText.length >= 3) {
      this.router.navigateByUrl('/video/' + this.searchText);
    } else {
      window.alert('Please Enter atleast 3 digits to search');
    }
  }

  like(data) {
    this.photoViodeoService.setFavoriteVideos(data);
    this.favoriteVideo = true;
  }

  unlike(data) {
    this.photoViodeoService.removeFavoriteVideo(data);
    this.favoriteVideo = false;
  }
}
