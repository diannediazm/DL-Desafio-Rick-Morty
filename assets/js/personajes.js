export class Personajes {
    constructor(id) {
      this._id = id;
    }
  
    get id() {
      return this._id;
    }
  
    set id(nuevo_id) {
      this._id = nuevo_id;
    }
  }
  