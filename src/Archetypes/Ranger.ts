import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _rangerCount = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger.addRanger();
  }
  
  private static addRanger() {
    this._rangerCount += 1;
  }

  static get rangers() {
    return this._rangerCount;
  }
        
  static createdArchetypeInstances(): number {
    return Ranger.rangers;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;