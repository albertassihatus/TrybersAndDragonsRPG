import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _warriorCount = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.addWarrior();
  }
  
  private static addWarrior() {
    this._warriorCount += 1;
  }

  static get warriors() {
    return this._warriorCount;
  }
        
  static createdArchetypeInstances(): number {
    return Warrior.warriors;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;