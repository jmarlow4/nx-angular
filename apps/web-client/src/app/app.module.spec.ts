import { waitForAsync, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('TestModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AppModule).toBeDefined();
  });
});
