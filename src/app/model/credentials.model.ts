import { Deserializable } from './deserializable.model';

export class Credentials implements Deserializable{

    name: string;
    password: string;

    deserialize(input: any): this { 
        Object.assign(this, input);
        return this;
    }

}
