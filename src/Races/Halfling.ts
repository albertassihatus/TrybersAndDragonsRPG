import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Halfling.addHalfling();
  }
  
  private static addHalfling() {
    this._halflingCount += 1;
  }

  static get halflings() {
    return this._halflingCount;
  }
        
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.halflings;
  }
}

export default Halfling;