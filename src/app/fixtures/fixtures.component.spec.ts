import {
  beforeEach,
  describe,
  expect,
  it,
} from '@angular/core/testing';
import { FixturesComponent } from './fixtures.component';

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Fixture} from "./fixture";
import {FixturesProvider} from "./fixtures.provider";
import {Team} from "./team";

describe('FixtureService', () => {
  class FakeFixtureProvider implements FixturesProvider {

    private subject:Subject<Fixture[]>;

    constructor() {
      this.subject = Subject.create();
    }

    fetchList():Observable<Fixture[]> {
      return this.subject.asObservable();
    }

    public simulateValue(fixtureList: Fixture[]) {
      this.subject.next(fixtureList);
    }

  }

  var fixtureComponent: FixturesComponent;
  var fixtureProvider: FakeFixtureProvider;

  beforeEach(() => {
    fixtureProvider = new FakeFixtureProvider();
    fixtureComponent = new FixturesComponent(fixtureProvider)
  });

  it('loads fixtures', () => {
    let fixture = new Fixture(
      new Team("Bolton"),
      new Team("Villa"),
      2,
      1
    );

    expect(fixtureComponent.fixtureList).toEqual([]);

    fixtureProvider.simulateValue([fixture]);

    expect(fixtureComponent.fixtureList).toEqual([fixture]);
  });
});

