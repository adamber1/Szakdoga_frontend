import { Deserializable } from './deserializable.model';
import { Film } from './film.model';
import { Room } from './room.model';

export class Show implements Deserializable{

    id: number;
    film: Film;
    idopont: Date;
    nyelv: string;
    tipus: string;
    terem: Room;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
