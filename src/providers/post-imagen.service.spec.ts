import { TestBed } from '@angular/core/testing';

import { PostImagenService } from './post-imagen.service';

describe('PostImagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostImagenService = TestBed.get(PostImagenService);
    expect(service).toBeTruthy();
  });
});
