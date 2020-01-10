import { Deserializable } from './deserializable.model';
import { Mufaj } from './mufaj.model';

export class Film implements Deserializable{

    id: number;
    cim: string;
    szereplok: string;
    jatekIdo: number;
    mufaj: Mufaj;
    tartalom: string;
    ev: number;
    kep: string;

    deserialize(input: any): this { 
        Object.assign(this, input);
        return this;
    }

}
