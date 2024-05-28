import Person from "./Person.js";

class Student extends Person {
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }

  get() {
    return this._name;
  }

  set(value: string) {
    this._name = value;
  }
}

export default Student;
