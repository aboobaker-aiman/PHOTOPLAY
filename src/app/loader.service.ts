/*
 * Filename: f:\Development\Angular\PhotoPlay\src\app\loader.service.ts
 * Path: f:\Development\Angular\PhotoPlay
 * Created Date: Saturday, February 13th 2021, 9:45:14 am
 * Author: Aboobaker Aiman
 *
 * Copyright (c) 2021 Your Company
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  display(value: boolean): void {
    this.status.next(value);
  }
}
