import { Deserializable } from './deserializable.model';
import { Mufaj } from './mufaj.model';

export class Film implements Deserializable{

    id: number;
    cim: string;
    szereplok: string;
    jatekido: number;
    mufaj: Mufaj;
    tartalom: string;
    ev: number;
    kep: string;

    deserialize(input: any): this { 
        Object.assign(this, input);
        return this;
    }

}
