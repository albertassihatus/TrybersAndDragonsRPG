import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }

  // loot: Dragon Shield, Dragon Scale Mail, Dragon Lance, Gold Coins, Dragon Ham, Spear
}