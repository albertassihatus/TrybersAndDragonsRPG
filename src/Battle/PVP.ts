import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(public _player: Fighter, public _player2: Fighter) {
    super(_player);
  }

  private battle() {
    while (this._player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player2.attack(this._player);
      this._player.attack(this._player2);
    }
  }

  fight(): number {
    this.battle();
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;