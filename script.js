// pet object
const Pet = {
    //   pet properties
    name: "",
    happiness: 0,
    energy: 0,
    //   pet methods
    feed: function () {
      this.energy += 2;
    },
    pet: function () {
      this.happiness += 1;
    },
    walk: function () {
      if (this.energy >= 1) {
        this.happiness += 2;
        this.energy -= 1;
      } else {
        alert("not enough energy for a walk");
      }
    },
  };
  //   get Pet name
  Pet.name = prompt("Choose your pet name?");
  //   do the 6 actions
  for (let i = 0; i < 6; i++) {
    let action = prompt(
      "What do you like to do with your pet? 'feed', 'pet' or 'walk'"
    );
    if (action === "feed") {
      Pet.feed();
    } else if (action === "pet") {
      Pet.pet();
    } else if (action === "walk") {
      Pet.walk();
    } else {
      alert("choose an action from the list: 'feed', 'pet' or 'walk'");
    }
  }
  console.log("Pet Name: " + Pet.name);
  console.log("Happiness: " + Pet.happiness);
  console.log("Energy: " + Pet.energy);
  console.log(
    Pet.name +
      " has " +
      Pet.happiness +
      " happiness and " +
      Pet.energy +
      " energy"
  );
