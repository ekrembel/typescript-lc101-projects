"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.currentItemsMass = 0;
        this.currentAstronautsMass = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        return this.currentItemsMass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.currentAstronautsMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            this.currentItemsMass += cargo.massKg;
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            this.currentAstronautsMass += astronaut.massKg;
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
