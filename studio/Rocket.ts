import {Payload} from "./Payload";
import {Cargo} from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {

    currentItemsMass: number = 0;
    currentAstronautsMass: number = 0;
    name: string;
    totalCapacityKg: number;
    cargoItems = []; 
    astronauts = [];
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        return this.currentItemsMass;
    }
    currentMassKg(): number {     
        return this.sumMass(this.cargoItems) + this.currentAstronautsMass;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            this.currentItemsMass += cargo.massKg;
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            this.currentAstronautsMass += astronaut.massKg;
            return true;
        }
        return false;        
    }

}