import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    public _player: Fighter,
    public _monsters: Fighter[] | SimpleFighter[],
  ) {
    super(_player);
  }

  private battle(monster: Fighter | SimpleFighter) {
    while (this._player.lifePoints !== -1 && monster.lifePoints !== -1) {
      this._player.attack(monster);
      monster.attack(this._player);
    }
  }

  private monstersAlives() {
    for (let i = 0; i < this._monsters.length; i += 1) {
      this.battle(this._monsters[i]);
    }
  }

  fight(): number {
    this.monstersAlives();
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;