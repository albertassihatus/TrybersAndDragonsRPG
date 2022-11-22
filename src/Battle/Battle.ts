import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected _player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
