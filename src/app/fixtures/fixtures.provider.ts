import {Fixture} from "./fixture";
import {Observable} from "rxjs/Observable";

import {SafeToken} from "safe-provide";

export const FixturesProviderToken = new SafeToken<FixturesProvider>("FixtureProvider");

export interface FixturesProvider {
  fetchList():Observable<Fixture[]>
}
