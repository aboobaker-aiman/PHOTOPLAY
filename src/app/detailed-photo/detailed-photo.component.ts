/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\detailed-photo\detailed-photo.component.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 12:07:40 pm
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Component, OnInit } from '@angular/core';
import { PhotoVideoService, Videos } from '../photo-video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-photo',
  templateUrl: './detailed-photo.component.html',
  styleUrls: ['./detailed-photo.component.scss']
})
export class DetailedPhotoComponent implements OnInit {
  fileDetails: Videos;
  searchText = '';
  favoriteImage = false;

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
      this.router.navigateByUrl('/photo/' + this.searchText);
    } else {
      window.alert('Please Enter atleast 3 digits to search');
    }
  }

  like(data) {
    this.photoViodeoService.setFavoriteImages(data);
    this.favoriteImage = true;
  }

  unlike(data) {
    this.photoViodeoService.removeFavoriteImage(data);
    this.favoriteImage = false;
  }
}
