import { Mufaj } from './mufaj'

export interface Film {
    id: number;
    cim: string;
    szereplok: string;
    jatekido: number;
    mufaj: Mufaj;
    tartalom: string;
    ev: number;
    kepUrl: string;
}
