var person = {
    first_name: "Bhumika",
    age: 21,
    isfemale: true,
    balance: 1000.01,
    dob: new Date(2000, 4, 23).toJSON(),
    address: {
        city: "Mithi",
        code: 256

    }

};
console.log(person.first_name);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person))


