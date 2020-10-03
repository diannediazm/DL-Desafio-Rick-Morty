export default class Personajes {
    constructor(id) {
        let _id = id;
        this.getId = () => _id;
        }

        get id () {
            return this.getId();
        }

        set id (nuevo_id) {
            this.setId(nuevo_id);
        }
    }
