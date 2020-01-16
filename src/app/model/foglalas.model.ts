import { Deserializable } from './deserializable.model';
import { Show } from './show.model';

export class Foglalas implements Deserializable{

    id: number;
    hely_sorszama: number;
    igazolvany_szam: number;
    vetites: Show;

    deserialize(input: any): this { 
        Object.assign(this, input);
        return this;
    }

}
