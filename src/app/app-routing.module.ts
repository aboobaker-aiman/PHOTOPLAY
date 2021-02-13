/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\app-routing.module.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:15:00 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedPhotoComponent } from './detailed-photo/detailed-photo.component';
import { DetailedVideoComponent } from './detailed-video/detailed-video.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'photo-details', component: DetailedPhotoComponent },
  { path: 'video-details', component: DetailedVideoComponent },
  { path: 'photo/:id', component: HomeComponent },
  { path: 'video/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
