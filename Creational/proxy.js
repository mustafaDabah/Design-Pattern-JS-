const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const handlers = {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
};

const personProxy = new Proxy(person, handlers);

personProxy.name = 'mustafa dabah';
personProxy.name;
console.log(personProxy)
