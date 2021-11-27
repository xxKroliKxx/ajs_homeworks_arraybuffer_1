export default class Character {
  constructor() {
    this.defaultAttack = 0;
    this._stoned = false;
    this.distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set attack(value) {
    this.defaultAttack = value;
  }

  get attack() {
    const attackPercent = this.distance > 10 ? 0 : 100 - (this.distance - 1) * 10;
    const attack = this.defaultAttack * (attackPercent / 100)
        - (this._stoned ? Math.log2(this.distance) * 5 : 0);
    return Math.max(0, attack);
  }
}
