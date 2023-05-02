export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Unable to add character twice');
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    yield* this.toArray();
  }
}
