// problem 
class UserInfo {
    constructor(userName , address , fullName , phone , email) {
        this.userName = userName
        this.address = address
        this.fullName = fullName
        this.phone = phone
        this.email = email
    }
}

const user = new UserInfo('mustafa' , undefined , undefined , undefined , 'ma@.com');
// console.log(user)

class Car {
    #color = null
    #spoiler = null 
    #fuelType = null 
    #productionDate = null

    constructor(color, spoiler, fuelType, productionDate) {
        this.#color = color
        this.#spoiler = spoiler
        this.#fuelType = fuelType
        this.#productionDate = productionDate
    }

    toString() {
        return `color: ${this.#color} spoiler: ${this.#spoiler} fuel type: ${this.#fuelType} production date: ${this.#productionDate}`
    }
}

const car = new Car('red', true, 'petrol', new Date('2020-09-21'))

console.log(car)
console.log(car.toString())

class CarBuilder {
    #color = null
    #spoiler = null
    #fuelType = null
    #productionDate = null


    static Builder = class {
        #color = null
        #spoiler = null
        #fuelType = null
        #productionDate = null

        setColor(color) {
            this.#color = color;
            return this;
        }

        setSpoiler(spoiler) {
            this.#spoiler = spoiler
            return this
        }

        setFuelType(fuelType) {
            this.#fuelType = fuelType
            return this
        }

        setProductionDate(date) {
            this.#productionDate = date
            return this
        }

        build() {
            const car = new Car(
                this.#color,
                this.#spoiler,
                this.#fuelType,
                this.#productionDate)
            return car
        }
    }

    constructor(color, spoiler, fuelType, productionDate) {
        this.#color = color
        this.#spoiler = spoiler
        this.#fuelType = fuelType
        this.#productionDate = productionDate
    }

    toString() {
        return `color: ${this.#color} spoiler: ${this.#spoiler} fuel type: ${this.#fuelType} production date: ${this.#productionDate}`
    }
}

const carBuilder = new CarBuilder.Builder()
    .setColor('red')
    .setSpoiler(true)
    .setFuelType('petrol')
    .setProductionDate(new Date('2021-09-21'))
    .build()

console.log(carBuilder.toString())

const carBuilderTwo = new CarBuilder();
console.log(carBuilderTwo.Builder()
.setColor('red')
.build()
)