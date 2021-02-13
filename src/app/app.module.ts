/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\app.module.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:15:00 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailedPhotoComponent } from './detailed-photo/detailed-photo.component';
import { DetailedVideoComponent } from './detailed-video/detailed-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DetailedPhotoComponent,
    DetailedVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
