import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Orc.addOrc();
  }
  
  private static addOrc() {
    this._orcCount += 1;
  }

  static get orcs() {
    return this._orcCount;
  }
        
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.orcs;
  }
}

export default Orc;