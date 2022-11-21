import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Elf.addElf();
  }
  
  private static addElf() {
    this._elfCount += 1;
  }

  static get elfs() {
    return this._elfCount;
  }
        
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfs;
  }
}

export default Elf;