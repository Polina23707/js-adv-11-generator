export class Team {
  constructor(char1, char2, char3, char4) {
    this[0] = char1;
    this[1] = char2;
    this[2] = char3;
    this[3] = char4;
    this.length = 4;
  }

  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    yield this[0];
    yield this[1];
    yield this[2];
    return this[3];
  }
}

