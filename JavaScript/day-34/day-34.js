class Bike {
    // function ride
    ride(dest) {
        console.log('Going to ' + dest + "...");
    }
}

class User {
    constructor(balance) {
        this.balance = balance;
    }
}

class Manager {
    check(user, dest) {
        if (user.balance < 10)
            throw 'Not enough balance!';

        if (dest !== 'destination' && dest !== 'dest_aa')
            throw dest + 'Unsolved destination!';
    }

    send(user, dest) {
        this.check(user, dest);
        let bike = new Bike();
        bike.ride(dest);

    }
}

const aa = new User(15);

const manager = new Manager();

manager.send(aa, 'destination')