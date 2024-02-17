function FactoryUser(name , age , email) {
    return {
        getUserInfo() {
            console.log(`user name is ${name} age is ${age} email ${email}`)
        }
    }
}

// const mustafa = new FactoryUser('mustafa' , 32 , "email@com");
// mustafa.getUserInfo();


function FactoryCreateElement(type , value) {
    const element = document.createElement(type);

    element.innerText = value

    document.body.append(element)

    return {
        element,
        changeValue(newValue) {
            element.innerText = newValue;
            console.log(newValue)
        }
    }
}

// const p = new FactoryCreateElement('p' , 'hi');
// p.changeValue('ahmed')
// const h2 = new FactoryCreateElement('h2' , 'hi');

class Car {
    constructor(type , name) {
        this.type = type
        this.name = name
    }
}

class Truck {
    constructor(type , name) {
        this.type = type
        this.name = name
    }
}

class VehiclesFactoryMethod {
    create(name , type) {
        switch(type) {
            case "Car": 
             return new Car(name , type)
            case "Truck": 
             return new Truck(name , type)
        }
    }
}

// const typeCars = new VehiclesFactoryMethod

// let vehicles = [];
// vehicles.push(typeCars.create('BMW' , 'Car'))
// vehicles.push(typeCars.create('MM' , 'Truck'))

// console.log(vehicles)


function FactoryEmployee(name , type) {
    return {
        name,
        create() {
            console.log(`i am ${type} + ${name}`)
        }
    }
}

const employeeOne = new FactoryEmployee('ahmed' , 'human');
console.log(employeeOne)
employeeOne.create()