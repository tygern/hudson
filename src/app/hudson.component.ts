import {Component} from '@angular/core';
import {FixturesComponent} from './fixtures';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {SINGLETON_SERVICE_PROVIDERS} from "./hudson.configuration";

@Component({
  moduleId: module.id,
  selector: 'hudson-app',
  templateUrl: 'hudson.component.html',
  styleUrls: ['hudson.component.css'],
  providers: [SINGLETON_SERVICE_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, FixturesComponent]
})
@Routes([
  {path: '/fixtures', component: FixturesComponent}
])
export class HudsonAppComponent {
}
