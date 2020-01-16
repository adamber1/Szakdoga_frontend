import { Deserializable } from './deserializable.model';

export class Room implements Deserializable{

    id: number;
    helyek_szama: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
