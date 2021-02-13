import { TestBed } from '@angular/core/testing';

import { PhotoVideoService } from './photo-video.service';

describe('PhotoVideoService', () => {
  let service: PhotoVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
