function checkUsedItem(item) {
    if (item === 'potion') {
        myCharacter.health += 20;
        if (myCharacter.health > 100) {
            myCharacter.health = 100;
        }
    } else {
        return;
    }
}


const myCharacter = {
    name: "broidk",
    health: 100,
    inventory: {
        gold: 50,
        potion: 2,
        sword: 1
    },
    status: "Adventurer",
    addItem(item, quantity) {
        if (typeof quantity !== 'number' || quantity <= 0 || typeof item !== 'string' || item === '') {
            console.log("Invalid item or quantity");
        } else if (item in this.inventory) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    },
    useItem(item) {
        if (!(item in this.inventory)) {
            console.log(`No ${item} in inventory`);
            return;
        } else if (item in this.inventory) {
            checkUsedItem(item);
            this.inventory[item]--;
            if (this.inventory[item] <= 0) {
                delete this.inventory[item];
            }
        }
    },
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 'Dead';
        }
    },
    get displayStatus() {
        return `${this.name} - Health: ${this.health}, Status: ${this.status}`;
    },
    get displayInventory() {
        const itemList = Object.entries(this.inventory)
            .map(([k, v]) => `${k}: ${v}`)
            .join(', ') || 'empty';
        return `Inventory: ${itemList}`;
    }
};

//myCharacter.addItem("shield", 1);
//myCharacter.addItem("shield", 1);
//myCharacter.useItem("potion");
//myCharacter.useItem("potion");

myCharacter.takeDamage(30);
//myCharacter.takeDamage(80);

myCharacter.useItem("potion");


console.log(myCharacter.displayStatus);
console.log(myCharacter.displayInventory);
