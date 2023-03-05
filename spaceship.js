class SpaceShip {
  constructor() {
    this.speedometer = 0;
    this.fuel = 400;
    this.passengers = ['John', 'Steve', 'Sam', 'Danielle'];
    this.shields = true;
  }
  
  listPassengers() {
    console.log('Passengers:');
    for (let i = 0; i < this.passengers.length; i++) {
      console.log(`Passenger ${i + 1}: ${this.passengers[i]}`);
    }
  }
  
  addPassenger(newPassenger) {
    this.passengers.push(newPassenger);
    console.log(`${newPassenger} was added to the ship`);
  }
  
  travel(distance) {
    console.log(`Trying to travel: ${distance}`);
    if (this.fuel === 0) {
      console.log("Can't go further, tank is empty");
      return;
    }
    
    let fuelConsumed = distance / 2;
    this.fuel -= fuelConsumed;
    if (this.fuel < 0) {
      let travelableDistance = distance - (this.fuel * -2);
      this.speedometer += travelableDistance;
      this.fuel = 0;
      console.log(`Can only travel: ${travelableDistance}`);
    } else {
      this.speedometer += distance;
      if (this.fuel <= 30) {
        this.shields = false;
        console.log("Fuel is low, turning off shields...");
      }
    }
    
    console.log(`The SpaceShip is at: ${this.speedometer}`);
    console.log(`The spaceship has: ${this.fuel} fuel`);
  }
}

const spaceShip = new SpaceShip();
spaceShip.listPassengers();
spaceShip.addPassenger('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);