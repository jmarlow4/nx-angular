import { waitForAsync, TestBed } from '@angular/core/testing';
import { WebCoreModule } from './core.module';

describe('TestModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WebCoreModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(WebCoreModule).toBeDefined();
  });
});
