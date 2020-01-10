import { Deserializable } from './deserializable.model';

export class Mufaj implements Deserializable {

    id: number;
    megnevezes: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
