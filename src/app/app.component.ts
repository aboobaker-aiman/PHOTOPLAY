/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\app.component.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:15:00 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader = false;

  constructor(private readonly loaderService: LoaderService) {
    this.loaderService.status.subscribe(data => {
      this.showLoader = data;
    });
  }
}
