import './personajes';

export default class DetallesPersonajes extends Personaje {
    constructor(
        id,
        name,
        status,
        species,
        gender,
        created,
        origin,
        location,
        episode
    ) {
        super (id);
        
        let _name = name;
        this_getName = () => {
            return _name;
        };
        let _status = status;
        this_getStatus = () => {
            return _status;
        };
    }
}