import Person from "./Person.js";
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get() {
        return this._name;
    }
    set(value) {
        this._name = value;
    }
}
export default Student;
