import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HudsonAppComponent } from './hudson.component';

beforeEachProviders(() => [HudsonAppComponent]);

describe('App: Hudson', () => {
  it('should create the app',
      inject([HudsonAppComponent], (app: HudsonAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
