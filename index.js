let workers = {};

workers.ping = function () {
    console.log('pong');
};

workers.Timeq = class Timeq {
    constructor(firstName = 'Caf', lastName = 'Hooj') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setData(json) {
        Object.assign(this, json);
    }

    display() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

module.exports = workers;
