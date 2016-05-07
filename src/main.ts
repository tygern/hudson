import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {enableProdMode} from '@angular/core';
import {HudsonAppComponent, environment} from './app/index';
import {ROUTER_PROVIDERS} from '@angular/router'

if (environment.production) {
  enableProdMode();
}

bootstrap(HudsonAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
