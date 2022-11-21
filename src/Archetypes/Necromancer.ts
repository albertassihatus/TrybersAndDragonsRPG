import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _necromancerCount = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer.addNecro();
  }
  
  private static addNecro() {
    this._necromancerCount += 1;
  }

  static get necros() {
    return this._necromancerCount;
  }
        
  static createdArchetypeInstances(): number {
    return Necromancer.necros;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  // loot: Boots Of Haste
}

export default Necromancer;