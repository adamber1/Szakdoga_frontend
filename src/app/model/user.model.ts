import { Deserializable } from './deserializable.model';

export class User implements Deserializable {

    nev: string;
    email: string;
    admin: boolean;

    constructor(userResponse: any) {
        this.nev = userResponse.nev;
        this.email = userResponse.email;
        this.admin = userResponse.admin;
    }

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
