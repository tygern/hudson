import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HudsonAppComponent } from '../app/hudson.component';

beforeEachProviders(() => [HudsonAppComponent]);

describe('App: Hudson', () => {
  it('should create the app',
      inject([HudsonAppComponent], (app: HudsonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hudson works!\'',
      inject([HudsonAppComponent], (app: HudsonAppComponent) => {
    expect(app.title).toEqual('hudson works!');
  }));
});
