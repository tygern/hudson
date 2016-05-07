import {Team} from "./team";

export class Fixture {
  constructor(public homeTeam:Team,
              public awayTeam:Team,
              public homeGoals:number,
              public awayGoals:number) {
  }
}
