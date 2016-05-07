import {safeProvide} from "safe-provide"

import {FixturesService} from "./fixtures";
import {FixturesProviderToken} from "./fixtures";

export const SINGLETON_SERVICE_PROVIDERS = [
  safeProvide(FixturesProviderToken).useClass(FixturesService)
];
