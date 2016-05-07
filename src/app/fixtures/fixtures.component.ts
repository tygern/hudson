import {Component, Inject} from '@angular/core';
import {Fixture} from "./fixture";
import {FixturesProvider, FixturesProviderToken} from "./fixtures.provider";

@Component({
  moduleId: module.id,
  selector: 'fixtures',
  templateUrl: 'fixtures.component.html',
  styleUrls: ['fixtures.component.css']
})
export class FixturesComponent {
  public fixtureList:Fixture[] = [];

  constructor(@Inject(FixturesProviderToken) private fixtureProvider:FixturesProvider) {

    fixtureProvider.fetchList().subscribe((fixtures) => {
      this.fixtureList = fixtures;
    });
  }
}
