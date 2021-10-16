const mymodule = require('./index.js');

const some = new mymodule.Timeq('Abcd', 'Hooj');
const cool = new mymodule.Timeq();

mymodule.ping(); //* pong

cool.display(); //* Caf Hooj

cool.setData({
    firstName: 'Test',
    lastName: '123',
});

some.display(); //* Abcd Hooj
cool.display(); //* Test 123
