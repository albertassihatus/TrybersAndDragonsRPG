import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static _mageCount = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage.addMage();
  }
  
  private static addMage() {
    this._mageCount += 1;
  }

  static get mages() {
    return this._mageCount;
  }
        
  static createdArchetypeInstances(): number {
    return Mage.mages;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;