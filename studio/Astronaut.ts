import {Payload} from "./Payload";

export class Astronaut {
    name: string;
    massKg;
    constructor(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
}