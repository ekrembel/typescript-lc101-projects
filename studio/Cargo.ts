import {Payload} from "./Payload";

export class Cargo implements Payload {
    massKg;
    material: string;
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
}